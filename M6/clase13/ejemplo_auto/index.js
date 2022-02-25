const fs = require("fs");

/*let auto = new Object();
auto.nombre="Mi auto";
auto.modelo="Ultimo modelo";*/

let auto = {//Objeto JS
    nombre:"Mi auto",
    modelo:"Ultimo Modelo",
    year:2022
}
//let str= "<br>".replace("<br>", "\r\n");
fs.writeFile(//Sync
    "MiAuto.json",
    JSON.stringify(auto),//String Zombificalo
    "utf-8",
    (err, data)=>{
        console.log(err, data);
        leer();
    }
)
function leer(){    
    fs.readFile(
        "MiAuto.json",
        "utf-8",
        (err, data)=>{
            console.log("Data:",data);
            console.log("Type", typeof(data));
            let autito= JSON.parse(data);
            autito.nombre="Lamborghini";
            autito.otra_propiedad=true;
            console.log("Auto", autito);
        }
    )
}


