/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const pipedrive = require('../services/pipedrive');
const criarPedido = require('../services/bling');
const criarPedidoJsonToXML = require('../helpers/criarPedidoXML');
const Negocio = require('../repositories/RepoNegocios');
const Pedido = require('../repositories/RepoPedidos');

module.exports = {
  async getNegocios(req, res) {
    try {
      const negocios = await pipedrive();
      return res.status(200).json(negocios);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async integracao(req, res) {
    let result = {};
    try {
      const negocios = await pipedrive();
      for (const negocio of negocios) {
        const pedidoXML = await criarPedidoJsonToXML(negocio);
        const pedido = await criarPedido(pedidoXML);
        const { status } = pedido;

        if (status === 200) {
          try {
            const existePedido = await Pedido.getNegocio(negocio.id);
            if (!existePedido.length) {
              const pedidoInserido = await Negocio.inserirNegocio(negocio);
              const totalInserido = await Negocio.inserirTotalPorDia(negocio);
            }
          } catch (error) {
            result = {
              status: 500, error: true, msg: error, code: 1660,
            };
            break;
          }
        } else {
          result = {
            status: 500, error: true, msg: 'Erro ao fazer a integração', code: 1655,
          };
          break;
        }
      }
      if (result.error) return res.status(result.status).json(result);
      return res.status(200).json({
        status: 200, msg: 'Integração feita com sucesso',
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
