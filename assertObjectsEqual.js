const Passed = 'Assertion Passed'
const Failed = 'Assertion Failed'
const equal = "==="
const notequal = "!=="
//Function Implementation

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; //

  if(eqObjects(actual, expected) === true) {
    console.log(`✅✅✅${Passed}`, actual, `${equal}`,expected);
  } else {
    console.log(`❌❌❌${Failed}`, actual,`${notequal}`, expected);
  }
};


// console.log('Example label: ${inspect(actual)}');

const eqObjects = function(object1, object2) {
  
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    
    return false;
  }
  
  for(const key of Object.keys(object1)) {
    
    if (object1[key] !==  object2[key]) {
      
      return false 
    }
    
  }
  
  return true
  
}
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"}

// console.log(assertObjectsEqual(eqObjects(ab,ba),true));

console.log(assertObjectsEqual(eqObjects(ab,ba),false)); // => false
