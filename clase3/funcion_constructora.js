//Pseudo Clases
function Persona(nombre, apellido, edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    var direccion="";
}

function Estudiante(numeroMatricula){
    Persona.call(this);
    this.numeroMatricula=numeroMatricula;
}

var est1= new Estudiante(123);
console.log(est1);

///

var per= new Persona();

per.nacimiento="01/01/2021"