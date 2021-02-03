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

assertArraysEqual([1,2,3],[4,2,2]);
assertArraysEqual([1,2,3],[1,2,"3"]);
assertArraysEqual([1,2,1],[1,2,1]);
assertArraysEqual([10,20,30,40],[5,10,15]);
assertArraysEqual([10,20,30,40],[10,20,30,40]);

