const axios = require("axios");
const url="https://rickandmortyapi.com/api/character/10000000000000000";
axios.get(url)
.then((res)=>{
    console.log(res.data.name);
})
.catch(function(error){
    console.log(error.response, error.response.data.error);
});