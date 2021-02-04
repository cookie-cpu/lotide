const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed😀: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`😟Assertion Failed😟: ${actual} !===  ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise return false!
const eqObjects = function(object1, object2) {

};

//TEST CASES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba),true)


const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false)
