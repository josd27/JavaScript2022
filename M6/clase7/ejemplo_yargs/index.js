const yargs = require("yargs");

//command(<comando>, <descripcion>, <contructor>, <callback>);

yargs.command(
    "saludo",
    "comando para imprimir un saludo motivacional",
    (args)=>{//constructor de argumentos
        args.positional('nombre',{
            type: 'string',
            demand:true,
            alias:"n",
            default: "Jose",
            description:"el nombre de la persona a saludar"
        })
        //args.positional("nombre")
    },
    (args)=>{//callback
        console.log(`Muy buenas tardes ${args.nombre} que bueno que se conectaron a la clase, espero les vaya bien en el desafio`);
    }
    )
    .help()
    .argv;
