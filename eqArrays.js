const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed😀: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`😟Assertion Failed😟: ${actual} ===  ${expected}`);
  }
};

// const eqArrays = function(firstArray, secondArray) {
//   let arr1 = firstArray.toString(); //converts array to string for comparison
//   let arr2 = secondArray.toString();
//   //console.log(arr1, arr2)
//   if (arr1 === arr2) { //checks if both strings are equal
//     return true;
//   } else {
//     return false;
//   }
// };

// const eqArrays = function(first, second){
//   if (first.length === second.length){
//     for (let i = 0; i <= first.length; i++){
//       if (first[i] !== second[1]){
//         return false
//       }
//     }
//   } return true
// }

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

//TEST CASES
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays([1, 2, 3], [1, 2, 3]); // => true

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

