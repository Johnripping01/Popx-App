const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// -----------------
// Serve React frontend in production
// -----------------
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// -----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
