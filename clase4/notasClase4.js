/*Condicionales*/

if (7 ==7){
    console.group("Hola!");
}
console.log("Ya salimos del if");

let edadAlumno = 19;
let notaAlumno = 7;

if (edadAlumno >= 18 && notaAlumno >= 6){
    console.log("El alumno es mayor de edad y está aprobado");
}

/*Utilizamos else */
// También podría utilizar else if(condicion)
let estaLloviendo = true;
if(estaLloviendo){ 
    console.log("Tomar paraguas");
}else{
    console.log("No es necesario un paraguas");

}
/*if ternario*/
let resultado = (9 ==6) ? "caso verdadero": "caso falso";
console.log(resultado);

/*Switch*/
let semaforo = "verde";
switch(semaforo){
    case 'verde':
    case 'verde oscuro':
    case 'verde claro': // puedo agrupar cases asi 
        console.log("Se puede pasar");
        break;
    case 'rojo':
        console.log("No puede pasar");
        break;
    case 'amarillo':
        console.log("cuidado");
        break;
    default:
        console.log("No funciona el semáforo");   
}
/* alt shift a para comentar o descomentar codigo*/
