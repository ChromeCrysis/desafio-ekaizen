const {Cliente} = require('../models/clienteModels')

class clienteController {
    async createCliente(req, res){
      const {nome, email, telefone, nome_fantasia, email_empresa, telefone_comercial,
        cnpj, cep, endereco, bairro, cidade, estado, porte_empresa, qtd_funcionarios
      } = req.body
      await Cliente.create({
        nome, email, telefone, nome_fantasia, email_empresa, telefone_comercial,
        cnpj, cep, endereco, bairro, cidade, estado, porte_empresa, qtd_funcionarios
      }).then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
    }

    async listCliente(req, res){
      await Cliente.findAll()
      .then(response =>{
        res.status(200).json(response)
      })
      .catch(error => {
        res.status(500).json(error)
      })
    }

    async listClientebyId(req, res){
      await Cliente.findByPk(req.params.id_cliente)
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error =>{
        return res.status(500).json(error)
      })
    }

    async updateCliente(req, res){
      const {nome, email, telefone, nome_fantasia, email_empresa, telefone_comercial,
        cnpj, cep, endereco, bairro, cidade, estado, porte_empresa, qtd_funcionarios
      } = req.body
      await Cliente.update({nome, email, telefone, nome_fantasia, email_empresa, telefone_comercial,
        cnpj, cep, endereco, bairro, cidade, estado, porte_empresa, qtd_funcionarios}, 
        {where: {id_cliente: req.params.id_cliente}
      })
      .then(response => {
        res.status(200).json(response)
      })
      .catch(error => {
        res.status(500).json(error)
      })
    }

    async deleteCliente(req, res){
      await Cliente.destroy({where: {id_cliente: req.params.id_cliente}})
      .then(response => {
        res.status(200).json(response)
      })
      .catch(error => {
        res.status(500).json(error)
      })
    }
}

module.exports = new clienteController();