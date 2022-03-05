const chai = require("chai");

describe("Mi primera prueba", function(){
    it("Sumando", function(){
        let num1=2000;
        let num2=-3000;
        let suma= num1+num2;
        chai.expect(suma).to.gt(0);
    });
});