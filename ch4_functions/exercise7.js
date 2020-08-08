const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); 
  // side effect: changes the state or content of an array/object passed to a function as an argument 
  // side effect: changes value of qux, an array & variable, defined in outer scope

  console.log(`popped ${value} from the array`); 
  //side effect: logs value to console, so it reads/writes output from outside source
  return value + bar + baz; 
  // side effect: uses variable from outside scope that isn't a constant (baz)
}

foo(qux); 

/*
** 1. The function modifies the array passed as an argument.
** 2. The function writes something to the console.
** 3. The function uses the non-constant value of baz. 
*/