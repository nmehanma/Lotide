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


const findKeyByValue = function (obj, str) {
  for (const key of Object.keys(obj)) {
    if(obj[key] === str) {
      return key
    }
  }
}

const bestTvShowsByGenre = {

  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"

};


assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show "),undefined);


