// ejemplo 1 const { v4:uuidv4 } = require("uuid");
// ejemplo 2 const {stringify :uuidStringify} = require("uuid");
const {v5: uuidv5} = require("uuid");

console.log(uuidv5("https://infoclub.desafiolab.com/", uuidv5.URL));

//ejemplo 1 console.log(uuidv4());
/* ejemplo 2 const uuidBytes = [
    0x6f,
    0xc0,
    0xbd,
    0x7f,
    0x11,
    0xc0,
    0x43,
    0xda,
    0x97,
    0x5e,
    0x2a,
    0x8a,
    0xd9,
    0xeb,
    0xae,
    0x0b,
  ];
  console.log(uuidStringify(uuidBytes));*/