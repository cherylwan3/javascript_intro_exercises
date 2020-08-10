function evenOrOdd (num) {
  if (!Number.isInteger(num)) {
    console.log('Error. Please enter a number');
    return;
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
  evenOrOdd('ten');