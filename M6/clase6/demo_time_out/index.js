const http = require("http");
const fs = require("fs");
const port = 8080;
//Pendiente closure
//function hola(){
    //leer todos los argumentos
//}
//hola();
//hola(1,2,3,4,5,6,7,8,9);
const imprimir = (errores , res, mensaje)=>{
    console.log(errores, res, mensaje);
    if(!errores){
        res.write(mensaje);        
    }
    else{
        res.write("!!Ups")
    }
    res.end();
}


http.createServer((req, res)=>{

    if(req.url.includes("/eliminar")){
        //fs.writeFile("archivo.txt", "Hola", "utf-8", ()=>{});
        fs.unlink("archivo.txt", imprimir.bind("res", res));
    }   
})
.listen(port, ()=>{
    console.log(`servidor escuchando en el puerto ${port}`);
});