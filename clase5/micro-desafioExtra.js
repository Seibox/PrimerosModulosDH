//Ejercicio 1
let minusculaAMayuscula = function(stringATransformar){
    return stringATransformar.toUpperCase();
}
console.log(minusculaAMayuscula('pedo'));
//Ejercicio 2
let devolverTipo = function(dato){
    return typeof dato;
}
console.log(devolverTipo('x'));
//Ejercicio 3
let calcularEdadPerros = function(edad){
    return edad*7;
}
//Ejercicio 4
let calcularValorHoraTrabajo = function(salarioMensual, cantidadDias, horasPorDia){
    return salarioMensual/(horasPorDia*cantidadDias);
}
console.log(calcularValorHoraTrabajo(1000,10,10));