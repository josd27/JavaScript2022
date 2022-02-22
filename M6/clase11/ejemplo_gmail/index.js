//nodemailer
const nodemailer = require("nodemailer");
let destinatarios = [];
destinatarios.push("correo@uncorreo.cl");
destinatarios.push("otrocorreo@uncorreo.cl");
destinatarios.push("otrocorreo2@uncorreo.cl");

let opciones={
    from:'tuejecutivo@bancopatito.cl',
    to:destinatarios,//'josd18@gmail.com',
    subject:'Demo',
    text:'Hola mundo'
}
let transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'demodemojq@gmail.com',
        pass:'demo123456'
    }
});
//for(let i=0; i<20; i++){    
    transport.sendMail(opciones, (err, data)=>{
        console.log("correo enviado");
        console.log(err, data);
    })
//}
/*destinatarios.forEach(ele=>{
    opciones.to=ele;
    transport.sendMail(opciones, (err, data)=>{
        console.log("correo enviado");
        console.log(err, data);
    })
});*/


