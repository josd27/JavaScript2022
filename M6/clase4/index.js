const http = require("http");
const url = require("url");
const port = 8080;
http.createServer((req, res)=>{
    if(req.url.includes("/usuarios")){
        //tomar el nombre del usuario
        const params = url.parse(req.url, true).query;
        if(params.nombre=="Jose" && params.clave=="123456"){
            res.write(`Bienvenido usuario ${params.nombre}`);
            //SQL select * from usuarios where nombre= params.nombre and clave = params.clave
        }
        else{
            res.write("Usuario o clave no validos");
        }
        
    }
    res.end();
})
.listen(port, ()=>{
    console.log("Servidor iniciado")
});