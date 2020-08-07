let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// It logs bar because let foo = 'qux'; is inside a block, and console.log(foo);
// is outside of that block.