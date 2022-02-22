const axios = require("axios");

const url = "https://www.feriadosapp.com/api/holidays.json";

axios.get(url).then((res)=>{
    let {data} = res;
    //console.log(data);
    data.data.forEach(element => {
        console.log(element.date);        
    });
});

/*
async function getData() {
    let {data} = await axios.get(url);
    data= data.data;
    //console.log(data);
    for(let i =0 ; i< data.length; i++){
        console.log(data[i].date);
    }

}
getData();*/