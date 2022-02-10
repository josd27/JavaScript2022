
//importar fs
const fs = require("fs");

let archivo=null;
let ext=null;
//2 argumentos 2 y 3
if(process.argv.length>3){
    archivo= process.argv[2];//parse Int
    ext= process.argv[3];
    fs.writeFile(
        `${archivo}.${ext}`,
        "Soy un archivo de prueba",
         "utf-8",
         ()=>{
             console.log("archivo creado")
            }
    );
}