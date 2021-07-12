const router = require('express').Router();
const PedidosController = require('../../controllers/PedidosController');

router.get('/', PedidosController.getTodosNegocios);
router.get('/id/:id', PedidosController.getNegocios);
router.get('/data/', PedidosController.getTodosTotalPorDia);
router.get('/data/:data', PedidosController.getTotalPorDia);

module.exports = router;
