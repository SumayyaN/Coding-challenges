
//  2. sumArray function that takes in a sum of functions and returns thier sum

function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
let inputArray = [9, 1, 2, 3, 4, 1];
console.log(sumArray(inputArray));
