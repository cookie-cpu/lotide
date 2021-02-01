const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀 Assertion Passed 😀 : ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`😟 Assertion Failed 😟 : ${actual} ===  ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr.slice(0, 1);
  return newArr;
};

//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(words);
