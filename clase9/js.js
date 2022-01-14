



      
$(".btn").click(function(){
    //..
});

$(".btn").event("click", function(){});
let btns= document.querySelector(".btns");
for(let i=0; i< btns.lenght; i++){
    btns[i].addEventListener("click", crear);
}

crear();
function crear(){
let div = document.getElementById("botones");
    div.innerHTML+="<button onclick='crear()' class='btn'>Click</button>"
}