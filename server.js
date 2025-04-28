const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

const taskRoutes = require('./routes/task');
app.use('/api/tasks', taskRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
