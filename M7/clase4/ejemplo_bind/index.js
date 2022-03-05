const http = require("http");

http.createServer((req, res)=>{
    if(req.url="/"){
        imprimir(res, "Inicio");
    }
    if(req.url="/usuario"){
        imprimir(res, "usuarios");
    }
    let new_imprimir= imprimir.bind(http, "ejemplo bind");
    new_imprimir();
})  
.listen(8000, ()=>{
    console.log("funcionando");
})

function imprimir(res, data){
    res.end(data);
}

