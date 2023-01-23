let graduadosHtml5 = '30 45 25 34 18 23 16 50 72 70';
let graduadosCss3 = '50 45 71 34 23 45 65 75 63 43 74 70';
let graduadosJavaScript = '70 65 58 45 23 57 34 17 72';
let graduadosNodeJs = '45 56 73 34 65 72 70 32' ; 
let array1 = graduadosHtml5.split(" ");
let array2 = graduadosCss3.split(" ");
let array3 = graduadosJavaScript.split(" ");
let array4 = graduadosNodeJs.split(" ");
function transformar(array){
    for(let i = 0; i<array.length;i++){
        array[i] = Number(array[i]);
    }
}
function promediosPorCurso(array1,array2,array3,array4,numeroDeCurso){
    let promedioADevolever; 
    let sumaNotas = 0;
    let array; 
    switch(numeroDeCurso){
        case 1:
            array = array1;
            console.log(array);
            break;
        case 2:
            array = array2;
            break;
        case 3:
            array = array3;
            break;
        case 4:
            array = array4;
            break;
        default:
            return ('Las notas de cada curso son:\n'+ array1 +' para Html\n'+array2+ ' para Css\n'+array3 +' para JS\n'+array4+' para node');
    }
    for(let e=0;e<array.length;e++){
        sumaNotas += array[e];
    }
    console.log(sumaNotas);
    promedioADevolever = sumaNotas/array.length;
    return ('El promedio del curso solicitado es' + promedioADevolever);
}
transformar(array1);
transformar(array2);
transformar(array3);
transformar(array4);
console.log(promediosPorCurso(array1,array2,array2,array4,5));
