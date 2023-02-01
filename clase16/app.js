 let express = require('express');
 console.log(express);
 let app = express();
 console.log(app);// resultado de llamar a la función express, devuelve varios métodos
 app.listen(3000,()=>{
    console.log('Corriendo correctamente');
 });
 //armo un listado de todas las posibles rutas que puede responder nuestro sitio web
 app.get('/',function(req,res){
    res.send('bienvenidos');
 });
 app.get("/contacto",function(req,res){
    res.send('Contactos');
 });
 app.get("/unArray",function(req,res){
    res.send([1,2,3,4]);
 });
 app.get("/unObjeto",function(req,res){
    res.send({name:"Fernando"});
 });
