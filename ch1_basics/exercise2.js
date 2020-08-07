let number = 4936;
console.log(`Original Number: ${number}`);

let onesPlace = number % 10;
console.log(`Ones Place: ${onesPlace}`);

number = (number - onesPlace) / 10;
let tensPlace = number % 10;
console.log(`Tens Place: ${tensPlace}`);

number = (number - tensPlace) / 10;
let hundrethsPlace = number % 10;
console.log(`Hundreths Place: ${hundrethsPlace}`);

number = (number - hundrethsPlace) / 10;
let thousandsPlace = number % 10;
console.log(`Thousands Place: ${thousandsPlace}`);
