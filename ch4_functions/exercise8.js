//Whicho of the following functions are pure functions?

Function 1
function sum(a, b) {
  console.log(a + b);
  return a + b;
}
Function 2
function sum(a, b) {
  a + b;
}
Function 3
function sum(a, b) {
  return a + b;
}
Function 4
function sum(a, b) {
  return a + b + Math.random();
}
Function 5
function sum(a, b) {
  return 3.1415;
}

/*
Only function 3 is pure.
Function 1 logs something to the console.
Function 2 has no return value, undefined isn't a useful value.
Function 4 uses random number generator, so it won't always return same value.
Function 5 returns a seemingly useful value, but isn't dependent on the function arguments. 
*/


