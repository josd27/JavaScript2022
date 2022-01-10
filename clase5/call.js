
function hola(){
    console.log("Hola a todos");
}

function chao(){
    console.log("Chao a todos");
}

function saludo(){
    console.log("Un salido");
}

function interactuar(h, c){
    console.log("Estoy interactuando");
    saludo();
}

interactuar(saludo, chao);