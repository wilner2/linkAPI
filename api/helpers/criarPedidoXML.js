const jsonToXml = require('js2xmlparser').parse;

async function criarPedidoJsonToXML(negocio) {
  const pedido = {
    pedido: [
      {
        cliente: {
          nome: negocio.creator_user_id.name,
        },
        volumes: {
          volume: {
            servico: 'SEDEX - CONTRATO',
          },
        },
        items: {
          item: {
            codigo: 1,
            qtde: 1,
            descricao: 'Item',
            vlr_unit: negocio.value,
          },
        },
        parcela: { vlr: 1 },
      },
    ],
  };
  return jsonToXml('pedido', pedido);
}

module.exports = criarPedidoJsonToXML;
