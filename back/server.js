const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

// Open SQLite database (it creates the file if it doesn't exist)
const db = new sqlite3.Database(
  "./mydatabase.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

app.get("/api", (req, res) => {
  res.json({ fruits: ["server", "is", "working"] });
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
