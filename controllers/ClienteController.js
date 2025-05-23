import express from 'express';
import Cliente from '../models/Cliente.js'; // importe o model correto

const router = express.Router();

// LISTAR CLIENTES
router.get("/clientes", (req, res) => {
  Cliente.findAll().then(clientes => {
    res.render("clientes", { clientes });
  });
});

// CADASTRAR NOVO CLIENTE
router.post("/clientes/new", (req, res) => {
  const { nome, cpf, endereco } = req.body;
  Cliente.create({ nome, cpf, endereco }).then(() => res.redirect("/clientes"));
});

// EXCLUIR CLIENTE
router.get("/clientes/delete/:id", (req, res) => {
  Cliente.destroy({ where: { id: req.params.id } }).then(() => res.redirect("/clientes"));
});

// EDITAR DADOS
router.get("/clientes/edit/:id", (req, res) => {
  Cliente.findByPk(req.params.id).then(cliente => {
    res.render("clienteEdit", { cliente });
  });
});

// SALVAR ALTERAÇÕES
router.post("/clientes/update/:id", (req, res) => {
  const { nome, cpf, endereco } = req.body;
  Cliente.update({ nome, cpf, endereco }, { where: { id: req.params.id } })
    .then(() => res.redirect("/clientes"));
});

export default router;