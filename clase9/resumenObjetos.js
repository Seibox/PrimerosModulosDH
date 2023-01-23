/* OBJETO LITERAL Y SISTEMA DE MÓDULOS */
/* Un objeto literal es un listado de elementos, una representacion de
algo de la vida real que tiene propiedades y caracteristicas, cada una con información,
contienen propiedades y funciones (métodos)*/
// Declaro un objeto literal
let pato ={
    color:["negro","blanco","amarillo"],
    peso: 5,
    plumas: true,
    edad: 5,
    raza: "pekin",
    nombre: "Pato Lucas",
    hijo:{ //objeto dentro de objeto
        peso: 3,
        nombre:"Patito Lucas"
    },
    graznar: function(){
        console.log("Quack!");
    }, //metodo - funcion en objeto
    graznarInteligente: function()  {
        console.log("Mi nombre es: "+this.nombre) //this. refiere al objeto
    } 
}
// color, peso, plumas son propiedaes del objeto
// para acceder a ellas: 
console.table(pato.color);
//accedo a objeto dentro de objeto
console.log(pato.hijo.nombre);
//ejecuto metodo
pato.graznar();
pato.graznarInteligente();
//Muestro todo
console.log(pato);
console.table(pato);
// para exportar un objeto (puede ser solo un dato)
module.exports= pato;// puedo exportar un solo objeto, si quiero 
// hacerlo con varios, hago objeto con objetos o array.