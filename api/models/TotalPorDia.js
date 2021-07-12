const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
  valor: {
    type: Number,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
});

const Negocios = mongoose.model('TotalPorDia', schema);

module.exports = Negocios;
