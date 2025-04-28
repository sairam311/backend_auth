const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const connectDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI;
    if (!mongodbUri) {
        throw new Error("MONGODB_URI is not defined in .env file");
    }
    await mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if the database connection fails
  }
};

module.exports = connectDB;
