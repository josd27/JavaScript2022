function promesa1(){
    return new Promise((exito, fracaso)=>{
        exito(10);
    })
}

let promesa2 = new Promise((exito, fracaso)=>{
    exito(20);
});

Promise.all([promesa1(), promesa2, promesa1()]).then((resultado)=>{
    console.log(resultado);//[10,20,30,50]
    let suma = resultado.reduce((acum, actu)=> acum+actu);
    console.log(`La suma total es ${suma}`);
});

/*
promesa1().then((res)=>{
    promesa2.then((otro)=>{
        promesa1().then(()=>{

        })
    })
})*/

async function calcular(){
    let dato1= await promesa1();
    let dato2= await promesa2;
    let dato3= await promesa1();
    console.log("Suma Total:", dato1+dato2+dato3);
}

calcular();


