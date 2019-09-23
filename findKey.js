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


const findkey = function(obj, callback) {

  for(const key of Object.keys(obj)) {
    if(callback(obj[key])) {
      return key
    }
  }

}

y = findkey({

  "Blue Hill": {stars: 1},
  "Akaleri":   {stars: 3},
  "noma":      {stars: 2},
  "elBulli":   {stars: 3},
  "Ora":       {stars: 3},
  "Akelarre":  {stars: 3}

}, x=> x.stars === 2) // => "noma"


z = findkey({

  "Blue Hill": {stars: 1},
  "Akaleri":   {stars: 3},
  "noma":      {stars: 2},
  "elBulli":   {stars: 3},
  "Ora":       {stars: 3},
  "Akelarre":  {stars: 3}

}, x=> x.stars === 3) // => "noma"

// console.log(y)


assertEqual(y,z)

assertEqual(y,y)













// //original function for findkeybyvalue
// const findKeyByValue = function (obj, str) {
//   for (const key of Object.keys(obj)) {
//     if(obj[key] === str) {
//       return key
//     }
//   }
// }

// // takeUntil function
// const takeUntil = function(array, callback) {

//   const blank = []

//   for (let item of array) {
//     // console.log(item)

//     if(callback(item) === true) {
//       return blank
//     }else {
//       // console.log("go", blank)

//       blank.push(item)







