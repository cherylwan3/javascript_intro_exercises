let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj).map(key => key.toUpperCase());
console.log(objKeys);
console.log(obj);

// longer method
/*
let objKeys = Object.keys(obj);
let objKeysUpperCase = objKeys.map(key => key.toUpperCase());
console.log(objKeysUpperCase);
console.log(obj);
*/

// using .forEach method 

/*
let objKeys = [];
Object.keys(obj).forEach(function(key) {
  objKeys.push(key.toUpperCase());
});
console.log(objKeys); // => [ 'B', 'A', 'C' ]
*/