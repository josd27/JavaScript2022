const chai = require("chai");
const chaihttp = require("chai-http");

const server = require("../index");
chai.use(chaihttp);

describe("Probando REST",()=>{
    it("Probar Usuarios", ()=>{
        chai.request(server)
        .get("/usuarios")
        .end(function(err, res){//response
            //console.log(res);
            let json = JSON.parse(res.text);
            //console.log(json);
            chai.expect(json).to.have.property("usuarios");
            chai.expect(json.usuarios).to.be.an("array");
            //chai.expect(json.usuarios.lenght).to.gt(10);
        })
    });
});