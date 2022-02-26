const url = require("url");
const http = require("http");
const fs = require("fs");
const port = 3000;


http.createServer((req,res)=>{
    // ruta raiz /
    if(req.url=="/"){
        //devolver formulario
        fs.readFile(
            "index.html",
            "utf-8",
            (err, data)=>{
                res.setHeader("Content-Type","text/html");
                //res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data);
            }
        );
    }
    
    // ruta recepcionar /crear
    if(req.url.includes("/crear")){//startWith
        let {id,name, lastname, email, password} = url.parse(req.url, true).query;
        id= parseInt(id);
        let obj={
            id,
            name,
            lastname,
            email,
            password
        }
        //Inicio Modificacion
        fs.readFile(
            "usuarios.json",
            "utf-8",
            (err, data)=>{
                //{usuarios:[]}
                let obj_archivo = JSON.parse(data);//leer
                obj_archivo.usuarios.push(obj);//edito
                
                //Fin Modificacion
                fs.writeFile(
                    "usuarios.json",
                    JSON.stringify(obj_archivo),//guardar info actualizada
                    "utf-8",
                    (err)=>{
                        console.log(err);
                    }
                )
                res.end();
            }
        );
       

        
    }

    // ruta eliminar /eliminar id
    if(req.url.includes("/eliminar")){
        let {id} = url.parse(req.url, true).query;
        console.log(id);
        fs.readFile(
            "usuarios.json",
            "utf-8",
            (err, data)=>{
                let obj = JSON.parse(data);
                obj.usuarios.find((item, index, array)=>{
                    if(item.id==id){
                        //elimina
                        console.log(item);
                        array.splice(index, 1);
                        //delete array[index];//NO usar
                        //https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_remove
                        console.log(obj);
                        fs.writeFile(
                            "usuarios.json",
                            JSON.stringify(obj),
                            "utf-8",
                            (err, data)=>{
                                console.log(err, data);
                            }
                        )
                    }
                });
            }
        )

        res.end();
    }

    if(req.url.includes("/editar")){
        let {id,name, lastname, email, password} = url.parse(req.url, true).query;
        id= parseInt(id);
        let new_obj={
            id,//identificar
            name,
            lastname,
            email,
            password
        }
        console.log("new_obj", new_obj);
        fs.readFile(
            "usuarios.json",
            "utf-8",
            (err, data)=>{
                let json =JSON.parse(data);
                console.log("json", json);
                json.usuarios.find((item, index, array)=>{
                    if(item.id==new_obj.id){
                        //item.name= new_obj.name;
                        console.log("encontre el item", item, new_obj);
                        array[index]= new_obj;
                    }
                });
                
                console.log("actualizado", json);
                fs.writeFile(
                    "usuarios.json",
                    JSON.stringify(json),//guardar info actualizada
                    "utf-8",
                    (err)=>{
                        console.log(err);
                    }
                )
                res.end();
                
            }
        );
    }
    if(req.url.includes("/traer_todo")){
        fs.readFile(
            "usuarios.json",
            "utf-8",
            (err, data)=>{
                res.setHeader("Content-Type","application/json");
                res.end(data);
            }
        )
    }
    if(req.url.includes("/traer_uno")){
        let {id}= url.parse(req.url, true).query;
        fs.readFile(
            "usuarios.json",
            "utf-8",
            (err, data)=>{
                let json = JSON.parse(data);
                let item = json.usuarios.find((elemento)=>{
                    if(elemento.id==id){
                        return elemento;
                    }
                });
                if(item){                    
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(JSON.stringify(item));
                }
                else{
                    res.writeHead(404, {"Content-Type":"application/json"});
                    res.end();
                }
            }
        )
    }
})
.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port} PID ${process.pid}`);
})
