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


const flatten = function(arr) {
  
  let result = []
  
  for(let i = 0; i < arr.length; i++) {
    
    if(Array.isArray(arr[i]) !== true) {
      
      result.push(arr[i])
      
    }else 
    
    for (let j = 0; j < arr[i].length; j++) {
      
      result.push(arr[i][j])
      
    }
  }
  
  return result
  
}



// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]) // => [1, 2, 3, 4, 5, 6]

// console.log(flatten([1,2,[3,4],5,[6]]))


// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => false



