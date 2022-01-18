
const ctx= document.getElementById("migrafico").getContext("2d");
//camelCase
//crearGrafico([10,10,10,10,10,10],[20,20,20,20,20,20],[30,30,30,30,30,30],[40,40,40,40,40,40])
covid(crearGrafico);


function crearGrafico(data1, data2, data3, data4){
    const myChart = new Chart(ctx,{
        type:"bar",
        data:{
            labels:["Juan Tamayo", "Diego España","Erick Araya","Sergio Palacios","Juan Ignacio", "Orihana Triana"],
            datasets:[
                {
                    label:"Notas 1",
                    data:data1,
                    backgroundColor:[
                        'rgb(255,0,0)'
                    ],
                    borderColor:[
                        'rgb(150,150,150)'
                    ],
                    borderWidth:1
    
                },
                {
                    label:"Notas 2",
                    data:data2,
                    backgroundColor:[
                        'rgb(200,0,0)',
                    ],
                    borderColor:[
                        'rgb(150,0,0)',
                    ],
                    borderWidth:1
    
                },
                {
                    label:"Notas 3",
                    data:data3,
                    backgroundColor:[
                        'rgb(150,0,0)'
                    ],
                    borderColor:[
                        'rgb(150,150,150)'
                    ],
                    borderWidth:1
    
                },
                {
                    label:"Notas 4",
                    data:data4,
                    backgroundColor:[
                        'rgb(0,0,100)'
                    ],
                    borderColor:[
                        'rgb(150,150,150)'
                    ],
                    borderWidth:1
    
                }
            ]
        },
        options:{
            scales:{
                y:{
                    beginAtZero:true
                }
            }
        }
    });
}

function covid(func){
    let data1=[];
    let data2=[];
    //ajax, fecth
    func(data1, data2)
}


//fech
//.then(res=>{
// let data1=[]

//})
//.then(data=> {crearGrafico(data1)})