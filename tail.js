const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual +  "=== " + expected);
  } else {
    console.log("Assertion Failed: " +  actual + "!== " + expected);
  }


};

//Test Code


let tail = function(array){
  return array.slice(1);

}
  

  console.log(tail([5,6,7]))




// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(2, 1);


  
