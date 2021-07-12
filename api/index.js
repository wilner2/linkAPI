/* eslint-disable no-console */
require('dotenv').config({ path: '../.env' });
require('./db/mongodb');
const express = require('express');

const app = express();
const pedidos = require('./routes/pedidos/index');
const negocios = require('./routes/negocios/index');

app.use(express.json());
app.use('/api/pedidos', pedidos);
app.use('/api/negocios', negocios);

app.listen(process.env.API_PORT, () => console.log(`A API está funcionando na porta ${process.env.API_PORT}`));
