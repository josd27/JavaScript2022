class SerVivo{
    nombre="";
}

class Mamifero extends SerVivo{
    _cantidadCrias=0;
    set cantidadCrias(value){
        this._cantidadCrias=value;
    }
}

class Gato extends Mamifero{
    raza="";
}

let gatito= new Gato();
gatito.raza="un gato";
gatito.cantidadCrias=6;
gatito.nombre="michi";
