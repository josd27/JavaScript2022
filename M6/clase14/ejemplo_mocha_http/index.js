const http = require("http");
const port = 3000;

const server = http.createServer((req,res)=>{
    let obj={
        usuarios:[
        {nombre:"Orihana", apellido:"Triana"},
        {nombre:"Sergio", apellido:"Palacios"},
        {nombre:"Juan",apellido:"Reyes"},
        {nombre:"Daniel", apellido:"Huasco"},
        {nombre:"Juan", apellido:"Tamayo"},
        {nombre:"Stephanie", apellido:"Merida"},
        {nombre:"Nicolas", apellido:"Kacic"}
    ]};
    if(req.url.includes("/usuarios")){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(obj));
    }
})
.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port} PID:${process.pid}`);
});

module.exports = server;