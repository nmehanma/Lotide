const words = ["ground", "control", "to", "major", "tom"];

const words1 = ["ground", "control", "to", "major"]

const words2 = ["ground", 3, "to", "major"]

const map = function(array, callback) {

  const results = [];
  
  for (let item of array) {

    results.push(callback(item));

    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }

  
  // console.log('array: ', array);
  // console.log('callback: ', callback);

  // const results = [];
  return results;
}


const results1 = map(words, word => word[0]);
// console.log(results1);

const results2 = map(words1, word => word[0]);
// console.log(results2);

const results3 = map(words2, word => word[0]);
// console.log(results3);



// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => false




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


assertArraysEqual(results1, results2); 

assertArraysEqual(results1, results3);

// assertArraysEqual(results2, results3)

