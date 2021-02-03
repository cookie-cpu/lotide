const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed😀: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`😟Assertion Failed😟: ${actual} !===  ${expected}`);
  }
};

const countLetters = function(sentence) {
  for (let letter in sentence) {
    console.log(sentence[letter]);
  }
  
};

console.log(countLetters("Lighthouse"));