const express = require("express");
const router = express.Router();
const { Clientes } = require("../models");

router.get("/", async (req, res) => {
  const ListaDeClientes = await Clientes.findAll();
  res.json(ListaDeClientes);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Clientes.create(post);
  res.json(post);
});

// Testando o post (nesse momento estava utilizando insomnia para testes)
// router.post("/", async (req, res) => {
//   const post = req.body;
//   await console.log(post);
//   res.json(post);
// });

module.exports = router;
