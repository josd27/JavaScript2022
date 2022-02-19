async function montarse(){
    for(let i=0; i<100; i++){        
        console.log("Montarse en la bici");
    }
}

function pedalear(){
    console.log("Pedaleando");
}

/*await montarse();
pedalear();
*/
montarse().then(function(){
    pedalear();
});

