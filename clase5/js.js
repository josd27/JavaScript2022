
let div=document.getElementById("holaMundo");
class Persona{
    nombre="";
    saludar=()=> this.nombre;
}



function hola(){   
    let per= new Persona();
    per.nombre="Jose";     
    console.log(per.saludar());
    console.log(per);

    div.innerHTML="Hola Mundo";
}

function chao(){
    return "Chao";
}

const chao1= ()=> {return "Chao"};

const chao2=()=> "Chao";

console.log(chao(),chao1(), chao2());

function sumar(a){
    return a +100;
}
(a)=>{return a +100;}

a=> a+100;

function sumar2(a,b){
    return a+b;
}

(a, b) => a+b;

const sumita=(a=5,b=8) => a+b;

console.log(sumita(3,600));

function llevarACero(n){
    n=n- n/2;
    return n;
}
//callback

const sin_retorno=(n)=>{
    n=n- n/2;
    return n;
}

(n)=> n;

//Promesas
//async await



//arrow function
//funcion flecha
//funcion anonima
//lambda expresion