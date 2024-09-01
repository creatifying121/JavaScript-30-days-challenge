// ACTIVITY 1 : VARIALBE DECLARATION

// task 1 => Declare a variable using var , assign it a number and log the value to console
var firstVariable = 21;
console.log(firstVariable);

// task 2 => Declare a variable using let , assign it a string and log the value to console
let stringVariable = "shivani";
console.log(stringVariable);

// ACTIVITY 2 : CONSTANT DECLARATION

// task 3 => Declare a variable using const, assign it a boolean value and log it to console
const booleanVariable = true;
console.log(booleanVariable);

// ACTIVITY 3 : DATA TYPES

// task 4 => create variables of different data types (number, string, boolean, object, array) and log each variable's type using typeof operator
let num = 21;
let str = "shivani";
let bool = true;
let obj = {
  id: 1234,
  empName: "Purva",
  empDesignation: "Backend Developer",
};
let arr = ["hey", 1, "hello"];

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof arr);

// ACTIVITY 4 : REASSIGNING VARIABLES

// task 5 => Define a variable using let, assign it an initial value, reassign a new value and log both of those on console
let reassign = "shivani";
console.log(reassign);

reassign = "raichandani";
console.log(reassign);

// ACTIVITY 5 : UNDERSTANDING CONST

// task 6 => Try reassigning a variable declared with const and observe the error
const reas = 21;
console.log(reas);

// reas = 03;
console.log(reas); // TypeError: Assignment to a constant variable
