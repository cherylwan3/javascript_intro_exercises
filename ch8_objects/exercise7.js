let objToCopy = {
  foo: 1,
  bar: 2,
};
let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined

//Book's answer:
function copyObj(sourceObject, keys) {
  let destinationObject = {};
  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });
    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}
// My own answer. It's a big longer, but works.
/*
function copyObj(objToCopy, keysToCopy) {
  let newObject = {};
  if (keysToCopy) {
    for (let prop in objToCopy) {
      if (prop == keysToCopy) {
    newObject[prop] = objToCopy[prop];
      };
    };
    return newObject;
  } else {
    return Object.assign(newObject, objToCopy);
  }
}
*/