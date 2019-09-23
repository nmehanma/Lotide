// Tests for Tail;

const assert = require('chai').assert;

const tail = require('../tail');



// const assertEqual = require('../assertEqual')

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]',() => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
    
  });

  it('returns ["Lighthouse", "Labs] for ["Hello", "Lighthouse", "Labs]', () => {
    assert.notDeepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse"])

  });


  


});
  
// edited with @avijitchoudhury how to figure out test cases for comparing the two arrays





