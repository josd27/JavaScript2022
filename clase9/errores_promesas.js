
let promesa= new Promise((exito, fracaso)=>{
    if(1>0){
        exito(true);
    }
    else{
        fracaso(false);
    }
})


try{
    promesa
    .then((res)=>{res})
    .catch(error=>{throw new Error("Me cai")});
}
catch(ex){
    //Me Cai
}

try{
    //....
    try{
        //conexion a base de datos
        //abrir
        //conectar
        //ejecutar codigo
        //sql
        document.getElementById("noexiste").innerHTML="Hola mundo";
    }
    catch(ex1){
        //capturo error de base de datos
        //capturado por catch undefined null reference exception
        throw new Error("No puedo llegar al servidor de base de datos, revise conexion a internet");
    }
    finally{
        //cerrar la conexion DB
    }
}
catch(ex){
    //Me cai
}