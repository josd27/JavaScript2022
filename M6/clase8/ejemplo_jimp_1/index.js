const http = require("http");
const jimp = require('jimp');
const url = require("url");// integrar solo para separar path de parametros
const port = 8080;
//req 1: localhost:8080/imagenPro?q=80

http.createServer((req, res)=>{
    let params = url.parse(req.url, true).query;
    if(req.url.includes("/imagen")){
        console.log(req.url);
        jimp.read("ejemplo_img.PNG", (err, imagen)=>{
            imagen.resize(250, jimp.AUTO)
            .sepia()
            .writeAsync("ejemplo_sepia.PNG")
            .then()
        });
    }
    if(req.url.includes("/imagenPro")){
        let q = parseInt(params.q);
        console.log("calidad", q);
        jimp.read("ejemplo_img.PNG", (err, imagen)=>{
            imagen
            .grayscale()
            .quality(q)
            .write("ejemplo_imagen_bn.PNG")
        });
    }
    res.end();
})
.listen(port, ()=>{
    console.log(`Escuchando puerto ${port}`);
});
