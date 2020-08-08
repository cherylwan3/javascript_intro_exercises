function multiply (num1,num2) {
 return num1 * num2;
};
function getNumber(prompt){
  let rlSync = require('readline-sync');
  let number = parseFloat(rlSync.question(prompt));
  return number;
}
let number1 = getNumber('Enter the first number:');
let number2 = getNumber('Enter the second number:');
console.log(`${number1} * ${number2} = ${multiply(number1,number2)}`);