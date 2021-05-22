const db = require('../db/db')

const Cliente = db.sequelize.define('cliente', {
    id_cliente: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    nome_fantasia: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    email_empresa: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    telefone_comercial: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    cnpj: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    cep: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    bairro: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    cidade: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    estado: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    porte_empresa: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    qtd_funcionarios: {
        type: db.Sequelize.STRING,
        allowNull: false,
    }
})

// Apenas para Migrations 
//db.sequelize.sync({ force: true});
//Cliente.sync()

module.exports = {
    Cliente: Cliente,
    db: db
}