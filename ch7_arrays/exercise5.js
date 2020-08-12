let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let newArray1 = removeNonInteger1(array);
console.log(newArray1); // => [1, 3, -4]

let newArray2 = removeNonInteger2(array);
console.log(newArray2);


function removeNonInteger1(array) {
  return array.filter(function (element) {
    return Number.isInteger(element)
  });
}

// even shorter method 
function removeNonInteger2(array) {
  return array.filter(Number.isInteger);
}