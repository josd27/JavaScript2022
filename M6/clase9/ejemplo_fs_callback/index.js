const fs = require("fs");

fs.writeFile("ejemplo.txt", "Hola Mundo", "utf-8", resultado);

fs.readFile("ejemplo.txt", "utf-8", mostrar_contenido);

function mostrar_contenido(err, contenido){
    console.log(contenido);
}
/*function Hola(){
    
}*/
//Hola(456,654,6,578,645,4654,"asdsd")

function resultado(err){
    console.log("archivo creado");
}
