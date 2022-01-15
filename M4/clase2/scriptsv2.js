let form= document.getElementById("myform");
let tabla= document.getElementById("mitabla").getElementsByTagName('tbody')[0];

form.addEventListener("submit", function(event){
    event.preventDefault();
    let obj2={
        "email":"Telly.Hoeger@billy.biz",
        "password":"secret"
    };
    obj2=JSON.stringify(obj2);
    form.style.display="none";
    enviarAjax(form.action, form.method, obj2, getPost);
});

function getPost(txt){
    txt= JSON.parse(txt);
    localStorage.setItem("jwt_token", txt.token);
    enviarAjax("http://localhost:3000/api/posts","get",null,dibujarTabla, true,true);
}

function dibujarTabla(txt){
    txt= JSON.parse(txt);
    let data= txt.data;
    for(let i =0; i < data.length; i++){
        let fila= tabla.insertRow(0);
        fila.insertCell(0).innerHTML=data[i].id;//id;
        fila.insertCell(1).innerHTML=data[i].title;//titulo
        fila.insertCell(2).innerHTML=data[i].body;//mensaje
    }
}
//funcion estandar para varios AJAX
/*$.ajax({
    method:"get",
    url:"",
    data:data,
    success:function(){}
})
enviarAjax(null, null, null, Juanito)
function Juanito(txt){
    console.log(txt);
}*/
function enviarAjax(url, metodo, data, callback, esJson, esAutenticada){
    let xhr= new XMLHttpRequest();

    xhr.onreadystatechange= function(){
        if(xhr.status===200 && xhr.readyState===4){
            callback(xhr.responseText);
            //getPost(xhr.responseText)
            //dibujarTabla(xhr.responseText)

        }
    }

    xhr.open(metodo, url);
    if(esJson){
        xhr.setRequestHeader("content-type", "application/json");
    }
    if(esAutenticada){
        xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("jwt_token"));
    }
    if(metodo=="post"){
        xhr.send(data);
    }
    else{
        xhr.send();
    }
}
