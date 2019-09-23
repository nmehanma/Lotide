// Test Assertion Functions

const Passed = 'Assertion Passed'
const Failed = 'Assertion Failed'
const equal = "==="
const notequal = "!=="



const eqArrays = require('./eqArrays.js');

const assertArraysEqual = require('./assertArraysEqual.js');


// Actual Function

const middle = function(arr) {

  let x = []
  if( arr.length === 1 || arr.length === 2) {
    x = undefined;

  } else if(arr.length % 2 !== 0) {
      x = arr.splice(Math.floor(arr.length / 2), 1);
      // console.log("true")
      
    } else {
      x = arr.splice(Math.floor(arr.length / 2) - 1, 2)
    }
  
  return x
  
}

module.exports = middle;

















