let totalAPagar = function(tipoHamburguesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla){
    let total = 0;
    switch(tipoHamburguesa){
        case 'Carne a la parrilla':
            total+= 1800;
        break;
        case 'Pollo':
            total+=1500;
        break;
        case 'Vegetariana':
            total+=1200;
        break;
    }
    jamon==true? total+=30: ' ';
    queso==true? total+=25: ' ';
    salsaTomate==true? total+=5: ' ';
    mayonesa==true?  total+=5: ' ';
    mostaza==true?  total+=5: ' ';
    tomate==true?  total+=15: ' ';
    lechuga==true?  total+=10: ' ';
    cebolla==true?  total+=10: ' ';
    return total;
}
let mensajeConTotal = function(nombre,apellido,funcion,tipoHamburguesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla){
    console.log("Estimado "+nombre + " "+apellido +", el monto total a pagar es de: $"+ funcion(tipoHamburguesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla));
}
console.log(totalAPagar('Pollo',true,true,true,false,false,true,false,false));
mensajeConTotal('Seba','Manchado',totalAPagar,'Pollo',true,true,true,false,false,true,false,false);