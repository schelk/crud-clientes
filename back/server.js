const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json()); //parsing json
app.use(cors());

const db = require("./models");

//Routers
const postRouter = require("./routes/RotaClientes");
app.use("/posts", postRouter);
//

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server is running on http://localhost:3001");
  });
});
