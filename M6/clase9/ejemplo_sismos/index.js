const axios = require("axios");
let fecha, magnitud;
const url = "https://api.gael.cloud/general/public/sismos";
async function getData(){//Promesa then
    let {data, headers} = await axios.get(url);//demorar XMLHTTPRequest-> AsyncJAX
    /*let result =await axios.get(url);
    data= result.data;
    headers= result.header;*/
    console.log(data);
    fecha = data[0].Fecha;//2022-02-18 20:49:20
    console.log(fecha);
    /*axios.get(url).then((res)=>{
        fecha = res.data[0].Fecha;
        console.log(fecha);
        imprimir();
    })*/
}

function imprimir(){
    console.log(`El ultimo sismo fue ${fecha}`);
}
getData().then(()=>{
    imprimir()
});
/*
getData();//async
imprimir();
*/
/*getData();*/