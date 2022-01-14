function exito(data){
    return {"d":data, "numero":5};
}
function fracaso(a){
    return a+"asd";
}

/*let promesa = new Promise(function(exito, fracaso){
    exito();
    fracaso();
});*/
let promesa = new Promise((exito, fracaso)=>{
    let value= true;
    value ? exito({id:1, nombre:"Jose"}) : fracaso("asdasd");
});
console.log(promesa);

promesa
.then((resp)=> {
    console.log("entre a la promesa");
    console.log(resp);
})/*
.then(()=>{})
.then(()=>{})
.catch(error=>{console.log(error)})
*/








/*
if(value==8){
    return resolve("Exito")
}
else{
    return reject("Rechazado");
}


value ==0 ? resolve('Exito') : reject('Rechazado')*/