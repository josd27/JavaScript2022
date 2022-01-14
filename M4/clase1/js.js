

function navegar(url){
    let div = document.getElementById("contenido");
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange= function(){
        if(xhr.readyState===4 && xhr.status===200){
            div.innerHTML= xhr.responseText;
        }
    }



    xhr.open("get", "https://www.google.com/");
    xhr.send();
}