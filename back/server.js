const express = require("express");
const app = express();

const db = require("./models");

//Routers
const postRouter = require("./routes/Clientes");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server is running on http://localhost:3001");
  });
});
