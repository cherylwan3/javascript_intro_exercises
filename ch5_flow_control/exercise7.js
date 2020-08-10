function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  };
};

console.log(allCaps('hi'));
console.log(allCaps('Cheryl Cheryl'));

// Another way to write the function
function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(capsLong("Sue Smith"));     // 'Sue Smith'
console.log(capsLong("Sue Robertson")); // 'SUE ROBERTSON'
console.log(capsLong("Joe Thomas"));    // 'Joe Thomas'
console.log(capsLong("Joe Stevens"));   // 'JOE STEVENS'