const Pedido = require('../repositories/RepoPedidos');

module.exports = {
  async getNegocios(req, res) {
    try {
      const { id } = req.params;
      const result = await Pedido.getNegocio(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async getTodosTotalPorDia(req, res) {
    try {
      const result = await Pedido.getTodosTotalPorDia();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async getTotalPorDia(req, res) {
    try {
      const { data } = req.params;
      const result = await Pedido.getTotalPorDia(data);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  async getTodosNegocios(req, res) {
    try {
      const result = await Pedido.getTodosNegocios();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

};
