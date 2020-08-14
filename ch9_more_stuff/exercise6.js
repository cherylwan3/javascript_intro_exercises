let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches (arrayStrings, matchElement) {
  let matchArray = [];
  arrayStrings.forEach(element => {
    if (matchElement.test(element) === true) {
      matchArray.push(element);
    };
  });
  return matchArray;
};
console.log(allMatches(words, /lab/));


// Method using filter
function allMatchesFilter (words, pattern) {
  return words.filter(word => pattern.test(word));
}
console.log(allMatchesFilter(words, /lab/));


// Another method 
function allMatches3 (words, pattern) {
  let matchArray = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matchArray.push(words[index]);
    }
  }
  return matchArray;
}
console.log(allMatches3(words, /lab/));
