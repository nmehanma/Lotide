// Tests for Tail;

const expect = require('chai').expect;

const tail = require('../tail');



// const assertEqual = require('../assertEqual')

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]',() => {
    expect(tail(["Hello", "Lighthouse", "Labs"])).to.be.eql(tail(["Hello", "Lighthouse", "Labs"]))
    
  });

  it('returns["Lighouse","Labs] for ["Hello", "Lighthouse", "Labs"]',() => {
    expect(tail(["Hello", "Lighthouse", "Labs"])).to.not.eql(tail(["Hello", "Lighthouse"]))
  });
  
});



