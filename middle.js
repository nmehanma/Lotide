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

const middle = function(array) {
  
  let x =[]

  for (let i = 0; i <array.length; i++){

   if (array.length === 1 || array.length === 2) {
     
    let x  = []

   } else if(array.length % 2 !== 0) {
      
      let x = array[Math.ceil(array.length /2)]

    } else if(array.length % 2 === 0) {

      let x = array[array.length/2] + [Math.ceil(array.length/2)]
    }

    return (x)

  }

  
}

console.log(x)
  
middle([1,2,3,4])