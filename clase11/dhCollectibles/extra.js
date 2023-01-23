let array = [1,2,3,4,5,6,7,8,9,10];
let [lugar0,,lugar2,,lugar4] = array;
let objetoMascota ={
    nombre: 'India',
    tipo:'Perra',
    color:'Dorado',
    raza:'Golden'
};
let {nombre,tipo,color,raza} = objetoMascota;
console.log("Hola, les presento a "+nombre+", ella es una "+tipo+" de raza "+raza+" y su color es "+color+".");
console.log(lugar0,lugar2,lugar4,);