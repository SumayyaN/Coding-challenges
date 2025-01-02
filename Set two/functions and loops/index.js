//  1.the greet function

// function greet(name) {
//   console.log(`Hello ${name} !`);
// }
// let personName = prompt("enter your name");
// greet(personName);

// 2.The add function

// function add(number1, number2) {
//   let sum = number1 + number2;
//   return sum;
// }
// console.log(add(4, 15));

//3. isEven function

// function isEven(number) {
//   if (number % 2 === 0) {
//     console.log(`Number ${number} is even`);
//   } else if (!(number % 2 === 0)) {
//     console.log(`Number ${number} is not even`);
//   } else {
//     console.log("Not a number");
//   }
// }
// let number = prompt("Enter a number");
// isEven(number);

//4.for loop to print numbers from 1 to 10

// for(let i = 1;i<=10;i++){
//   console.log(i);
// }

//5. while loop to print the first 5 multiples of 3

// let count = 1;

// while (count <= 5) {
//   console.log(count * 3);
//   count++;
// }

//6.for loop to calculate the factorial of a number n

let number = 3;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial = factorial * i;
}
console.log(factorial);
