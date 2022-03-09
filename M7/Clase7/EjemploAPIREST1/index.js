const http = require("http");
const port = 3000;
const {fecha} = require("./consultas")

http.createServer((req, res)=>{
    if(req.url=="/fecha" && req.method =="GET"){
        res.end(fecha());
    }
})
.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}, PID ${process.pid}`);
});