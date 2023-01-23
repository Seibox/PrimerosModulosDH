//Función 1
function encontrarNumero(array,numero){
    let encontrar = array.includes(numero) ? ('El número '+numero+' está en el array'):('El número '+numero+' no está en el array');
    return encontrar;
}
console.log(encontrarNumero([1,2,3],1));
//Función 2
function trompito(array,vueltas){
    do{
        vueltas = Math.random()*10;
        vueltas = Math.floor(vueltas);
    }while(vueltas>5 || vueltas == 0);
    return array[vueltas];
    
}
console.log(trompito(['Toma 1','Toma 2','Pon 1', 'Pon 2', 'Todos ponen', 'Toma todo'],12));
//function
function sumatoriaParesImpares(array){
    let arrayConSumas = [0,0];
    for(let i=0; i<array.length;i++){
        if(array[i]%2 == 0){
            arrayConSumas[0]+= array[i];
        }else{
            arrayConSumas[1]+= array[i];
        }
    }
    console.log("La suma de los pares es "+arrayConSumas[0]+" la suma de los impares es "+arrayConSumas[1])
    return arrayConSumas;
}
sumatoriaParesImpares([1,2,3,4,5,6,7,8,9,10]);