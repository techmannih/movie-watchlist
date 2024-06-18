const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/movieRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(express.json()); // Parse incoming request bodies as JSON
app.use(cors()); // Enable CORS for all routes

// Use movieRoutes for '/api/movies' endpoint
app.use("/api/movies", movieRoutes);

// Simple response for root endpoint
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Handle 404 errors
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
