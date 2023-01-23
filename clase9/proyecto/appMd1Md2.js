let peliculas = require(__dirname+'/peliculasMd1.js');
for (let i = 0; i < peliculas.length; i++) {
    console.log("---------- ");
    console.log("ID: "+peliculas[i].id+"\nRATING: "+peliculas[i].rating+"\nAWARDS: "+peliculas[i].awards+"\nLENGTH: "+peliculas[i].lengthh+"\nPRICE: "+peliculas[i].price+"\nGENERE: "+peliculas[i].genere);
}

const fs = require('fs');
let texto = fs.readFileSync(__dirname+ '/mensajeMd2.txt','utf-8');
console.log('El texto improtado es:\n'+texto);