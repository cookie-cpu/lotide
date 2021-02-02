const eqArrays = function(firstArray, secondArray) {
  let arr1 = firstArray.toString();
  let arr2 = secondArray.toString();
  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`😀Assertion Passed😀: ${arr1} ===  ${arr2}`);
  } else {
    console.log(`😟Assertion Failed😟: ${arr1} !===  ${arr2}`);
  }
};

assertArraysEqual([1,2,3],[4,2,2]);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,1],[1,2,1]);
assertArraysEqual([10,20,30,40],[5,10,15]);
assertArraysEqual([10,20,30,40],[10,20,30,40]);

