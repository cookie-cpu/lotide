const head = require('../head.js');
const assertEqual = require('../assertEqual');



//TEST CASES
console.log(head([1,2,3]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([]));