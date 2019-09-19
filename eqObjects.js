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



const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};

assertEqual(eqObjects(ab, ba), true); //--> true

const abc = { a: "1", b: "2", c: "3"};

assertEqual(eqObjects(ab, abc), false); //--> false











// const eqObjects = function(object1, object2) {

//   for(const key of Object.keys(object1)) {

//     // console.log(obect1)
    
    


    

    
  

//   }

//   for(const key of Object.keys(object2)) {

//     // return(object1)
//   }


// };

