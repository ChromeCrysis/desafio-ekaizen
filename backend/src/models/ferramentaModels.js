const db = require('../db/db')

//Tabela Ferramenta do banco de dados
const Ferramenta = db.sequelize.define('ferramenta', {
    id_ferramenta: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_produto: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    base_pequeno: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },
    base_medio: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },
    base_grande: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    }
})

//Orcamento.belongsTo(Ferramenta)

// Apenas para Migrations 
//db.sequelize.sync({ force: true});
//Ferramenta.sync()

module.exports = {
    Ferramenta: Ferramenta,
    db: db
} 