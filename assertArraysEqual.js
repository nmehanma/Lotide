const Passed = 'Assertion Passed'
const Failed = 'Assertion Failed'
const equal = "==="
const notequal = "!=="

const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅${Passed}`, actual,  `${equal}`, expected);
  } else {
    console.log(`❌❌❌${Failed}`, actual, `${notequal}`, expected);
  }
 
  
}

module.exports = assertArraysEqual




