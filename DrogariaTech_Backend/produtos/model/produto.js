const mongoose = require("mongoose");

const Produto = mongoose.model("Produto", {
  nome: String,
  nomeCientifico: String,
  nomesPopulares: String,
  imagemProduto: String,
  beneficios: String,
  descricao: String,
});

module.exports = Produto;
