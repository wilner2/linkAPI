const router = require('express').Router()
const NegociosController = require('../../controller/NegociosController')

router.get('/', NegociosController.getNegocios)

module.exports = router