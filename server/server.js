const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/movieRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require('cors');
dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // Parse incoming request bodies as JSON
app.use(cors()); // Enable CORS for all routes
app.use("/api/movies", movieRoutes); // Use movieRoutes for '/api/movies' endpoint

app.use(notFound); // Handle 404 errors
app.use(errorHandler); // Centralized error handler

app.get("/", (req, res) => {
  res.send("Hello World"); // Simple response for root endpoint
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
