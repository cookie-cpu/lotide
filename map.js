const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr,func){
  const results = [];
  for (let item of arr){
    results.push(func(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

