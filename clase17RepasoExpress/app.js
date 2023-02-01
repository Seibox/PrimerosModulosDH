const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, function(){
    console.log("servidor escuchando en puerto 3000"); // esto se ejecuta solo cuando se establece la conexion.
});

app.get('/',function(req,res){
    //dentro de req tengo info sobre el pedido
    //dentro de res tengo funiones para responder al pedido
    res.sendFile('/Users/Sebastian/Desktop/DigitalHouse/clase17RepasoExpress/views/inicio.html'); /* necesito poner ruta absoluta (desde el disco local) */
})//le paso el nombre de la ruta al que responde
//en este caso tengo el home, la ruta de la barra vacía
//Se ejecuta la segunda función que paso por parámetro
//la función me da dos posibilidades, req y res
app.get('/sobre-nosotros',function(req,res){
    res.send("Estas en sobre nosotros")
});
app.get('/conDirname',function(req,res){ //funciona en cualquier pc
    //dentro de req tengo info sobre el pedido
    //dentro de res tengo funiones para responder al pedido
    const rutaCompleta = path.join(__dirname,'/views/inicio.html')
    res.sendFile(rutaCompleta); /* necesito poner ruta absoluta (desde el disco local) */
});