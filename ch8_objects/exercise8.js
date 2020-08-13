let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';
// qux = 'hi';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/* 
Console.log(foo.a) logs hi. 
console.log(qux) logs hello.
Objects are mutable but strings and other primitives are not.
Line 10 reassigns the argument2 variable, but it doesn't mutate the
string represented by qux.  Thus, line 16 logs hello: the original 
value of the qux variable.
*/