let fs = require('fs');
let moment = require('moment');
//console.log(fs);
//leer archivo y ver todos sus datos co libreria fs
let datos = fs.readFileSync(__dirname+'/prueba.txt','utf-8');//primer parámetro le digo qué archivo leer
/* puedo utilizar __dirname + '/nombre archivo a leer'
el segundo parámetro es el charset 'utf-8'*/
console.log(datos);
console.log(moment().format(''));
// importp el módulo creado en la carpeta clase9EjemploModulos2
const autos = require("./clase9EjemploModulos2");
console.log(autos);