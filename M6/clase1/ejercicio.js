
const child_process= require('child_process');

child_process.exec('ipconfig', function(err, result){
    console.log(result);
});