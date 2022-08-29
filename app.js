const {crearArchivo} = require('./helper/multiplicar')
const {argv} = require('./config/yargs')
var colors = require('colors')



crearArchivo(argv.b,argv.l,argv.h)



