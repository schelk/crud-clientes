const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());
//

const db = require("./models");

//Routers
const clientesRouter = require("./routes/RotaClientes");
app.use("/clientes", clientesRouter);
//

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server is running on http://localhost:3001");
  });
});
