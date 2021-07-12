const router = require('express').Router();
const NegociosController = require('../../controllers/NegociosController');

router.get('/', NegociosController.getNegocios);
router.get('/integracao', NegociosController.integracao);

module.exports = router;
