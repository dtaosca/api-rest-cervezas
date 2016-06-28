var router = require('express').Router()
  //Instanciamos el controlador para poderlo utilizar
var cervezasController = require('../controllers/cervezasController')
router.get('/search', function(req, res) {
  //res.json({ message: 'Vas a buscar una cerveza' })
  cervezasController.search(req, res)
})
router.get('/', function(req, res) {
  //res.json({ message: 'Estás conectado a la API. Recurso: cervezas' })
  cervezasController.list(req, res)
})
router.get('/:id', function(req, res) {
  //res.json({ message: 'Vas a obtener la cerveza con id ' + req.params.id })
  cervezasController.show(req, res)
})
router.post('/', function(req, res) {
  //res.json({ message: 'Vas a añadir una cerveza' })
  cervezasController.create(req, res)
})
router.put('/:id', function(req, res) {
  //res.json({ message: 'Vas a actualizar la cerveza con id ' + req.params.id })
  cervezasController.update(req, res)
})
router.delete('/:id', function(req, res) {
  //res.json({ message: 'Vas a borrar la cerveza con id ' + req.params.id })
  cervezasController.remove(req, res)
})
module.exports = router
