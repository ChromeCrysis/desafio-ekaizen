const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//Import das rotas da API
const clienteRoutes = require('./routes/clienteRoutes')
const ferramentaRoutes = require('./routes/ferramentaRoutes')

server.use(cors())
server.use(bodyParser.json())
server.use('/clientes', clienteRoutes)
server.use('/ferramentas', ferramentaRoutes)

//API rodando na porta local 3333
server.listen('3333', ()=>{
    console.log('API rodando')
})