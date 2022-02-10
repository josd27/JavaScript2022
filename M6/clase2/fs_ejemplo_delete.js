//ingrese nombre extension del archivo a eliminar

const fs= require("fs");

let nombre=null;
let ext=null;
if(process.argv.length>3){
    nombre= process.argv[2];
    ext= process.argv[3];
    fs.unlink(
        `${nombre}.${ext}`,
        (error)=>{
            console.log(error);
            console.log("Archivo Eliminado");
        }
    )
}