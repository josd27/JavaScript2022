let num= null;
let hast=null;
if(process.argv.length>3){
    num= parseInt(process.argv[2]);
    hast= parseInt(process.argv[3])
    for(let i=1; i<=hast; i++){
        console.log(`${num} * ${i}= ${num*i}`);
    }
}

