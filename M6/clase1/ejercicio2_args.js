console.log(process.argv.length-2);
for(let i = 2; i<process.argv.length; i++){
    console.log(process.argv[i]);
}
//procesos batch
if(process.argv.length>2 && process.argv[2]=="vip"){
    console.log("Usted ejecuto esto como usuario vip");
}
else{
    console.log("Usted ejecuto esto como usuario");
}