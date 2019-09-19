const Passed = 'Assertion Passed'
const Failed = 'Assertion Failed'
const equal = "==="
const notequal = "!=="

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${Passed}`, actual,  `${equal}`, expected);
  } else {
    console.log(`${Failed}`, actual, `${notequal}`, expected);
  }


};

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











const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};

assertEqual(eqObjects(ab, ba), true); //--> true

const abc = { a: "1", b: "2", c: "3"};

assertEqual(eqObjects(ab, abc), false); //--> false

const cd = { c: "1", d: ["2" , 3]};

const dc = { d: ["2", 3], c: "1"};

const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, cd2), false);

// eqArrays(eqObjects(cd, cd2), false);


// assertEqual(eqObjects(cd, dc), false)










// const eqObjects = function(object1, object2) {

//   for(const key of Object.keys(object1)) {

//     // console.log(obect1)
    
    


    

    
  

//   }

//   for(const key of Object.keys(object2)) {

//     // return(object1)
//   }


// };


