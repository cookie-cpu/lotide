const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys2.length !== keys1.length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key])) {
        return true;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


const assertObjectsEqual = function(actual, expected){

  
}