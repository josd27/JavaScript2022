//import hola from 'chile.js';

async function navegar(url){
    console.log(event);
    event.preventDefault();
    let div= document.getElementById("dinamico");
    //tomar micro
    await fetch(url)
    .then(res=> res.text())
    .then(txt=> {
        div.innerHTML=txt
    });
    //comer un helado
    let img= document.getElementById("imga");
    console.log(img);
    recuperarImg(img);
    
    
}

function recuperarImg(img){
    console.log(event);
    let url = "https://www.pcfactory.cl/public/foto/41076/1.jpg?t=1631056357";
    img.src=url;
}

let enlaces= document.getElementsByClassName("quezada-nav"); //HTMLCollection[]
//let enlaces2=[];
//enlaces2.forEach(function(ele){console.log(ele)});
for(let i=0; i< enlaces.length; i++){
        enlaces[i].addEventListener("click",function(e){
        e.preventDefault();
        console.log(e,enlaces[i].href);
        let div= document.getElementById("dinamico");
        fetch(enlaces[i].href)
        .then(res=> res.text())
        .then(txt=> {
            div.innerHTML=txt
            let img= document.getElementById("imga");
            console.log(img);
            recuperarImg(img);
        });        
    });
}

