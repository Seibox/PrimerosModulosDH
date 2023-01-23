let arrayOperacionesBancarias = [100,200,30,500,-145,-130,30];
let calcularSaldos = function(arrayOperacionesBancarias){
    let saldoTotal=0;
    let saldoDepositos=0;
    let saldoRetiros=0;
    for (let i = 0; i < arrayOperacionesBancarias.length; i++) {
        if(arrayOperacionesBancarias[i]<0){
            saldoRetiros+= arrayOperacionesBancarias[i];
        }else{
            saldoDepositos+= arrayOperacionesBancarias[i];
        }
    }
    saldoTotal = saldoDepositos + saldoRetiros;
    return [saldoDepositos,saldoRetiros,saldoTotal];
}
let retornarValores = function(nombre,apellido,arrayOperacionesBancarias,funcion){
    let saldos = funcion(arrayOperacionesBancarias);
    return [nombre,apellido,saldos[0],saldos[1],saldos[2]];
}
let arrayAmostrar= retornarValores('Carlos','Martinez',arrayOperacionesBancarias,calcularSaldos)
console.log(arrayAmostrar);
console.log('Estimado/a '+arrayAmostrar[0]+' '+arrayAmostrar[1]+':\nEl monto total de los depósitps es de $'+ arrayAmostrar[2]+'.\nEl monto total de los retiros es de: $'+arrayAmostrar[3]+'.\nPor lo tanto, su saldo actual en la cuenta es de: $'+ arrayAmostrar[4]+".");