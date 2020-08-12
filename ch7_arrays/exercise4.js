let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]

let evenOrOddArray = myArray.map(numElement => {
  if (numElement % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
    }
  }
);
console.log(evenOrOddArray);


// Another way to do it using a: for loop
let newArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 === 0) {
    newArray[i] = 'even';
  } else {
    newArray[i] = 'odd';
    }
  };
console.log(newArray);

// textbook for loop answer
let newArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
}
