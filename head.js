const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual +  "=== " + expected);
  } else {
    console.log("Assertion Failed: " +  actual + "!== " + expected);
  }


};


let head = function(assertEqual){

  let firstElement = assertEqual.shift();

  return(firstElement)

  }


console.log(head)

//Test Code

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 1);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");




  


