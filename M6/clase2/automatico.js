
const child_process =  require("child_process");

for(let i= 6; i<200; i++){
    child_process.exec(`node ejemplo_api_args.js ${i}`);
}