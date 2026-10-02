import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import MenuItem from '../models/MenuItem.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class PdfService {
  /**
   * Generates a 2-page PDF preserving the original Gobind Catering menu design
   * with quantities and units overlaid into the exact Qty columns.
   *
   * @param {Array} submittedItems - Array of { menuItemId, quantity, unit }
   * @param {Object} customerInfo - Optional { name, date, persons, orderNo }
   * @returns {Promise<Uint8Array>} PDF binary buffer
   */
  static async generateMenuPdf(submittedItems = [], customerInfo = {}) {
    const templatePath = path.join(
      __dirname,
      '../templates/Gobind Catering Menu Card (1).pdf'
    );

    if (!fs.existsSync(templatePath)) {
      throw new Error('New Gobind Catering template PDF not found in backend/src/templates');
    }

    const templateBytes = fs.readFileSync(templatePath);

    // Create a new master document
    const masterDoc = await PDFDocument.create();

    // Use only the two menu pages. Page 3 contains settlement/signature fields
    // that are not part of the current generated-menu flow.
    const sourceDoc = await PDFDocument.load(templateBytes);
    const [page1, page2] = await masterDoc.copyPages(sourceDoc, [0, 1]);

    masterDoc.addPage(page1);
    masterDoc.addPage(page2);

    // Load fonts
    const fontBold = await masterDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await masterDoc.embedFont(StandardFonts.Helvetica);

    // Fetch all menu items from database to match coordinates
    const allMenuItems = await MenuItem.find().lean();
    const itemMap = new Map();
    for (const item of allMenuItems) {
      itemMap.set(String(item._id), item);
    }

    // Text color: crisp dark blue/slate for high contrast and professional look
    const textColor = rgb(0.05, 0.15, 0.45);
    const infoTextColor = rgb(0.1, 0.1, 0.1);
    const quantityRightEdges = [189.4, 382.7, 575.9];

    const drawFittedRight = (page, text, rightEdge, y, maxWidth, maxSize, minSize, font, color) => {
      let size = maxSize;
      while (size > minSize && font.widthOfTextAtSize(text, size) > maxWidth) {
        size -= 0.25;
      }

      page.drawText(text, {
        x: rightEdge - font.widthOfTextAtSize(text, size),
        y,
        size,
        font,
        color,
      });
    };

    const drawFitted = (page, text, x, y, maxWidth, maxSize, minSize, font, color) => {
      let size = maxSize;
      while (size > minSize && font.widthOfTextAtSize(text, size) > maxWidth) {
        size -= 0.25;
      }

      page.drawText(text, { x, y, size, font, color });
    };

    // Overlay submitted quantities. Multiple legacy items can share one row in
    // the new template, so keep their values together instead of overwriting.
    const overlays = new Map();
    for (const subItem of submittedItems) {
      if (!subItem || !subItem.menuItemId) continue;

      const rawQty = subItem.quantity !== undefined && subItem.quantity !== null
        ? String(subItem.quantity).trim()
        : '';

      // If quantity is empty or null, DO NOT draw anything
      if (!rawQty || rawQty === '') continue;

      const menuItem = itemMap.get(String(subItem.menuItemId));
      if (!menuItem || !menuItem.quantityPosition) continue;

      const unit = subItem.unit || menuItem.defaultUnit || '';
      const textToDraw = `${rawQty} ${unit}`.trim();

      const targetPage = menuItem.pdfPage === 1 ? page1 : page2;
      const x = menuItem.quantityPosition.x;
      const y = menuItem.quantityPosition.y;
      const key = `${menuItem.pdfPage}:${x}:${y}`;
      const overlay = overlays.get(key) || {
        page: targetPage,
        x,
        y,
        values: [],
      };
      overlay.values.push(textToDraw);
      overlays.set(key, overlay);
    }

    for (const overlay of overlays.values()) {
      const text = overlay.values.join(' / ');
      const columnIndex = Math.round((overlay.x - 1 - 173.8) / 193.3) + 1;
      const cellRight = quantityRightEdges[Math.max(0, Math.min(2, columnIndex - 1))];
      drawFittedRight(
        overlay.page,
        text,
        cellRight,
        overlay.y,
        31,
        overlay.values.length > 1 ? 6 : 8,
        3.5,
        fontBold,
        textColor
      );
    }

    // Overlay only the dynamic values in the new A4 header's blank fields.
    if (customerInfo) {
      const { name, date, persons, orderNo } = customerInfo;

      if (name && String(name).trim()) {
        drawFitted(page1, String(name).trim(), 160, 738, 400, 7, 4.5, fontBold, infoTextColor);
      }

      if (date && String(date).trim()) {
        drawFitted(page1, String(date).trim(), 88, 725, 68, 7, 4.5, fontBold, infoTextColor);
      }

      if (persons && String(persons).trim()) {
        drawFitted(page1, String(persons).trim(), 337, 725, 72, 7, 4.5, fontBold, infoTextColor);
      }

      if (orderNo && String(orderNo).trim()) {
        drawFitted(page1, String(orderNo).trim(), 525, 725, 40, 7, 4.5, fontBold, infoTextColor);
      }
    }

    const finalPdfBytes = await masterDoc.save();
    return Buffer.from(finalPdfBytes);
  }
}
