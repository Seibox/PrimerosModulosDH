/*Arrays */
let alumnos = ['Angelica','Alejandro','Lucas', 'María', 'Andrea'];
console.log(alumnos); // todo el array
console.log(alumnos[3]);// Imprime 3ra posción 
console.table(alumnos);
if (alumnos.length){
    console.table(alumnos);
}
// Práctica 1 
let electrodomesticos = ['secadora','lavadora','computadora','parlante','cámara','licuadora'];
console.log(electrodomesticos);
console.log(electrodomesticos[1]);
console.log(electrodomesticos[3]);
//extraer el primer elemento del array y agregarlo al final del mismo
let alFinal = electrodomesticos.shift();
electrodomesticos.push(alFinal);
console.log(electrodomesticos);
//agregar dos elementos al final del array 
electrodomesticos.push('celular','tablet');
console.log(electrodomesticos);
// Mostrar por consola cantidad de elementos del array 
console.log("El array tiene "+electrodomesticos.length+" elementos");
// buscar un elemento y mostrar si existe o no en el array 
if(electrodomesticos.includes('computadora')){
    console.log("Producto encontrado");
}else{
    console.log("producto buscado no existe");
}
// unir todos los elementos en un string separandolos por espacios en blanco
let unido = electrodomesticos.join(" ");
console.log(unido);
// determinar cantidad de caracteres de la cadena obtenida
console.log("La cadena tiene "+unido.length +" caracteres"); 
// cambiar nombre de producto 
let unido2 = unido.replace('computadora','computador');
console.log(unido2);
//separar cadena en un nuevo array 
let electrodomesticos2 = unido2.split(" ");
console.log(electrodomesticos2);


// practica 2
let peliculas = ['Turno de dia','30 noches con mi ex','Bestia','El monte', 'Top gun maverick','Elvis','Thor:amor y tueno'];
function aMayusculas(string){
    let peliMayusculas = string.toUpperCase();
    return peliMayusculas; 
}
let ultima = peliculas.pop();
peliculas.unshift(aMayusculas(ultima));
console.log(peliculas);

let aEstrenar = ' Counter-Strike,NOP,Vértigo,Nick,Avatar ';
let arratyAEstrenar = aEstrenar.split(",");
console.log(aEstrenar);
console.log(arratyAEstrenar); 
// excluyo el counter que es un juego
arratyAEstrenar.shift();
console.log(arratyAEstrenar);
// concateno arrays de peliculas a estrenar y actuales 
let arrayFinal = peliculas.concat(arratyAEstrenar);
console.log(arrayFinal);


/*Fucion para calcular alquiler de vehículo:
tipo de vehiculo
dia de alquiler 
silla para bebe*/

function alquilerVehiculo (tipoVehiculo, diasAlquiler, sillaBebe)
{
    let totalAPagar = 0; 
    switch(tipoVehiculo){
        case 'Compacto':
        case 'compacto':
            totalAPagar = totalAPagar + 14000;
            break;
        case 'Mediano':
        case 'mediano':
            totalAPagar = totalAPagar + 17000;
            break;
        case 'Camioneta':
        case 'camioneta':
            totalAPagar = totalAPagar + 28000;
            break;
        default: 
            console.log('Ingrese un tipo de vehículo válido');
    }
    totalAPagar = totalAPagar*diasAlquiler; 
    if (sillaBebe == true){
        totalAPagar +=  1200*diasAlquiler;
    }

    return('Estimado cliente, en base al tipo de vehiculo '+tipoVehiculo+' alquilado, considerando los '+diasAlquiler+' dias de alquiler, el monto total a pagar es de $'+totalAPagar);
}

/* Ejecutar*/
console.log(alquilerVehiculo('Compacto',6,true));
