const Sequelize = require('sequelize')
const sequelize = new Sequelize('ekaizen', 'root', 'Anderson10#', {
    host: "localhost",
    dialect: 'mysql',
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Erro ao conectar!" + erro)
})

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}