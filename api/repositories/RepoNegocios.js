const pedidosModel = require('../models/Pedidos');
const totalPorDiaModel = require('../models/TotalPorDia');

module.exports = {

  async inserirNegocio(pedido) {
    try {
      const result = await pedidosModel.create({
        id: pedido.id,
        pessoa: pedido.person_name,
        titulo: pedido.title,
        organizacao: pedido.org_name,
        valor: pedido.value,
      });
      return result;
    } catch (error) {
      return error;
    }
  },

  async inserirTotalPorDia(pedido) {
    try {
      const total = await totalPorDiaModel.findOneAndUpdate({
        data: pedido.won_time.slice(0, 10),
      },
      {
        $inc:
          {
            quantidade: 1,
            valor: pedido.value,
          },
      }, { upsert: true, multi: true });
      return total;
    } catch (error) {
      return error;
    }
  },

};
