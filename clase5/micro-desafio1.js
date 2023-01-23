let calcularMontoAlquiler = function(tipoVehiculo,diasDeAlquiler,sillaParaBebe){
    let precio = 0;
    switch (tipoVehiculo) {
        case 'Compacto':
            precio += 14000;
            break;
        case 'Mediano': 
            precio +=17000;
            break;
        case 'Camioneta':
            precio +=28000;
            break;
    }
    if(sillaParaBebe=true){
        precio += 1200;
    }
    precio*= diasDeAlquiler; 
    console.log("Estimado cliente: en base al tipo de vehículo "+ tipoVehiculo+" alquilado, considerando los "+diasDeAlquiler+" dias, el monto total a pagar es de $"+precio );
    sillaParaBebe=true ? console.log("El precio incluye silla de bebe"):console.log("Recuede que usted no solicitó silla de bebe");
}
calcularMontoAlquiler('Compacto',3,true);