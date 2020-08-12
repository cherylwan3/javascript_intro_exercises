// Without using a for, while, or do/while loop,
// write some code that checks whether the number 3 
//appears inside these arrays:
//  Return true or false depending on each result.

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// Book's Method
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

// My answer:

function isNumber3InArray(array) {
  let filteredNumber3Array = [];
  filteredNumber3Array = array.filter(number => number === 3);
  if (filteredNumber3Array[0] / 3 === 1) {
    return 'true';
  } else {
    return 'false';
  };
}
console.log(isNumber3InArray(numbers1));
console.log(isNumber3InArray(numbers2));
console.log(isNumber3InArray(numbers3));
