
const http = require("http");
const port = 8080;
http.createServer((req, res)=>{
    console.log("Hola mundo");
    console.log(req.url);
    console.log("Chao Mundo -g");
    res.end();
})
.listen(port, ()=>{
    console.log(`eschuchando el puerto ${port}`);
});