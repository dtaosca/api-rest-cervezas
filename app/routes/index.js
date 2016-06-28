var router = require('express').Router()
var cervezas = require('./cervezas')

router.use('/cervezas', cervezas)

router.get('/', function(req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

//Esta linea es muy importante ya que marca que se devuelve al fichero que requiere a este fichero
module.exports = router
