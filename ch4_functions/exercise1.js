let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
// Code logs 1 to the console. foo doesnt affect the value assigned to 
// bar on line 1 because javascript creates an inner scope 
// Bar variable on line 3 isn't same bar variable on line 1.
// foo() doesnt affect the final output