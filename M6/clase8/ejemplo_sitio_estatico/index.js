const http = require("http");
const fs = require("fs");

const port = 8080;
let pagina="";
let ext="html";
let codificacion="utf-8";
http.createServer((req, res)=>{
    
    if(req.url.includes("/index")){
        res.writeHead(200, {"Content-Type":"text/html"});
        pagina="index";
        ext="html";
        codificacion="utf-8";
    }
    if(req.url.includes("/contacto")){
        res.writeHead(200, {"Content-Type":"text/html"});
        pagina="contacto";
        ext="html";
        codificacion="utf-8";
    }
    if(req.url.includes("/css/principal")){
        res.writeHead(200, {"Content-Type":"text/css"});
        pagina="archivo";
        ext="css";
        codificacion="utf-8";
    }
    if(req.url.includes("/css/secundario")){
        res.writeHead(200, {"Content-Type":"text/css"});
        pagina="secundario";
        ext="css";
        codificacion="utf-8";
    }
    if(req.url.includes("/js/mijs")){
        res.writeHead(200, {"Content-Type":"text/javascript"});
        pagina="archivo";
        ext="js";
        codificacion="utf-8";
    }
    if(req.url.includes("/img/miimg")){
        res.writeHead(200, {"Content-Type":"image/jpeg"});
        pagina="newimg";
        ext="jpg";
        codificacion="";
    }
    //No se recomienta***************
    console.log(`html/${pagina}.${ext}`);
    fs.readFile(`html/${pagina}.${ext}`, codificacion, (err, contenido)=>{
        console.log(err);
        //console.log(contenido);
        res.end(contenido);
    });
    /*res.end(`
    <p>Desafio <strong>Latam</strong></p> 
    `);*/
})
.listen(port, ()=>{
    console.log(`Escuchando puerto ${port} PID:${process.pid}`);
});

