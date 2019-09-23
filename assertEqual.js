const Passed = 'Assertion Passed'
const Failed = 'Assertion Failed'
const equal = "==="
const notequal = "!=="

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅${Passed}`, actual,  `${equal}`, expected);
  } else {
    console.log(`❌❌❌${Failed}`, actual, `${notequal}`, expected);
  }


};

module.exports = assertEqual;

