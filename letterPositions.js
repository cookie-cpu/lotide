/*
return all the indices (zero-based positions) 
in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, 
multiple numbers may be needed to represent all the places in the string that it shows up.
*/


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

//{ L: [0], i: [1,9], g: [2], h: [3,5,13,15], t: [4], o: [6,16], u: [7,17], s: [8,18], e: [9,14,19], n: [11] }


const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(actual,expected) {
  if (eqArrays(actual,expected)) {
    console.log(`😀Assertion Passed😀: ${actual} ===  ${expected}`);
  } else {
    console.log(`😟Assertion Failed😟: ${actual} !===  ${expected}`);
  }
};