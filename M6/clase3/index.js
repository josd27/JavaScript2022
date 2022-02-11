//paso 1 OK
const http= require("http");
//paso 2 createServer(function(req, res){}) OK
//127.0.0.1==localhost
http.createServer(function(req, res){
    //paso 3 
    console.log(req.url);
    let url= req.url;
    if(url=="/hoy"){
        res.write(`Hola buen dia hoy es ${new Date()}`);
    }
    res.end();
    console.log("¿Alo? ¿Quien Habla?")
})
.listen(8080, ()=>{
    console.log("Escuchando 8080")
});
//Paso 4 concatenar al metodo createServer "listen" 1° 8080 ()=> console.log("Escuchando 8080")
