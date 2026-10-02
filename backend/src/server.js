import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`🚀 Gobind Catering Backend is running!`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`📋 Menu API: http://localhost:${PORT}/api/menu`);
    console.log(`🖨️ PDF API: http://localhost:${PORT}/api/generate-pdf`);
    console.log(`========================================`);
  });
};

startServer().catch((err) => {
  console.error('Fatal startup error:', err);
  process.exit(1);
});
