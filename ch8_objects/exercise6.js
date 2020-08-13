
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// snippet 1
Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

// snippet 2
for (let key in myObj) {
  console.log(key);
}

/*
  They different output because the Object.Keys method in snippet 1
  only returns myObj's own keys defined by itself. 
  For/In loop iterates over properties
  of the myObj's prototype (myProtoObj) as well as it's own properties.
*/ 