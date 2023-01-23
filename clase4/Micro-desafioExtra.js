let velocidad = 270;
let altura = 160;
let aterrizar; 
if(velocidad>= 268 && velocidad <= 278 && altura >= 150 && altura <= 300){
    aterrizar = true;
    console.log("Aterrizar tiene valor true");
}else{
    aterrizar = false;
    console.log("Aterrizar tiene valor false"); 
}