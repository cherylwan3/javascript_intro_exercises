function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

//It logs nothing because the console.log(words) was written
//after the return statement. Return statement on line 3 terminates 
//the function. 