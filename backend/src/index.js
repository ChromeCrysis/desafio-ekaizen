const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const clienteRoutes = require('./routes/clienteRoutes')
const ferramentaRoutes = require('./routes/ferramentaRoutes')

server.use(cors())
server.use(bodyParser.json())
server.use('/clientes', clienteRoutes)
server.use('/ferramentas', ferramentaRoutes)

server.listen('3333', ()=>{
    console.log('API rodando')
})