const child_process= require('child_process');
const fs= require("fs");

fs.writeFile("index.js", 
    "console.log('ayuda')",   
    "utf-8",
    (err, resp)=>{
        console.log("archivo creado");
        child_process.exec('node index.js', function(err, result){
            console.log(result);
        });
    }
);