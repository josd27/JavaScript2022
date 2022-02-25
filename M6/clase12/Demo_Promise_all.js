function a(){
    return 1;
}

async function b(){
    return 5;
}

let nombre = 'Jose';

//Promise.all(iterable)
Promise.all([a(), b() , nombre, "asdasd"]).then(res=>{
    console.log(res);
});