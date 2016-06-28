var express = require('express') //llamamos a Express que es la libreria que hemos instalado.
// Guardamos la librerie en la variable app. instanciamos la libreria en la variable app
var app = express()               
// para establecer las distintas rutas, necesitamos instanciar el express router
var router = express.Router() 

var port = process.env.PORT || 8080  // establecemos nuestro puerto

//body-parser actúa como middleware
//Lineas necesarias para configurar bodyparser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
//Los datos los pasa a json y asi puedo recogerlo como un objeto de javascipt
app.use(bodyParser.json())

router.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola de nuevo!' })   
})

router.get('/:nombre', function(req, res) {
  res.json({ mensaje: '¡Hola de nuevo!' + req.params.nombre })   
})

/*
router.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})
*/
router.post('/',function(req,res) { 
  res.json({mensaje: req.body.nombre})  
})
/*
router.delete('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})
*/
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use('/api', router)

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)


