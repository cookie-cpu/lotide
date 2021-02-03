const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed😀: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`😟Assertion Failed😟: ${actual} !===  ${expected}`);
  }
};

const countLetters = function(word) {
  const output = {};
  for (let letter in word) {
    if (word[letter] !== " ") {
      if (output[word[letter]]) {
        output[word[letter]] += 1;
      } else {
        output[word[letter]] = 1;
      }
    }
  } return output;
};
//{ L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

assertEqual(countLetters("Lighthouse in the house"),{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});


console.log(countLetters("Lighthouse in the house"));


// const countOnly = function(allItems, itemsToCount) {
//   const results = {};
//   for (const item of allItems) {
//     if (itemsToCount[item]) {
//       if (results[item]) {
//         results[item] += 1;
//       } else {
//         results[item] = 1;
//       }
//     }
//   }
//   return results;
// };

