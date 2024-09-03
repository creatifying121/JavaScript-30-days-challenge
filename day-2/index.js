// ACTIVITY 1 => ARITHEMATIC OPERATIONS

// task 1 => write a program to add two numbers and log the result
const num1 = 2;
const num2 = 3;

const sum = num1 + num2;

console.log(sum);

// task 2 => write a program to subtract two numbers and log the result
const a = 5;
const b = 3;

const diff = a - b;

console.log(diff);

// task 3 => write a program to multiply two numbers and log the result
const c = 5;
const d = 3;

const prod = a * b;

console.log(prod);

// task 4 => write a program to divide two numbers and log the result
const p = 6;
const q = 3;

const div = a / b;

console.log(div);

// task 5 => write a program to subtract two numbers and log the result
const r = 5;
const s = 3;

const rem = a % b;

console.log(rem);

// ACTIVITY 2 => ASSIGNMENT OPERATORS

// task 6 => use operator += to add a number to a variable and log the result
let addEq = 10;

console.log((addEq += 5));

// task 7 => use operator -= to add a number to a variable and log the result
let subEq = 10;

console.log((subEq -= 5));

// ACTIVITY 3 => COMPARISON OPERATORS

// task 8 => Write a program to compare two numbers using > and < , and print result to the console
let one = 5;
let two = 8;

console.log(one > two);
console.log(one < two);

// task 9 => Write a program to compare two numbers using >= and <= , and print result to the console
console.log(one <= two);
console.log(one >= two);

// task 10 => Write a program to compare two numbers using == and === , and print result to the console
let first = 2;
let second = "2";

console.log(first == second);
console.log(first === second);

// ACTIVITY 4 => LOGICAL OPERATORS

// task 11 => write a program that uses && to combine two conditions, and log the result to console
let age = 19;
let gender = "f";

if (age >= 18 && gender === "f") {
  console.log("girl can marry");
}

// task 12 => write a program that uses || to combine two conditions, and log the result to console
if (age || gender) {
  console.log("anyone can learn anything");
}

// task 13 => write a program that uses ! to negate a condition, and log the result to console
let flag = false;

if (!flag) {
  console.log("program cannot proceed further");
}

// ACTIVITY 5 => TERNARY OPERATOR

// task 14 => write a program using ternary operator to check if a number is positive or negative

let numm = -5;

console.log(numm < 0 ? "negative" : "positive");
