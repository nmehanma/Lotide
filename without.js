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






const without = function(source, itemsToRemove) {

let results =[]

  for (let i = 0; i < source.length; i++) {

    let element = source[i]

      if(itemsToRemove.includes(element) === false) {

        // console.log(i)
        // console.log(element)

        results.push(element)
      }
    
  }

  return results
}





// console.log(without([1,2,3], [1])) //=> [2, 3]

// console.log(without(["1", "2", "3"], [1,2,"3"])) // =>["1", "2"]




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
        } return true
        
      }
      
      const words = ["hello", "world", "lighthouse"];
      without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
      // Make sure the original array was not altered by the without function
      assertArraysEqual(words, ["hello", "world", "lighthouse"]);
      
      
      