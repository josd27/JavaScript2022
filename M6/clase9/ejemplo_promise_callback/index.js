/*Ejemplo 1 funcion nombrada
const promesa = new Promise(mi_callback);
promesa
.then((mensaje)=>{
    console.log(mensaje)
})
.catch(err=>{
    console.log(err);
});
//arrow function ()=>
//function(){}
//function nombrada

function mi_callback(exito, fracaso){
    if(Math.random()>= 0.5){
        fracaso("Ups hay un error");
    }
    else{
        exito("Obtuviste un numero de la suerte");
    }
}*/
//Ejemplo 1.1 variacion de funcion con constante
const mi_callback= function(exito, fracaso){
    if(Math.random()>= 0.5){
        fracaso("Ups hay un error");
    }
    else{
        exito("Obtuviste un numero de la suerte");
    }
};
const promesa = new Promise(mi_callback);
promesa
.then((mensaje)=>{
    console.log(mensaje)
})
.catch(err=>{
    console.log(err);
});




/*Ejemplo 2 funcion anonima ES5
const promesa = new Promise(function (exito, fracaso){
    if(Math.random()>= 0.5){
        fracaso("Ups hay un error");
    }
    else{
        exito("Obtuviste un numero de la suerte");
    }
});
promesa
.then((mensaje)=>{
    console.log(mensaje)
})
.catch(err=>{
    console.log(err);
});
*/
/*Ejemplo 3 arrow function

const promesa = new Promise((exito, fracaso)=>{
    if(Math.random()>= 0.5){
        fracaso("Ups hay un error");
    }
    else{
        exito("Obtuviste un numero de la suerte");
    }
});

promesa
.then((mensaje)=>{
    console.log(mensaje)
})
.catch(err=>{
    console.log(err);
});
*/