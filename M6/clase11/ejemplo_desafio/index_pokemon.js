const axios = require("axios");

async function obtenerData(url){
    let {data} = await axios.get(url)
    return data.results;
}

Promise.all([
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"),    
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=40"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=60"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=80"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=100"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=120"),
    obtenerData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=140")
]).then(resultado=>{   
    let total= [];
    total= total.concat(
        resultado[0],
        resultado[1],
        resultado[2],
        resultado[3],
        resultado[4],
        resultado[5],
        resultado[6],
        resultado[7]); 
    console.log(total);
   
    
});