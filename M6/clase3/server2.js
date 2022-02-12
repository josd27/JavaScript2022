const http= require("http");
const url= require("url");

const port=8080;
http.createServer((req, res)=>{
   
    console.log(req.url);
    const parametros= url.parse(req.url,true).query;
    console.log(parametros);
    let users=[{
        rut:'123456789',
        nombre:'Jose',
        apellido:'Quezada'
    }]
    if(req.url.includes('/usuarios')){
        let usu= users.find(u=> u.rut==parametros.rut);
        //usu==undefinded
        /*if(usu){
            res.write(`Usuario Encontrado ${usu.nombre} ${usu.apellido}`)
        }
        else{
            //undefined
            res.write("Usuario NO EXISTE");
        }*/
        //operador ternario ?
        //9>1 ? res.write("OK") : res.write("NOK");
        usu ? res.write(`Usuario Encontrado ${usu.nombre} ${usu.apellido}`):res.write("Usuario NO EXISTE")
    }
    /*if(url=="/saludo?nombre=Jose&apellido=Quezada&edad=50"){
        res.write("Hola usuario");
    }*/
    res.end();
})
.listen(port, ()=>{
    console.log(`escuchando el puerto ${port}`);
})

/*let d1=9;
let d2=5;
function a(){

}

function b(){

}

d1>d2 ? a(): b()
operador ternario ? :
boolean ? true : false
(9>1 && 100>50) ? true : false
(tengoPlata && tengoCupo) ? trasfiere() : anula() TODOS LOS LENGUAJES
C# boolean ?? dato
*/
