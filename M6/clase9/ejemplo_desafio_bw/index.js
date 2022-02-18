const http = require("http");
const jimp = require("jimp");
const url = require("url");
const fs = require("fs");
//yargs
const port = 8080;

http.createServer((req, res)=>{
    if(req.url == "/"){
        //devolver el formulario
        fs.readFile("html/index.html","utf-8", (err, contenido)=>{
            res.end(contenido);
        });
    }
    if(req.url.includes("/subir")){
        //leer el argumento img, guardarlo y devolver la imagen
        let params = url.parse(req.url, true).query;
        jimp.read(params.img, (err, imagen)=>{
            imagen
            .grayscale()
            .quality(60)
            .writeAsync("newImg.jpg")
            .then(()=>{
                fs.readFile("newImg.jpg", (err, contenido)=>{
                    res.writeHead(200, {"Content-Type":"image/jpeg"});
                    res.end(contenido);
                })
            })
        });
    }

})
.listen(port, ()=>{
    console.log(`Servidor escuchando el puerto ${port} y el PID ${process.pid}`);
})