import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MenuItem from '../models/MenuItem.js';
import { menuSeedData } from './menuSeedData.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gobind_catering';
    console.log(`Connecting to MongoDB at: ${mongoUri}`);
    await mongoose.connect(mongoUri);

    console.log('Clearing existing menu items...');
    await MenuItem.deleteMany({});

    console.log(`Seeding ${menuSeedData.length} menu items...`);
    const inserted = await MenuItem.insertMany(menuSeedData);
    console.log(`Successfully seeded ${inserted.length} menu items!`);

    await mongoose.connection.close();
    console.log('Database connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
