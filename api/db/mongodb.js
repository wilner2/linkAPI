/* eslint-disable no-console */
const mongoose = require('mongoose');
require('dotenv').config({ path: '../../.env' });

mongoose.connect(`${process.env.MONGO_db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(() => {
  console.log('Conectado ao servidor do Mongo');
})
  .catch((err) => console.log('Erro ao conectar no servidor Mongo', err));
const db = mongoose.connection;
module.exports = db;
