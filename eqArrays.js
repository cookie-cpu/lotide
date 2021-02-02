const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed😀: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`😟Assertion Failed😟: ${actual} ===  ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray){
  let arr1 = firstArray.toString(); //converts array to string for comparison
  let arr2 = secondArray.toString();
  //console.log(arr1, arr2)
  if (arr1 === arr2){ //checks if both strings are equal
    return true
  } else {
    return false
  }
}

//TEST CASES
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

