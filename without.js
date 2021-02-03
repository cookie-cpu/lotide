/* Pseudocode
function (source, remove)
let output = [];
loop through each item in remove
  if item is in source
   do nothing/splice
  else
  output.push(item)
*/
//loop through itemstoremove to find the key
//remove that key from source

const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      output.push(source[i]);
    }
  }
  return output;
};


//TEST CASES
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
//[ '1', '1', '1', '2', '2', '2', '3', '3' ]


const eqArrays = function(firstArray, secondArray) {
  let arr1 = firstArray.toString();
  let arr2 = secondArray.toString();
  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😀Assertion Passed😀: ${arr1} ===  ${arr2}`);
  } else {
    console.log(`😟Assertion Failed😟: ${arr1} !===  ${arr2}`);
  }
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);