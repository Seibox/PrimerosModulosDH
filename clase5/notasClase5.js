//scopes
let mensaje = 'Scope global';
function saludar(){
    let mensaje = 'scope local'; // si comento este se va a mostrar globl en console log
    return mensaje;
}
console.log(saludar());

//Funcion expresada 
let sumar = function(numA, numB)
{
    return numA+numB;
}
console.log(sumar(7,9));
//Funcion declarada
function restar(numC,numD)
{
    return numC - numD;
}
console.log(restar(10,3));
