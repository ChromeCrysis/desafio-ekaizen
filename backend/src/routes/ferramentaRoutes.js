const router = require('express').Router()

//Import das funções que realizam o CRUD
const ferramentaController = require('../controllers/ferramentaControllers')

router.post('/cadastro', ferramentaController.createFerramenta)
router.put('/editar/:id_ferramenta', ferramentaController.updateFerramenta)
router.get('/listar', ferramentaController.listarFerramenta)
router.get('/listar/:id_ferramenta', ferramentaController.listFerramentabyId)
router.delete('/delete/:id_ferramenta', ferramentaController.deleteFerramenta)

module.exports = router