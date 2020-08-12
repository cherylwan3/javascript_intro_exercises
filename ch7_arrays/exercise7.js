/* Use reduce to compute the sum of the squares of all of the numbers 
in an array:
Note that 83 is 3*3 + 5*5 + 7*7.
*/

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83

function sumOfSquares(numbers){
  let newNumbers = numbers.map(num => num * num);
  let squares = newNumbers.reduce((accumulator, element) => accumulator + element, 0);
  return squares;
}