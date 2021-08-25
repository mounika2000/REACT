const expect = require('chai').expect;

const math = require('../app/math');
// AAA

// Test Suite
describe("testing math functionalities", () => {
    // test case
    it("test add", () => {
        var expected = 9;
        var res = math.add(4,5);
        expect(expected).to.be.equal(res);
    })

     // test case
     it("test sub", () => {
        var expected = 2;
        var res = math.sub(8,6);
        expect(expected).to.be.equal(res);
    })
});