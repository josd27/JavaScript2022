
const child_process= require('child_process');

child_process.exec('python archivo.py', function(err, result){
    console.log(result);
});