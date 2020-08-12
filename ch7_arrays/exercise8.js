/*
Write a function similar to the oddLengths function from Exercise 6, 
but don't use map or filter. Instead, try to use the reduce method.
*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

//my method
function oddLengths(arr) {
  return arr.reduce((oddLettersArray, letters) => {
    if(letters.length % 2 !== 0) {
      oddLettersArray.push(letters.length);
    };
    return oddLettersArray;
  }, []);
}
// book's method
function oddLengths2(arr) {
  return arr.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

console.log(oddLengths2(arr));