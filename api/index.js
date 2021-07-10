require('dotenv').config({ path: '../.env' })
const express = require('express')
const app = express()
const pedido = require('./routes/pedidos/index')

app.use(express.json())
app.use('/api/pedido', pedido )
app.listen(process.env.API_PORT, () => console.log(`A API está funcionando na porta ${process.env.API_PORT}` ))
