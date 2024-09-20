import express = require('express');
import mongoose = require('mongoose');
import dotenv = require('dotenv');
import todoRoutes from './routes/todoRoutes'; // Ensure the path is correct

dotenv.config();

const app = express();

// middlewares
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// MongoDB Connection
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error('Error: MongoDB URI is not defined in the environment variables');
  process.exit(1); // Exit the process if the connection string is missing
}

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch((err: Error) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if connection fails
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
