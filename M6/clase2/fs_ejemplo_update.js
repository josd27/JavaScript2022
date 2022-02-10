//ingrese nombre archivo ext -> nombre nuevo ext nueva
const fs = require("fs");
let nombre= null;
let ext=null;
let nombre_nuevo=null;
let ext_nueva= null;

if(process.argv.length>5){
    nombre= process.argv[2];
    ext= process.argv[3];
    nombre_nuevo= process.argv[4];
    ext_nueva= process.argv[5];
    fs.rename(
        `${nombre}.${ext}`,
        `${nombre_nuevo}.${ext_nueva}`,
        (error)=>{
            console.log(error);
            console.log("archivo actualizado");
        }
    );
}
