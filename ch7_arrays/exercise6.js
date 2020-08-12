let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
let arrLength = arr.map(arrElements => arrElements.length);
let newArr = arrLength.filter(arrLengthElements => {
  return arrLengthElements % 2 !== 0;
  });
return newArr;
}

// textbook's answer:
function oddLengths2(arr) {
  let filteredNumbersArray = arr.map((letters) => {
    return letters.length;
  }).filter((number) => {
    return number % 2 === 1;
  });

  return filteredNumbersArray;
}
console.log(oddLengths2(arr));