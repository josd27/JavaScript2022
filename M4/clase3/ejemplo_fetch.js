let response= fetch("url");
console.log(response.json());//Respuesta

fetch("url")//Response
.then(r=>{
    let text= r.text();
    let json= JSON.parse(text)
    json.data.forEach(element => {
        console.log(element)
    });

    return  "";
})
.then()



let xhr= new XMLHttpRequest();
xhr.onreadystatechange= function(){
    if(xhr.status===200 && xhr.readyState===4){
        JSON.parse(xhr.responseText)
    }
}

xhr.open("get","url");
xhr.send()

comprarPizza("pizzahut")
.then(juan=> {
    repartirPizzas();
})
.then(pizza=>{
    comerPizza();
})
.catch(erro=>{
    morirHambre()
})