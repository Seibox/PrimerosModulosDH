/*módulos nativos*/
/*módulos propios*/
/*módulos terceros*/

/*módulos propios*/
// Para requerir un módulo creado por mi
// let variableParaUsarlo = require(rutaDelModulo)

const pato = require("./resumenObjetos.js") /* Acá importo un módulo que exporté de resumenObjetos.js
                                            para usarlo a través de la variable pato */
console.log(pato.nombre); //como es un objeto, puedo usar objeto.clave


/*módulos nativos*/
const fs = require("fs");
let texto = fs.readFileSync("./textoParaMostrarImportando.txt", "utf-8");
console.log(texto);

/*módulos terceros*/
// node package manager (npm) - porciones de código que tenemos que descargar
/*npm init en la terminal o npm init -y que le da enter a todo, me crea 
un archivo package.json
para instalar un paquete hago npm istall nombre_paquete*/

const dayjs = require("dayjs");
let fechaActual = dayjs().format();
console.log(fechaActual);
/*puedo ir a npmjs.com para bucar paquetes, tiene toda la documentación
de cada uno de ellos*/
