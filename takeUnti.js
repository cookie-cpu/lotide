const takeUntil = function(array, callback){
  let output = [];
  for (let item in array){
    if (!callback(array[item])){
      output.push(array[item])
    } else if (callback(array[item])){
      return output
    }
  } return output
}


//TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


/* Expected Output
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/