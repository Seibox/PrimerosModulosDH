let amigos = ['Seba','Pedro','Jorge','Mati'];
//tengo un array con 4 string adentro, para guardarlo en json:
let amigosJSON = JSON.stringify(amigos);
console.log(amigos);
console.log(amigosJSON);
//retorno a formato original pero lo guardo en otra variable
let amigosOrginal = JSON.parse(amigosJSON);
console.log(amigosOrginal);

//Realizo lo mismo con objetos 
let persona = {
    nombre: 'carlos',
    edad: 26,
    domicilio: 'Calle 123'
}
personaJSON = JSON.stringify(persona);
console.log(persona);
console.log(personaJSON);
let personaOriginal = JSON.parse(personaJSON);
console.log(personaOriginal);