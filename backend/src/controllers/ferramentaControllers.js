const {Ferramenta} = require('../models/ferramentaModels')

class ferramentaController {
    async createFerramenta(req, res){
      const {nome_produto, base_pequeno, base_medio, base_grande
      } = req.body
      await Ferramenta.create({
        nome_produto, base_pequeno, base_medio, base_grande
      }).then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      });
    }

    async listarFerramenta(req, res){
      await Ferramenta.findAll()
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error =>{
        return res.status(500).json(error)
      })
    }

    async listFerramentabyId(req, res){
      await Ferramenta.findByPk(req.params.id_ferramenta)
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error => {
        return res.status(500).json(error)
      })
    }

    async updateFerramenta(req, res){
      const {nome_produto, base_pequeno, base_medio, base_grande
      } = req.body
      await Ferramenta.update({
        nome_produto, base_pequeno, base_medio, base_grande
      }, {
        where: {id_ferramenta: req.params.id_ferramenta}
      })
      .then(response => {
        res.status(200).json(response)
      })
      .catch(error => {
        res.status(500).json(error)
      })
    }

    async deleteFerramenta(req, res){
      await Ferramenta.destroy({where: {id_ferramenta: req.params.id_ferramenta}})
      .then(response =>{
        res.status(200).json(response)
      })
      .catch(error => {
        res.status(500).json(error)
      })
    }
}

module.exports = new ferramentaController();