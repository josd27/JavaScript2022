
const piopio = function(mi_funcion_que_va_a_hacer_un_callback){
    console.log(mi_funcion_que_va_a_hacer_un_callback);
    console.log("huevo");

    mi_funcion_que_va_a_hacer_un_callback();

    console.log("gallina");
}

piopio(()=>{
    for(let i =0; i<10; i++){
        console.log("pollito");
    };    
    //thread 
});

piopio(pollito);

function pollito(){
    console.log("pollito");
}

function una_function(otra_function){
    return otra_function();
}

let resultado= una_function(()=> 5 + 9);
console.log(resultado);