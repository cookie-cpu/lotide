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

const findKey = function(object, callback){
//loop through obj
//if callback = truthy return key
//no key = undefined
}