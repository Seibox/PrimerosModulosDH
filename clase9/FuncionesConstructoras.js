/*Constructor de objetos para crear de manera más eficiente y rápida objetos*/
//declaro un objeto que será plantilla del resto
let curso = {
    cantidadDeAlumnos: 32,
    docentes: ["Nacho","Javier"],
    horario: "de 19 a 21",
    notificaciones: function(){
        return "El horario de la cursada es "+ this.horario;
    }
}
//armo la función constructora de objetos, construiré cursos, primera letra mayúscula
function Curso(cantidadDeAlumnos, docentes, horario){ // Por parámetro paso las claves que no son métodos
     this.cantidadDeAlumnos = cantidadDeAlumnos; //luego hago this.clave = clave para todos
     this.docentes = docentes;
     this.horario = horario;
}

// Ahora instancio para crear un objeto
// let nombreNuevoObjeto = new nombreFuncionConstructora(params);
let CursoProgramacion = new Curso(50,["Javier", "Gerardo"],"de 19 a 21 hs");
console.log(CursoProgramacion);

