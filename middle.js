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

const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    //return "Even Array: " + array
    let start = Math.floor(array.length/2)
    //let end = Math.round(array.length/2) + 1
    let end = start++
    return [end, start]
  } else {
    //return "Odd Array: " + array
    return [array[Math.floor(array.length/2)]]
  }
}

//TEST CASES

//Empty arrays
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

//Odd number of array items
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]
console.log(middle([1, 2, 3, 4, 5, 6, 7]));// => [4]

//Even number of array items
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // => [5, 6]

//
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])