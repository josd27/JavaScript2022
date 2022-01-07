class Personaje{   
    muertos=false;
    constructor(nombre, vida){
        this.nombre=nombre;
        this.vida=vida;
    }
    pegar(fuerza){
        console.log(this.nombre +" golpea con "+ fuerza);
    }
}

let personajes=[];
personajes.push(new Personaje("Raiden", 1000));
personajes.push(new Personaje("Scorpion", 1100));

let jugador1= personajes[0];
let jugador2= personajes[1];

for(let i = 0 ;i< 10; i++){
    jugador1.pegar(10);
    jugador2.pegar(11);
}
