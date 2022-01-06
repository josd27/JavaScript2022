class SerVivo{
    nombre="no determinado";
}

class Mamifero extends SerVivo{
    cantidadCrias=0;
}

class Gato extends Mamifero{
    raza="";
}

let gatito= new Gato();
gatito.raza="un gato";
//gatito.cantidadCrias=6;
gatito.nombre="michi";
