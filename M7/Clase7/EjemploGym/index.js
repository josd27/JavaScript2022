const http = require("http");
// Paso 1
const {insertar}= require("./consultas");
// Paso 2
const fs = require("fs");

http.createServer(async (req, res)=>{
    if(req.url="/" && req.method=="GET"){
        res.setHeader("content-type", "text/html");
        const html = fs.readFileSync("index.html", "utf8");
        res.end(html);
    }
    if(req.url == "/ejercicios" && req.method=="POST"){
        console.log("Ejercicios");
        let body ="";
        req.on("data", chunk=>{
            body +=chunk;
        });
        req.on("end", async ()=>{
            const datos = Object.values(JSON.parse(body));
            console.log("Datos:",datos);
            const respuesta = await insertar(datos);
            res.end(JSON.stringify(respuesta));
        });
    }
})
.listen(3000, ()=>{
    console.log("Ejecutando");
});
           