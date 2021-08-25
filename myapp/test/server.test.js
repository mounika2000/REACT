const expect = require('chai').expect;
const request = require('request');

// AAA

// Test Suite
describe("testing server functionalities", () => {
    // test case
    // https://jestjs.io/docs/asynchronous
    it("server handles add", (complete) => {
        request('http://localhost:3000/add?x=100&y=10', (error, response, body) => {
            var expected = "1410";
            expect(expected).to.be.equal(body);
            complete();
        })
    })

});