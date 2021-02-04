const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr,func){
  const results = [];
  for (let item of arr){
    results.push(func(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

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