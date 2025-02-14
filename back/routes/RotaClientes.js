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

router.delete("/:id", async (req, res) => {
  try {
    const clienteId = req.params.id;

    const cliente = await Clientes.findByPk(clienteId);

    if (!cliente) {
      res.status(404).send("Cliente não encontrado");
    }

    await cliente.destroy();
    res.status(204).json({ message: "Cliente deletado com sucesso" });
  } catch (error) {
    console.log(error);
  }
});

// Testando o post (nesse momento estava utilizando insomnia para testes)
// router.post("/", async (req, res) => {
//   const post = req.body;
//   await console.log(post);
//   res.json(post);
// });

module.exports = router;
