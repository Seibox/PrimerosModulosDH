let cursos = ["Programación","MKT","UX","Data science"];
let persona = {
    nombre: "carli",
    edad: 26,
    domicilio: "calle 123"
}
//Destructurando array
let [curso1,curso2,curso3] = cursos; //3 vbles cada una con lo que contiene una pos del array
//Destructurando OL 
let {nombre, edad} = persona; //2 vbles, una con nombre y otra con edad, llamadas nombre y edad