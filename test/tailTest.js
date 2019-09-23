// Tests for Tail;

const assert = require('chai').assert;

const middle = require('../tail');



// const assertEqual = require('../assertEqual')


describe("#middle", () => {
  assert.strictEqual(middle([1,2,3]), 2);
})

// describe("#head", () => {
//   it("returns 1 for [1,2,3]", () => {
//     assert.strictEqual(head([1,2,3]),1);

//   });

//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(head(['5']),'5')
//   });

//   it("does not return '2' for [1,2,3]", () => {
//     assert.notStrictEqual(head(['2']), [1,2,3])
//   })

// });







describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]',() => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
    
  });

  it('returns ["Lighthouse", "Labs] for ["Hello", "Lighthouse", "Labs]', () => {
    assert.notDeepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse"])

  });


});
  
// edited with @avijitchoudhury how to figure out test cases for comparing the two arrays





