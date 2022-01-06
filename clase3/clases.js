class SerVivo{
    constructor(nombre){
        this.nombre=nombre;
    }
}

class Mamifero extends SerVivo{
    constructor(cantidadCrias, nombre){        
        super(nombre);
        this.cantidadCrias=cantidadCrias;
    }
}

class Gato extends Mamifero{
    //raza="Sin Raza";
    color="";
    constructor(raza,cantidadCrias, nombre){
        super(cantidadCrias, nombre);
        this.raza=raza;
    }
    miau(hora, mensaje="miau miau" , duracion="3hrs"){
        console.log(mensaje);
    }
}

let gatito= new Gato("un gato", 6,"michi");
gatito.miau("03.00");
gatito.color="negro";