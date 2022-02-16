const http = require("http");
const url = require("url");
const fs = require("fs")
const port = 8080;

http.createServer((req, res)=>{
    console.log(req.url);
    const params = url.parse(req.url, true).query;
    console.log(params);//Object.nombre object.contenido 
    if(req.url.includes("/crear")){
        
            fs.writeFile(
                `archivos/${params.nombre}`,
                params.contenido,
                "utf-8",
                (err)=>{
                    //NO llamar a res aqui... pendiente de explicacion tecnica
                    console.log(err);                    
                }
            )
            .catch(()=>{
                res.write(`Ups!! hay un error`);
            });
            
        
        
    }
    if(req.url.includes("/eliminar")){
      
            fs.unlink(
                `archivos/${params.nombre}`,
            )
            .catch(()=>{
                res.write("Ups!! hay un error");
            });
    }
    if(req.url.includes("/leer")){

    }
    if(req.url.includes("/renombrar")){

    }

    res.end();
})
.listen(port, ()=>{
    console.log(`Servidor Listo y escuchando el puerto ${port}`);
})