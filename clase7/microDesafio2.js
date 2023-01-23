function todasLasTablas(){
    for(let i=0;i<11;i++){
        console.log("TABLA DEL "+i+':');
        for(let e=1; e<11;e++){
            console.log(i+'x'+e+' = '+i*e);
        }
    }
}
todasLasTablas();