const express = require('express');
const app =express();
const path=require('path');
//recursos públicos
app.use(express.static(path.resolve(__dirname,'../public')))
app.listen(3030,()=>console.log('Servidor corriendo en puerto 3030'))
app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'./view/index.html'))
})