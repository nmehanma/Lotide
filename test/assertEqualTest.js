
// Test Code


const assert = require('chai').assert

describe('#assertEqual', () => {
  it('returns true if actual output is same as expected output', () => {
    assert.strictEqual("Lighthouse Labs", "Lighthouse Labs");
  })

describe('#assertEqual', () => {
  it('returns true if actual output is not same as expected output', () => {
    assert.notStrictEqual("Lighthouse", "Lighthouse Labs");

  });
  
});

});




