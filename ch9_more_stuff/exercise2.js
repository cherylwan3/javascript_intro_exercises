/*
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)

 This tells us that an error occured in exercise2.js on line 4 of the 
 program. ^ points to where it thinks the error occured: in the argument
 of console.log().
More specifically, line 6 in the output tells you that a ReferenceError 
exception occurred and that the name greeting isn't defined. Line 7 
repeats some earlier information: JavaScript detected the error at 
column 15 of line 4, but it also tells you that the code is in the hello 
ion. Line 8 tells you that hello was called from line 13 in an anonymous
 function, namely the global-level of the program.

The rest comes from running in node and isn't useful to me as an 
application developer


 */