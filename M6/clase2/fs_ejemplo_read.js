
const fs = require("fs");
let nombre= null;
let ext= null;

if(process.argv.length>3){
    nombre= process.argv[2];
    ext= process.argv[3];

    fs.readFile(
        `${nombre}.${ext}`,
        "utf-8",
        (err,result)=>{
            console.log(result);
        }        
    );
}
