const pedidosModel = require('../models/Pedidos');
const TotalPorDia = require('../models/TotalPorDia');

module.exports = {

  async getNegocio(id) {
    try {
      const negocio = await pedidosModel.find({ id });
      return negocio;
    } catch (error) {
      return error;
    }
  },
  async getTodosTotalPorDia() {
    try {
      const negocio = await TotalPorDia.find();
      return negocio;
    } catch (error) {
      return error;
    }
  },
  async getTotalPorDia(data) {
    try {
      const negocio = await TotalPorDia.find({ data: `${data}T00:00:00.000+00:00` });
      return negocio;
    } catch (error) {
      return error;
    }
  },

  async getTodosNegocios() {
    try {
      const negocio = await pedidosModel.find({ });
      return negocio;
    } catch (error) {
      return error;
    }
  },

};
