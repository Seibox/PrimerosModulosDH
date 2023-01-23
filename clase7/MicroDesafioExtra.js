console.log("Mostrando los 10 siguientes de un numero:");
function los10Siguientes(numero){
    for(let i = 0; i<=10; i++){
        console.log(numero+i);
    }
}
los10Siguientes(3);

console.log("Imrpimiendo numeros entre 1 y 57 saltando de a 3:");
function unoACinuentaYSieteDeATres(){
    for(let e=1; e<=57;e += 3){
        console.log(e);
    }
}
unoACinuentaYSieteDeATres();
console.log("Mostrando la sumatoria de todos los numeros entre el 0 y el 100:");
function entre0Y100(){
    let sumador=0;
    for(let f=0;f<=100;f++){
        sumador+=f;
    }
    console.log("La sumatoria entre 0 y 100 es "+sumador);
    return sumador;
}
entre0Y100();

console.log("Imprimiendo las letras de una cadena de texto en mayúsculas:");
function aMayusculasDeAUna(string) {
    for(let g=0; g<string.length;g++){
        console.log(string[g].toUpperCase());
    }
}
aMayusculasDeAUna('Retornndo pares de un array de positivos');
function retornarPares(array) {
   let pares= array.filter(function(unNumero){
    return unNumero%2 ==0;
   });
    console.log("Los pares del array pasado son: "+pares);
    return pares;
}
retornarPares([1,2,4,6,8,17,21,13,19]);

