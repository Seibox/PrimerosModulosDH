/*Ejercicio 1 */
let perfil = 'administrador';
switch(perfil)
{
    case " ":
        console.log("Debe especificar perfil del usuario");
        break;
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case "asistente":
        console.log("usted solo tiene permisos de registrar, modificar y consultar datos");
        break;
    case "invitado":
        console.log("Usted solo puede consultar datos");
        break;
    default:
        console.log("Debe especificar un perfil válido");
}
/*Ejercicio 2*/
let pagoMes = 600;
let consumoKWH = 100;
let resultado =  consumoKWH>300 ? console.log("Tiene aumento, paga "+(pagoMes*1.2)): console.log("No tiene aumento, paga "+pagoMes); 


/*ejercicio 3*/
let palabra = "perro";
switch(palabra)
{
    case 'perro':
        console.log("dog");
        break;
    case 'gato':
        console.log("cat");
        break;
    case 'puerta':
        console.log("door");
        break;
    case 'ventana':
        console.log("window");
        break;
    case 'mesa':
        console.log("table");
        break;
    default:
        console.log("Ingrese palabra válida");
}
/* Ejercicio 4 */

let val1 = 123;
let val2 = 10;
let operacion = "dividir";
switch(operacion)
{
    case 'sumar':
        console.log("El resultado de sumar "+val1+" y "+val2+" es "+(val1+val2));
        break;
    case 'restar':
        console.log("El resultado de restar "+val1+" y "+val2+" es "+val1-val2);
        break;
    case 'multiplicar':
        console.log("El resultado de multiplicar "+val1+" y "+val2+" es "+val1*val2);
        break;
    case 'dividir':
        console.log("El resultado de dividir "+val1+" y "+val2+" es "+val1/val2);
        break;
}

