const http = require("http");//interno de node
const url = require("url");
const mail = require("./mailer");
const fs = require("fs");
const port = 8080;//3000-> express

//let para, asunto, contenido;


http.createServer((req, res)=>{
    
    /*let argumentos = url.parse(req.url, true).query;
    para= argumentos.para;
    asunto= argumentos.asunto;
    contenido= argumentos.contenido;*/
    if(req.url=="/"){
        res.setHeader("Content-Type","text/html");
        fs.readFile(
            "index.html",
            "utf-8",
            (err, data)=>{

                res.end(data);
                //res.send(mivariable);enviar parametros al html-> template
            }
        )
        //quiero devolver index.html en el response
    }


    if(req.url.includes("/enviar")){//No va entrar
        let {para, asunto, contenido} = url.parse(req.url, true).query;
        mail(para, asunto, contenido);
        res.end();
    }
})
.listen(port, ()=>{
    console.log(`escuchando el puerto ${port} PID ${process.pid}`)
})