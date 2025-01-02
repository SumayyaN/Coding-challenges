// ***************1. Number of times a letter "a"  appears in the string

let count = 0;
let sentence = "JavaScript is amazing!";
for(let i = 0; i<sentence.length;i++){
  if(sentence[i].toLocaleLowerCase() === 'a'){
    count++
  }
}
console.log(count);

// ***************2. sumArray function that takes in a sum of functions and returns thier sum

// function sumArray(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// }
// let inputArray = [9, 1, 2, 3, 4, 1];
// console.log(sumArray(inputArray));

//************** 3.loop to log all key-value pairs of an object

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (let key in obj) {
//   console.log(`${key} : ${obj[key]}`);
// }

// ************* 4. using the includes method

// let array =[1,2,3,4,5];
// let result = array.includes(5);
// console.log(result);

//********** 5.find max function

// function findMax(array) {
//   let max = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// let inputArray = [9, 2, 6, 100, 87];
// console.log(findMax(inputArray));

// *************** 6.combining two arrays using the concat method

// let array1 = [1,2];
// let array2 = [3,4];
// let combinedArray = array1.concat(array2);
// console.log(combinedArray);

//*************** 7.function thet reverses a string

// function reverseString(s) {
//   for (let i = s.length - 1; i >= 0; i--) {
//     console.log(s[i]);
//     document.write(s[i]);
//   }
// }
// let str = "Hello";
// reverseString(str);

//************** 8.function that takes a number and checks if it exists in an array or not

// function numberSearch(num, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === num) {
//       return "Found";
//     }
//   }
//   return "Not Found";
// }

// let number = 5;
// let searchArray = [2, 3, 4, 6];
// console.log(numberSearch(number, searchArray));

//************** 9. function that accepts a string and counts how many vowels it contains

// function vowelCounter(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === "a") {
//       count++;
//     } else if (str[i].toLowerCase() === "e") {
//       count++;
//     } else if (str[i].toLowerCase() === "i") {
//       count++;
//     } else if (str[i].toLowerCase() === "o") {
//       count++;
//     } else if (str[i].toLowerCase() === "u") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowelCounter("SUMAYYA sumayya"));

// *********** 10.program to check if two arrays are equal

//************ 11. a program that filters out all numbers greater than 10 from array and returns the result

// let myArray = [11,23,12,2,3,2,50];
// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] > 10) {
//     console.log(myArray[i]);
//   }
// }

//********* 12.
// **** a) function that takes a string and checks if it’s a palindrome

// function palindromeCheck(word) {
//   let wordSplit = word.split("");
//   let wordReverse = wordSplit.reverse().join("");
//   if (word === wordReverse) {
//     console.log(`${word} is a palindrome`);
//   } else {
//     console.log(`${word} is not palindrome`);
//   }
// }
// let inputWord = "madam";
// palindromeCheck(inputWord);

//****** b) a program that takes an object and swaps its keys and values

// function swapKeysAndValues(obj) {
//   let swapped = {};

//   for (let key in obj) {
//     swapped[obj[key]] = key;
//   }

//   return swapped;
// }

// let originalObject = { a: 1, b: 2 };
// let swappedObject = swapKeysAndValues(originalObject);

// console.log("Original Object:", originalObject);
// console.log("Swapped Object:", swappedObject);

// *********** 13.A function to multiplyNumbers that takes an array of numbers and multiplies all the numbers together

// function multiplyNumbers(array) {
//   let solution = 1;
//   for (let i = 0; i < array.length; i++) {
//     solution = array[i] * solution;
//   }
//   return solution;
// }
// let inputArray = [2, 3, 4, 5];
// console.log(multiplyNumbers(inputArray));

// ********a program that calculates the frequency of each character in a string and returns the result as an object.

// *********** 14.function that removes duplicate values from an array

// *********** 15.program that takes a string and capitalizes the first letter each word.

// function capitalizeFirstWord(sentence){
// let word = sentence.split(" ");
// for(let i =0;i<word.length;i++){
//   word[i] = word[i][0].toUpperCase() + word[i].slice(1);
// }
// return word.join(" ");
// }
// let sentence = "hello world its suma";
// console.log(capitalizeFirstWord(sentence));
