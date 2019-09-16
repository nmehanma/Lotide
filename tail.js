const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual +  "=== " + expected);
  } else {
    console.log("Assertion Failed: " +  actual + "!== " + expected);
  }


};

//Test Code

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 1);

let head = function(assertEqual)
  {console.log(assertEqual[0])

  }

  console.log(assertEqual)
  
