const axios = require("axios");
const http = require("http");

async function obtenerData(url){
    let {data} = await axios.get(url)
    return data;
}

Promise.all([
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"),    
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=40"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=60"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=80"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=100"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=120"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=11&offset=140")
]).then(resultado=>{ 
    //console.log("Resultado:",resultado);  
    let total= [];
    total= total.concat(
        resultado[0].results,
        resultado[1].results,
        resultado[2].results,
        resultado[3].results,
        resultado[4].results,
        resultado[5].results,
        resultado[6].results,
        resultado[7].results); 
    //console.log("TOTAL:",total);
    
    let promesas= [];//151

    total.forEach(element => {
        promesas.push(obtenerData(element.url));
    });
    //console.log(promesas);
    //Promise.all([asd(), adasd, "asdasd", 456])
    Promise.all(promesas)
    .then(r=>{//151
        r.forEach(ele=>{
            console.log(ele.sprites.front_default);
        })
    });
   
    
});