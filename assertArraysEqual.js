const Passed = 'Assertion Passed'
const Failed = 'Assertion Failed'
const equal = "==="
const notequal = "!=="

const assertArraysEqual = function (actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`${Passed}`, actual,  `${equal}`, expected);
  } else {
    console.log(`${Failed}`, actual, `${notequal}`, expected);
  }
 
  
}




const eqArrays = function(array1, array2) {

  if( array1.length !== array2.length) {
    return false
  }

  for(let i = 0; i < array1.length; i++) {

    let a = array1[i]
    let b = array2[i]

    if (a !== b) {
      return false
    }
  } 
  return true
  
}

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => false



// const Passed = 'Assertion Passed'
// const Failed = 'Assertion Failed'
// const equal = "==="
// const notequal = "!=="

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`${Passed}`, actual,  `${equal}`, expected);
//   } else {
//     console.log(`${Failed}`, actual, `${notequal}`, expected);
//   }


// };

// //Test Code

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(2, 1);