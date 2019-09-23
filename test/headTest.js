// const head = require('../head.js');
// const assertEqual = require('../assertEqual.js');

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]),1);

  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']),'5')
  });

  it("does not return '2' for [1,2,3]", () => {
    assert.notStrictEqual(head(['2']), [1,2,3])
  })

});







// Tests for head;
// (assertEqual(head([5,6,7]), 5));
// (assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));