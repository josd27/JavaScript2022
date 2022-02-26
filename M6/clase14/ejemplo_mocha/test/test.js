const chai = require("chai");

describe("Mi primera prueba", function(){
    it("Sumando", function(){
        let num1=2;
        let num2=3;
        let suma= num1+num2;
        chai.expect(suma).to.equal(5);
    });
});