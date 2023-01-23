//array
let peliculasHeroes =['Endgame','Iron man','Capitan américa'];
let peliculasComedias = ['Mi pobre angelito','Qué pasó ayer'];
let peliculas = [...peliculasHeroes,...peliculasComedias];
// Puedo hacerlo con cuantos arrays desee
//objetos
let generoComedia = {
    nombreGenero: 'Comedia',
    popilaridad: 3
}
let miPobreAngelito = {
    nombre: 'Mi pobre angelito',
    duracion:120,
    ...generoComedia
}
let quePasoAyer ={
    nombre:"Qué pasó ayer",
    duracion:110,
    generoComedia
}
//funciones
function peliculasVistas(...nombresDePeliculas){
   for (let i = 0; i < nombresDePeliculas.length; i++) {
    console.log( "la persona ya vio "+ nombresDePeliculas[i]);
   }
}
peliculasVistas("End game","Iron Man 3","Mi pobre angelito");
