const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
    if(req.url=="/" && req.method=="GET"){
        
        //Opcion A
        let data =  fs.readFileSync("index.html", "utf-8");
        res.end(data);
        //Opcion B
        fs.readFile("index.html", "utf-8", (data)=>{
            res.end(data);
        })
    }

    if(req.url.includes("/usuario") && req.url=="POST"){
        //logica crear el usuario
        //client.query //insert into usuarios RETURNNING *
    }
    if(req.url.includes("/login") && req.url=="POST"){
        //logica crear el usuario
        //client.query select * from usuarios where 
    }
    if(req.url.includes("/usuario") && req.url=="GET"){
        //logica crear el usuario
        //client.query SELECT * FROM usuarios;
    }

})
.listen(3000, ()=>{
    console.log("Funciona!!!");
})