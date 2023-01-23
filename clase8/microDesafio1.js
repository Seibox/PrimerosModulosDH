let arrayMultidimencional = [['html5', 4000], ['css3', 5000], ['javascript', 10000], ['react',7000], ['nodejs', 15000]];
let arrayATomar = ['HTML5', 'JAVASCRIPT'];
let calcularValor = function(arrayMultidimencional,arrayATomar){
    let sumadorCostos = 0;
    for(let i=0;i<arrayMultidimencional.length;i++){
        for(let e=0;e<arrayATomar.length;e++){
            if(arrayMultidimencional[i][0].toUpperCase()==arrayATomar[e]){
                sumadorCostos+= arrayMultidimencional[i][1];
            }
        }

    }
    return sumadorCostos;
}
console.log('El precio de los cursos a tomar es de $'+calcularValor(arrayMultidimencional,arrayATomar));