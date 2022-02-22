//nodemailer
const nodemailer = require("nodemailer");

let opciones={
    from:'tuejecutivo@bancopatito.cl',
    to:'josd18@gmail.com',
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


