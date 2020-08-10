function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

/* This will return 'Not Empty' because it accepts the array.
** Even though the array is empty (no elements and .length is 0), 
** it is not falsy. Javascript executes the if(arr) branch 
** of the statement.
*/