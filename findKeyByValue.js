/*
Implement the function findKeyByValue
which takes in an object and a value.
It should scan the object and return the first key which contains the given value.
 If no key with that given value is found, then it should return undefined.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed😀: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`😟Assertion Failed😟: ${actual} !===  ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  let keys = Object.keys(obj);
  for (let genre of keys) {
    if (obj[genre] === val) {
      return genre;
    }
    //console.log(Object.keys(obj))
    //console.log(keys[genre])
  }
};

//TEST CASES
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "scifi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
