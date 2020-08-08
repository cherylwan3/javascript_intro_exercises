function times(number1,number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}
let num1 = times(1, 1);
let num2 = times(2, num1);
let num3 = times(3, num2);
let num4 = times(4, num3);
let num5 = times(5, num4);


// times(times(times(times(times(1, 1), 2), 3), 4), 5);