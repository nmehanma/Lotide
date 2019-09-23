const assertEqual = require('./assertEqual')

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

module.exports = eqArrays;

// assertEqual (eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  // assertEqual (eqArrays(["1", "2", "3"], ["1", "2", 3], false)); // => false


  // let a = arrays1.toString();
  // let b = arrays2.toString();

  // console.log(a)
  // console.log(b)

  // return a === b

  

 




// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// assertEqual (eqArrays([1, 2, 3], [3, 2, 1]), true); // => false




// assertEqual(eqArrays([1,2,3], [1,2,3]), true);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(2, 1);