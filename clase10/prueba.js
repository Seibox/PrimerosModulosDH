function laClaveSecreta(clave){
    let mensaje = '';
    for(let i=0; i<clave.length;i++){
        if(clave[i]!='*'){
            mensaje = clave[i] + mensaje; 
        }
    }
    return mensaje;
}
console.log(laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] ));