        let img= document.getElementById("animalito");
        function getData(method, url){
            return new Promise((exito, fracaso)=>{
                let xhr= new XMLHttpRequest();
                xhr.onreadystatechange= function(){
                    if(xhr.readyState===4 && xhr.status===200){
                        console.log(xhr.responseText);
                        exito(xhr.responseText);
                    }
                }
                xhr.open(method, url);
                xhr.send();
            });
        }

        function perro(){
            
            let url="https://dog.ceo/api/breeds/image/random";
            getData("get", url)
            .then(txt=> JSON.parse(txt))
            .then(json=> {
                img.setAttribute("src", json.message)
            });
            
        }
        function dibujarGato(obj){
            img.setAttribute("src", obj[0].url);
        }


        function gato(){
            let url="https://api.thecatapi.com/v1/images/search";
            getData("get", url)
            .then(txt=> JSON.parse(txt))
            .then(json=> {
                img.setAttribute("src", json[0].url)
            });
        }

        function gato2(){
            let url="https://api.thecatapi.com/v1/images/search";
            getData("get", url)
            .then(txt=> JSON.parse(txt))
            .then(json=> {
               dibujarGato(json);
            });
        }