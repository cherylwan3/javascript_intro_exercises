const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
 This program will not produce an error. On line 3, a new variable F00 
 is initialized but is within another block scope so it doesn't affect
 the outcome of the statement console.log(FOO);. Once a block is created
 on line 2, it creates another scope, so variable F00 on line 3 is an 
 entirely new entity.
*/