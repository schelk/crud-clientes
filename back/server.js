const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3000;
// Open SQLite database (it creates the file if it doesn't exist)
const db = new sqlite3.Database("./mydatabase.db");

// Endpoint to create a table
app.get("/api", (req, res) => {
  res.json({ user: ["userOne", "userTwo", "userThree"] });
});

// // Endpoint to insert data into the table
// app.get("/add", (req, res) => {
//   const { name, age } = req.query;
//   db.run(
//     "INSERT INTO users (name, age) VALUES (?, ?)",
//     [name, age],
//     function (err) {
//       if (err) {
//         res.status(500).send("Error inserting data: " + err.message);
//       } else {
//         res.send(`Added user with ID ${this.lastID}`);
//       }
//     }
//   );
// });

// // Endpoint to fetch all users
// app.get("/users", (req, res) => {
//   db.all("SELECT * FROM users", [], (err, rows) => {
//     if (err) {
//       res.status(500).send("Error fetching users: " + err.message);
//     } else {
//       res.json(rows);
//     }
//   });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
