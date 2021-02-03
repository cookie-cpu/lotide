const without = function (source, itemsToRemove) {
  let output = [];
  for (item in itemsToRemove){
    console.log(itemsToRemove[item])
  }
}
/*
function (source, toRemove)
let output = [];
loop through each item in itemsToRemove
  if item is in source
   do nothing
  else 
  output.push(item)
*/

//TEST CASES

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const eqArrays = function (firstArray, secondArray) {
  let arr1 = firstArray.toString();
  let arr2 = secondArray.toString();
  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
};
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😀Assertion Passed😀: ${arr1} ===  ${arr2}`);
  } else {
    console.log(`😟Assertion Failed😟: ${arr1} !===  ${arr2}`);
  }
};


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); 
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);




