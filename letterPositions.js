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








const letterPositions = function(sentence) {

  const result = {};

  for(let i = 0; i < sentence.length; i++) {
    let char = sentence[i].toLowerCase()

    if(char !== " " ) {
      if(result[char]) {
        result[char].push(i);
        //console.log(result[char]);
      } else {
        result[char] = [i];
        // console.log(result);
      }
    }


   
  }

  return result;

};



const result1 = letterPositions("Lighthouse in the House");

// console.log(result1)
