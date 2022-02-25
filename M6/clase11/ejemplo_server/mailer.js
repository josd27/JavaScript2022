const nodemailer = require("nodemailer");

function enviar(to, subject, text){
    
    let destinatario ='tuejecutivo@bancopatito.cl';
    let tranportador = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'demodemojq@gmail.com',
            pass:'demo123456'
        },
        /*tls: {
            rejectUnauthorized: false
        }*/  
    }); 

    
    let opciones={
        from:destinatario,
        to,
        subject,
        text//html cuerpo del correo,
        //html: <img src='http://bancopatito.cl/mijsmalo.js?dato=cookie.value'>

    }

    tranportador.sendMail(opciones, (err, data)=>{
        console.log(err, data);
        if(err){
            console.log(err);
        }
    });
}
/*function otraFuncion(){

}*/

module.exports = enviar;//modulo propio