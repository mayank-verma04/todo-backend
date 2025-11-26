require("dotenv").config();
const express = require("express");
const db = require("./config/db");

const app = express();


// Middleware
app.use(express.json());

// Import Routes
const todoRoutes = require("./routes/todo.routes");
const authRoutes = require("./routes/auth.routes");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.use("/", (req, res) => {
  res.send("ToDo APP Backend Running...");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
