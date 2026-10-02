import express from 'express';
import { getMenuItems, generatePdf } from '../controllers/menuController.js';

const router = express.Router();

router.get('/menu', getMenuItems);
router.post('/generate-pdf', generatePdf);
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;
