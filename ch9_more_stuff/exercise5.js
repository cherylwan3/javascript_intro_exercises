function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
console.log(doSomething('Four score and seven years ago'));

// output
// [3, 5, 5, 3, 5, 4]

/*
First, the string argument gets split into an array,with elements split 
by ' '. Then, the order of the elements are reversed. This array is then
used to create a new array in which the length of each element replaces
the elements at its respective array indices. 

Book's answer:
This code converts a string into an array of words, reverses that array,
and then returns a new array that contains the lengths of the words.
It assumes that a single space character delimits the words in the 
original string.

*/