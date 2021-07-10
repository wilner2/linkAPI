const pipedrive = require('../services/pipedrive')

module.exports = {
    async getNegocios(req,res) {
        try {
            const teste = await pipedrive()
            return res.status(200).json(teste)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)            
        }
    }
}