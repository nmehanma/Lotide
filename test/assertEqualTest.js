
// Test Code

// const assertEqual = require('../assertEqual');
// const head = require('../head');
// const tail = require('../tail');

const assert = require('chai').assert

describe('#assertEqual', () => {
  it('returns true if actual output is same as expected output', () => {
    assert.strictEqual("Lighthouse Labs", "Lighthouse Labs");
  })

describe('#assertEqual', () => {
  it('returns true if actual output is not same as expected output', () => {
    assert.notStrictEqual("Lighthouse", "Lighthouse Labs");

  })
  
})


})


// Tests for assertEqual;

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(2, 1);

// // Tests for head;
// (assertEqual(head([5,6,7]), 5));
// (assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

// Tests for Tail;

// const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs")
// assertEqual(result[2], undefined)

