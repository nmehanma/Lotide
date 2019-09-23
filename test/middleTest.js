// Middle Testing

const assert = require('chai').assert;

const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  })

describe("#middle", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.notDeepEqual(middle([1,2,3]), [1])
  });

});

});


// edited with @avijitchoudhury



















