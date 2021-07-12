const axios = require('axios');
require('dotenv').config({ path: '../../.env' });

const link = 'https://bling.com.br/Api/v2/pedido/json/';

const criarPedido = async (pedido) => {
  try {
    const result = await axios.post(link, {}, {
      params: {
        apikey: process.env.BLING_TOKEN,
        xml: pedido,
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = criarPedido;
