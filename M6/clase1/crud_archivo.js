let nombre="ejemplo.txt";
if(process.argv.length>2){
    nombre=process.argv[2];
}

const fs = require("fs")

fs.writeFile(   nombre, 
                "Hola soy un archivo de ejemplo",   
                "utf-8", 
                ()=>{
                    console.log("Archivo Creado");
                    fs.readFile(nombre, "utf-8", (err, contenido)=>{
                        console.log(contenido);
                    });
                }
            );