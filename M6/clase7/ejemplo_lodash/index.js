const lodash = require("lodash");
let numeros = [1,2,3,4,5,6];
/*numeros.forEach((ele)=>{
    console.log(ele);
});*/
lodash.forEach(numeros, (ele)=>{
    console.log(ele);
});

let par = [];
let impar = [];
let result = lodash.partition(numeros, (n)=> n%2);//{prop:value}, [prop, value]
par = result[1];
impar = result[0];
console.log(result, par, impar);// algo%2-> 1-> true encendido  0-> false apagado
//dentro de un array se dejaran 2 el primero con los que cumplen la condicion 
//y en el segundo los que no cumplen con la condicion

//crear 2 arreglos uno con los pares y el otro con los impares
/*let par = [];
let impar = [];

numeros.forEach(ele=> {
    if(ele%2==0){
        par.push(ele);
    }
    else{
        impar.push(ele);
    }
});
console.log("pares", par, "impares", impar);*/
//https://lodash.com/docs/4.17.15#zip
//https://lodash.com/docs/4.17.15#xor
//https://lodash.com/docs/4.17.15#map
//https://lodash.com/docs/4.17.15#sortBy
//https://lodash.com/docs/4.17.15#add
//https://lodash.com/docs/4.17.15#camelCase
//https://lodash.com/docs/4.17.15#split

