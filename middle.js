// const eqArrays = function(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i ++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// };

// const assertArraysEqual = function(actual,expected) {
//   if (eqArrays(actual,expected)) {
//     console.log(`😀Assertion Passed😀: ${actual} ===  ${expected}`);
//   } else {
//     console.log(`😟Assertion Failed😟: ${actual} !===  ${expected}`);
//   }
// };

// const middle = function(array){
//   let mid = Math.floor(array.length / 2); // index 2
//   var value = array[mid]; // value 1
//   console.log(value)

//   // if (Number.isInteger(array.length/2)){
//   //   console.log(array[array.length/2])
//   // };
//   // let mid = Math.floor(array.length/2)

//   // let start = Math.floor(array.length/2)
//   // let end = Math.round(array.length/2)
//   // console.log(array[start] , array[end])
// };


// function middle(arr){      
//   var mid = parseInt((arr.length/2), 10) - 1;
//   if(mid === -1)
//     console.log('Array empty');
//   else
//     console.log('Middle value in array ['+arr+'] is '+arr[mid]);
// };

const isEven = function (num) {
  return num % 2 === 0;
}

const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return "Even Array: " + array
  } else {
    return "Odd Array: " + array
  }
}

//TEST CASES

//Empty arrays
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

//Odd number of array items
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]

//Even number of array items
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


