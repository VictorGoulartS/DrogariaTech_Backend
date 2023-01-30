const mongoose = require("mongoose");

const Loja = mongoose.model("Loja", {
  imagemLoja: String,
  endereco: String,
  telefone: String,
});

module.exports = Loja;
