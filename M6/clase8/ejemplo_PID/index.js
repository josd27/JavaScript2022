const http = require("http");
const port = 8080;
http.createServer()
.listen(port, ()=>{
    
    console.log(`Escuchando el puerto ${port} y ejecutando el PID ${process.pid}`);
})