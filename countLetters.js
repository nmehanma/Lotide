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


const countLetters = function (str) {

  const results ={}

  for (const char of str) {

    console.log(char)

    if(char !== " ") {
      if(results[char]) {
        results[char] +=1;
      } else {
        results[char] = 1;
      }
      
    } 

    
  }
  return results;
}





  
const result1 = countLetters("lighthouse in the house");

console.log(result1)




