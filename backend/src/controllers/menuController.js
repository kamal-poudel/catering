import MenuItem from '../models/MenuItem.js';
import { PdfService } from '../services/pdfService.js';

export const getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find()
      .sort({ pdfPage: 1, columnIndex: 1, displayOrder: 1 })
      .lean();

    res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch menu items',
      error: error.message,
    });
  }
};

export const generatePdf = async (req, res) => {
  try {
    const { items = [], customerInfo = {} } = req.body;

    if (!Array.isArray(items)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid request: items must be an array',
      });
    }

    const pdfBuffer = await PdfService.generateMenuPdf(items, customerInfo);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Gobind-Catering-Menu.pdf"');
    res.setHeader('Content-Length', pdfBuffer.length);

    res.status(200).send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate menu PDF',
      error: error.message,
    });
  }
};
