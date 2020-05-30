const estufaService =  require('../service/estufaService')

module.exports = { 
    async index(req, res){
        const estufa = await estufaService.getInfo();

        await estufaService.save(estufa)

        const response = await estufaService.getAll();

        return res.json(response)
    }
}