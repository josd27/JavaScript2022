

function getUF(){
    let url="https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=a6073621b6b49dffb8bcd2fe83dc304888a6766b&formato=json";
    //promesa
    fetch(url)//salida response
    .then((r)=> r.json()) //json
    .then((json)=> json.UFs[0]) //objto uf indice 0
    .then((uf)=> uf.Valor)
    .then((v)=> {console.log(v)});
}

function getUFv2(){
    let url="https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=a6073621b6b49dffb8bcd2fe83dc304888a6766b&formato=json";
    //promesa
    fetch(url)//salida response
    .then(r=>r.json())
    .then(json=> { 
        let valor= json.UFs[0].Valor;
        valor= valor.replace(".", "").replace(",",".");
        console.log(valor);
    });
}

function getXHR(fun){
    let url="https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=a6073621b6b49dffb8bcd2fe83dc304888a6766b&formato=json";
    
    let xhr= new XMLHttpRequest();

    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            let respuesta= xhr.responseText;
            respuesta= JSON.parse(respuesta);
            fun(respuesta.UFs[0].Valor);
        }
    }

    xhr.open("get", url);
    xhr.send();
}
function calcular(uf){
    uf= uf.replace(".","").replace(",",".");
    console.log(uf);
}

getXHR(calcular);



function getPromiseUF(){
    return new Promise((exito, fracaso)=>{
        let url="https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=a6073621b6b49dffb8bcd2fe83dc304888a6766b&formato=json";
    
        let xhr= new XMLHttpRequest();
        xhr.onreadystatechange= function(){
            if(xhr.readyState===4 && xhr.status===200){
                let json= xhr.responseText;
                json= JSON.parse(json);
                //31.123,45
                if(isNaN(json.UFs[0].Valor)){
                    fracaso(new Error("Se murio"));
                }
                else{
                    exito(json.UFs[0].Valor);
                }
                
            }
            /*else if(xhr.readyState===4){
                fracaso(new Error("Se murio"));
            }*/
        }


        xhr.open("get", url);
        xhr.send();
    })
}

getPromiseUF()
.then(resp=>{console.log("PROMESA", resp)})
.catch(error=>{console.log(error)});




/*let valor= getXHR();
console.log(valor + "asd");*/

//WAMPP
//LAMPP
//XAMPP
//MAMPP