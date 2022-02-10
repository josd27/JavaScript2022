
const child_process= require('child_process');

if(process.argv.length>2 && process.argv[2]=="vip"){
    console.log("Usted es vip");
    child_process.exec("ipconfig /all", function(err, result){
        console.log(result);
    });
}
else{
    console.log("Bienvenido");
    child_process.exec("ipconfig", function(err, result){
        console.log(result);
    });
}