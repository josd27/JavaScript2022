
//un hilo, async Promesa , levanten otro hilo setTimeOut
a(function(datoA="Hola infierno de los callback"){
    b(datoA,function(datoB){
        c(datoB, function(datoC){
            d(datoC, function(datoD){
                e(datoD, function(datoE){
                    f(datoE, function(datoF){
                        console.log(datoF);
                    })
                })
            })
        })
    })
});

function a(func){
    
    console.log("Inicie A");
    func();
    
    console.log("Termine A");
}
function b(dato, func) {
    
    console.log("Inicie B");
    func(dato);
    
    console.log("Termine B");
}
    
function c(dato,callback){
    
    console.log("Inicie C");
    callback(dato);
    
    console.log("Termine C");
}
function d(dato,callback){
    
    console.log("Inicie D");
    callback(dato);
    
    console.log("Termine D");
}
function e(dato,callback){
    
    console.log("Inicie E");
    callback(dato);
    
    console.log("Termine E");
}
function f(dato,callback){
    
    console.log("Inicie F");
    callback(dato);
    console.log("Termine F");
}