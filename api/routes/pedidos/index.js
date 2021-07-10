const router = require('express').Router()

router.get('/', (req,res) =>{
    res.send('pedido')
})

module.exports = router