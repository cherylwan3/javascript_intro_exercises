let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* 
 This causes an infinte loop because (counter = 1) will always
be a truly value, the loop condition will never be false. Instead
of comparing counter with 1, we assigned 1 to counter. Normally
to compare numbers, the === is used. Line 7 will 
never become true because counter will always be 2. 
*/