const router = require('express').Router()

const clienteController = require('../controllers/clienteControllers')

router.post('/cadastro', clienteController.createCliente)
router.put('/editar/:id_cliente', clienteController.updateCliente)
router.get('/listar', clienteController.listCliente)
router.get('/listar/:id_cliente', clienteController.listClientebyId)
router.delete('/delete/:id_cliente', clienteController.deleteCliente)

module.exports = router