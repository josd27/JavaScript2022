const fs = require("fs");

let yo = {
    nombre:'Jose',
    apellido:'Quezada'
}
fs.writeFile(
    "nombres.json",
     JSON.stringify(yo),
     "utf-8",
     ()=>{
        console.log("Archivo creado");
        leer();
     }
);

function leer(){
    fs.readFile(
        "nombres.json",
         "utf-8",
          (err, data)=>{
              //Mi nombre es Jose Quezada
              let obj = JSON.parse(data);
              console.log(`Mi nombre es ${obj.nombre} ${obj.apellido}`);
          }
    );
}