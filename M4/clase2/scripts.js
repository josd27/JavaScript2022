let tabla= document.getElementById("mitabla").getElementsByTagName('tbody')[0];
let form= document.getElementById("myform");

if(localStorage.getItem("jwt_token")){
    form.style.display="none";
    getPosts();
}


form.addEventListener("submit", function(event){
    event.preventDefault();
    let obj= new FormData();
    obj.append("email", "Telly.Hoeger@billy.biz");
    obj.append("password", "secret");

    let obj2={
        "email":document.getElementById("email").value,
        "password":document.getElementById("password").value
    };
    form.style.display="none";
    send(obj2);
});

function send(data){
    let xhr= new XMLHttpRequest();
    //JSON.parse("{}")//texto-> JSON
    data=JSON.stringify(data)//json object-> texto plano
    console.log(data);
    xhr.onreadystatechange= function(){
        if(xhr.status===200 && xhr.readyState===4){
            let texto= xhr.responseText;
            let json= JSON.parse(texto);
            localStorage.setItem("jwt_token", json.token);
            getPosts();
        }
    }

    xhr.open("post", "http://localhost:3000/api/login");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(data);
}

function getPosts(){
    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange= function(){
        if(xhr.status===200 && xhr.readyState===4){
            //console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);
            for(let i =0; i < json.data.length; i++){
                let fila= tabla.insertRow(0);
                fila.insertCell(0).innerHTML=json.data[i].id;//id;
                fila.insertCell(1).innerHTML=json.data[i].title;//titulo
                fila.insertCell(2).innerHTML=json.data[i].body;//mensaje
            }
        }
    }
    xhr.open("get","http://localhost:3000/api/posts");
    xhr.setRequestHeader("Authorization", "Bearer "+ localStorage.getItem("jwt_token"));
    xhr.send();
}
    