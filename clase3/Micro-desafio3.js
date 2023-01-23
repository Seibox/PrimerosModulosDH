let nombre = "Pedro";
let apellido = "Perez";
let sueldoActual = 20000;
let porcentajeAumento = 20;
let calculoAumento = (sueldoActual * porcentajeAumento)/100;
let nuevoSueldo = sueldoActual + calculoAumento;
console.log("Hola, " + nombre + " " + apellido + "\nEn base a su sueldo acutal: \n$" + sueldoActual +"\nHa recibido un aumento del "+ porcentajeAumento + "%:\n$"+calculoAumento+"\ny su nuevo sueldo es de: $" +nuevoSueldo);