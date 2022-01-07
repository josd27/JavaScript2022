class Juego{
    constructor(nombre){
        this.nombre=nombre;
    }
    
    atack(){
        return "El juego ataca";
    }

    stop(){
        return "el juego finalizo";
    }
}

class Tanque extends Juego{
    atack(){
        return "El tanque ataca";
    }
    stop(){
        return "el tanque se detuvo";
    }
}

class Avion extends Juego{
    atack(){
        return "El Avion ataca";
    }
    stop(){
        return "El avion se detuvo";
    }
}

class Barco extends Juego{

}