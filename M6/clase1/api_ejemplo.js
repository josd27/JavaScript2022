
const https = require("https");
//const url="https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/2022?apikey=a6073621b6b49dffb8bcd2fe83dc304888a6766b&formato=json";
const url="https://rickandmortyapi.com/api/character/120";

https.get(url, (resp)=>{
    resp.on('data', respuesta=>{
        console.log(respuesta);//array bit
        console.log(JSON.parse(respuesta));
    })
})
.on('error', (error)=>{
    console.log("Entre al error",error);
})