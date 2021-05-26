const Sequelize = require('sequelize')

//Conexão com o Banco de Dados      (BD)    (user)   (password)
const sequelize = new Sequelize('ekaizen', 'root', 'Anderson10#', {
    host: "localhost",
    dialect: 'mysql',
})

//Função de Autenticação para verificar se está conectado com o Banco de Dados
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Erro ao conectar!" + erro)
})

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}