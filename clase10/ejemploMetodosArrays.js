let notas = [10,4,5,8,9,2,7];

//hacer operación en cada uno de ellos

let notasHastaEl100 = notas.map(function(numero){
    return numero *10;
});

console.log(notasHastaEl100);

//filtrar por condición
let notasAprobadas = notas.filter(function(numero){
    return numero >=7;
});

console.log("las aprobadas son: " + notasAprobadas);

// sumar u operar notas entre si
let sumaNotas = notas.reduce(function(estado,numero){
    return estado + numero; //estado inicia en cero 0 
});

console.log("La suma de todas las notas es "+sumaNotas);

// recorrer el array y hacer algo 
// no lo igualo a una variable porque no devuelve nada

notas.forEach(function(valor,indice){
    console.log( "En posición " + indice + " tengo valor " +  valor);
})