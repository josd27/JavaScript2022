const moment = require("moment");

console.log(moment());
console.log(moment().add(2, 'days'));
console.log(moment().add(1, "months"));
console.log(moment().subtract(20, "weeks"));
console.log(moment().format("DD/MM/yyyy"));

console.log(moment().format("Do/MMM/YY"));
console.log(moment().format("HH:mm:ss"));

console.log(moment().add(10, "days").format("dddd"));
console.log(moment().locale("es-us").format("dddd"));

//let hoy = new Date();

//hoy= hoy + 1;
//console.log(hoy);