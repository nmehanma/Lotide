

const takeUntil = function(array, callback) {

  const blank = []

  for (let item of array) {
    // console.log(item)

    if(callback(item) === true) {
      return blank
    }else {
      // console.log("go", blank)

      blank.push(item)

    }

    // console.log(callback(item));

     
  }

  // console.log(blank)

}


const data1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const results = takeUntil(data1, item=> item ===',');
// console.log(results)

const results1 = takeUntil(data1, item => item === "been");
// console.log(results)

const results2 = takeUntil(data1, item => item === ",")


//Assertion function

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


//Eq Arrays function

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

assertArraysEqual(results, results1);

assertArraysEqual(results, results2);





// assertArraysEqual(eqArrays(, []));










// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// // console.log(results1);

// // console.log('---');




