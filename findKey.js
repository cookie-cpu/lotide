const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed😀: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`😟Assertion Failed😟: ${actual} !===  ${expected}`);
  }
};

/*
Implement the function findKey which takes in an object and a callback.
 It should scan the object and return the first key for which the callback returns a truthy value.
  If no key is found, then it should return undefined.
*/

const takeUntil = function(array, callback) {
  let output = [];
  for (let item in array) {
    if (!callback(array[item])) {
      output.push(array[item]);
    } else if (callback(array[item])) {
      return output;
    }
  } return output;
};

//loop through obj
//if callback on value = truthy return key
//no key = undefined
const findKey = function(object, callback){
  for (let name in object){
    console.log(`\n`,"Name: ",name,`\n`, "Star Rating: ", object[name])
    // if (callback(object[item])){
    //   console.log(item)
    // } else return undefined


    // if (callback(object[item]) === object[item]){
    //   console.log(object[item])
    // } else return undefined
    // //console.log(object[item])
  }
}

//TEST CASES
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

