const Sequelize = require('sequelize')
const database = require('../db/db')

const Orcamento = database.define('orcamento',{
    id_orcamento: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo_venda: {

    },
    usuarios: {
        type: Sequelize.INTEGER,
    },
    imposto: {
        type: Sequelize.FLOAT,
    },
    comissao: {
        type: Sequelize.FLOAT,
    }
})

module.exports = Orcamento