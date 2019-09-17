const Passed = 'Assertion Passed';
const Failed = 'Assertion Failed';
const equal = "===";
const notequal = "!==";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${Passed}`, actual,  `${equal}`, expected);
  } else {
    console.log(`${Failed}`, actual, `${notequal}`, expected);
  }

};

//Test Code


let tail = function(array) {
  return array.slice(1);

};
  



console.log(tail([5,6,7]));


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(2, 1);


  
