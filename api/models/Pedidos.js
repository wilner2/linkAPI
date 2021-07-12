const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  pessoa: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  organizacao: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
});

const Negocios = mongoose.model('Pedido', schema);

module.exports = Negocios;
