let funcionImportar = require('./collectibles');
console.log(funcionImportar);
let objetoHotToys = funcionImportar('Hot toys');
let objetoBandai = funcionImportar('Bandai');
let objetoStarWars = funcionImportar('Star wars');
let arrayTodasLasFiguras = [...objetoHotToys,...objetoBandai,...objetoStarWars];
let collectibles ={
    figuras: arrayTodasLasFiguras,
    listFigures: function(){
        this.figuras.forEach(function(figura){
            console.log(figura);
        })
    },
    figuresByBrand:  function(marca){
        let figurasPormarca = this.figuras.filter(function(figura){
            return figura.marca = marca;
        })
        return figurasPormarca;
    }
}
collectibles.listFigures();
console.log(collectibles.figuresByBrand('Star wars'));