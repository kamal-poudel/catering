import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema(
  {
    nameHindi: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    defaultUnit: {
      type: String,
      required: true,
      trim: true,
      default: 'Kg',
    },
    allowedUnits: {
      type: [String],
      default: ['Kg', 'Gram'],
    },
    displayOrder: {
      type: Number,
      required: true,
      default: 0,
    },
    pdfPage: {
      type: Number,
      enum: [1, 2],
      required: true,
    },
    columnIndex: {
      type: Number,
      enum: [1, 2, 3],
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    quantityPosition: {
      x: {
        type: Number,
        required: true,
      },
      y: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

MenuItemSchema.index({ pdfPage: 1, columnIndex: 1, rowIndex: 1 });
MenuItemSchema.index({ category: 1, displayOrder: 1 });

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

export { MenuItem };
export default MenuItem;
