//consumir la api rick and morty OK
//personaje que elija el usuario OK
//json lo voy a guardar en un txt con el nombre del personaje
const fs= require("fs");
const https = require("https");

let personaje=null;
let url="https://rickandmortyapi.com/api/character/";
if(process.argv.length>2){
    personaje = process.argv[2];
    https.get(
        `${url}${personaje}`,
        (response)=>{
            response.on("data", (result)=>{
                let json=JSON.parse(result);
                console.log(json.name, result);
                fs.writeFile(
                    `${personaje}_${json.name}.txt`,
                    //JSON.stringify(json),
                    result,
                    "utf-8",
                    (error)=>{
                        console.log(error);
                    }
                )
                
            });            
        }        
    )
    .on("error", (error)=>{
        console.log("error",error);
    });
}