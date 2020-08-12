let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

let evenArray = myArray.filter(num => num % 2 === 0);
console.log(evenArray);

// Book's answers:
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value); // => 6, 4, 2, 4, 16, 0
  }
}

// book's second answer:
myArray.forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value); // => 6, 4, 2, 4, 16, 0
  }
});