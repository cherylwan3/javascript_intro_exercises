// Write some code to extract the word 'mem' from the 
//following nested array:

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

console.log(arr[1][2]);

// for challenging myself: I wrote a function that logs 'Mem',
// if it's found inside a double nested array. It returns a new array 
// that contains all instances of 'mem'. 
function logMemInDoubleNestedArray(arr) {
  let newArr = [];
  arr.forEach(arrElement => {
    arrElement.forEach(letter => {
      if (letter === 'mem') {
        newArr.push(letter);
      };
    });
  });
  if (newArr[0] === 'mem') {
    console.log('mem');
  } 
  return newArr;
}
console.log(logMemInDoubleNestedArray(arr));
