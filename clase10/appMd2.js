const bicicletasImportadas = require("./datosBici.js");
console.log("IMPRIMIENDO BICICLETAS");
console.log(bicicletasImportadas);
let dhBici={
    bicicletas: bicicletasImportadas,
    buscarBici:  function(idABuscar){
        let biciBuscada = this.bicicletas.filter(function(bicicleta){
            return idABuscar === bicicleta.id;
        })
        if(biciBuscada.length == 0){
            return null;
        }else{
            return biciBuscada[0];
        }
    },
    venderBici: function(idABuscar){
      let biciBuscada = this.buscarBici(idABuscar);
      if(biciBuscada == null){
        return 'Bicicleta no encontrada'
      }else{
        biciBuscada.vendida = true;
        return biciBuscada;
      }
    },
    biciParaLaVenta: function(){
     let bicisSinVender = this.bicicletas.filter(function(bicicleta){
        return bicicleta.vendida == false; 
     })
     if (bicisSinVender.length==0){
        return 'No hay bicis para vender'
     }else{
        return bicisSinVender;
     }
    },
    totalDeVentas: function(){
        let bicisVendidas = this.bicicletas.filter(function(bicicleta){
            return bicicleta.vendida == true; 
         })
        let totalVendido = bicisVendidas.reduce(function(acumulador,bici){
            return acumulador+bici.precio;
        },0) // el valor del acumulador puede ir ahí
        return totalVendido;
     },
    aumentoBici: function(porcentajeAumento){
        let bicisConAumento = this.bicicletas.map(function(bicicleta){
            bicicleta.precio += bicicleta.precio*(porcentajeAumento/100);
            return bicicleta;
        })
        return bicisConAumento;
    },
    biciPorRodado: function(nroRodado){
        let bicisDeRodadoX = this.bicicletas.filter(function(bicicleta){
            return bicicleta.rodado = nroRodado;
        })
        return bicisDeRodadoX;
    },
    listarTodasLasBici: function(){
        for(const bici of this.bicicletas){
            console.log(bici);
        }
    }
}
// micro desafio 2 
/* console.log("Ejercicio 2-a: ");
console.log(dhBici.buscarBici(2));
console.log("Ejercicio 2-b: ");
console.log(dhBici.venderBici(2));
console.log(dhBici.bicicletas);
console.log("Ejercicio 2-c: ");
console.log(dhBici.biciParaLaVenta());
console.log("Ejercicio 2-d: ");
console.log(dhBici.totalDeVentas());*/

//micro desafio extra
console.log("MdEctra 1:");
console.log(dhBici.aumentoBici(100));
console.log("MdEctra 2:");
console.log(dhBici.biciPorRodado(24));
console.log("MdEctra 3:");
dhBici.listarTodasLasBici();
