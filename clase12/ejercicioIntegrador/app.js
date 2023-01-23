let personaPrueba ={
   nombre: 'Juan',
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   };
const autos = require('./autos');
let autosImportados = require('./autos');
let concesionaria = {
   autos: autosImportados,
   buscarAuto: function(patenteDeseada){
       let autoDeseado = this.autos.find(function(auto) {
         return auto.patente === patenteDeseada;
       });
      if (this.autos.includes(autoDeseado)){
         return autoDeseado;
      }else{
         return null;
      }
     
   },
   venderAuto: function(patenteDeseada){
      let autoAMarcar = this.buscarAuto(patenteDeseada);
      if(autoAMarcar!=null){
         autoAMarcar.vendido = true;
      }else{
         return;
      }
   },
   autosParaLaVenta: function(){
      let autosADevolver = this.autos.filter(function(auto){
         return auto.vendido == false;
      })
      return autosADevolver;
   },
   autosNuevos: function(){
      let todosLosAutos = this.autosParaLaVenta();
      let autosNuevosADevolver = todosLosAutos.filter(function(auto){
         return auto.km <= 100;
      })
      return autosNuevosADevolver;
   },
   listaDeVentas: function(){
      let autosVendidos = this.autos.filter(function(auto){
         return auto.vendido == true;
      })
      let preciosAutosVendidos = autosVendidos.map(function(auto){
         return auto.precio;
      })
      return preciosAutosVendidos;
   },
   totalDeVentas: function(){
      let listaPreciosVendidos = this.listaDeVentas();
      let sumatoriaVentas = listaPreciosVendidos.reduce(function(elem,acum){
         return acum + elem;
      },0);
      return sumatoriaVentas;
   },
   puedeComprar: function(auto,persona){
      if(auto.precio<=persona.capacidadDePagoTotal && (auto.precio/auto.cuotas)<= persona.capacidadDePagoEnCuotas){
         return true;
      }else{
         return false;
      }   
   },
   autosQuePuedeComprar: function(persona){
      let listaAutosEnVenta = this.autosParaLaVenta();
      let aComprar = listaAutosEnVenta.filter(auto => this.puedeComprar(auto,persona));
      return aComprar;
   }
}
concesionaria.autosQuePuedeComprar(personaPrueba);
