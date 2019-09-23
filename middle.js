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




// middle([1]) // => []
// middle([1,2]) //=> []


// const result2 = middle([1]) // => undefined

// const result1 = middle([1,2,3]) // => [2]

// const result2 = middle([1,2,3,4,5]) // => [3]

// // const result3 = middle([1,2,3,4]) // => [2,3]

// // const result4 = middle([1,2,3,4,5,6,])

// module.exports = result1;
// module.exports = result2;


assertArraysEqual(middle([1,2,3]), [2]);

// assertArraysEqual(result3.length, result4.length);














// const Passed = 'Assertion Passed'
// const Failed = 'Assertion Failed'
// const equal = "==="
// const notequal = "!=="

// const assertArraysEqual = function (actual, expected) {

//   if (eqArrays(actual, expected)) {
//     console.log(`${Passed}`, actual,  `${equal}`, expected);
//   } else {
//     console.log(`${Failed}`, actual, `${notequal}`, expected);
//   }
 
  
// }


// const eqArrays = function(array1, array2) {

//   if( array1.length !== array2.length) {
//     return false
//   }

//   for(let i = 0; i < array1.length; i++) {

//     let a = array1[i]
//     let b = array2[i]

//     if (a !== b) {
//       return false
//     }
//   } return true
  
// }


// Actual Function

// const middle = function(array) {
  
//   let x =[]

//   for (let i = 0; i <array.length; i++){

//    if (array.length === 1 || array.length === 2) {
     
//     let x  = []

//    } else if(array.length % 2 !== 0) {
      
//       let x = array[Math.ceil(array.length /2)]

//     } else if(array.length % 2 === 0) {

//       let x = array[array.length/2] + [Math.ceil(array.length/2)]
//     }

//     return (x)

//   }

  
// }

// console.log(x)
  
// middle([1,2,3,4])