let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/*
This logs [1, 4, 3] because on line 3, the element at index 1 of array1
was changed to 4. Array2 points to array1.

*/