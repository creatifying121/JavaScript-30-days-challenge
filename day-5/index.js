// ACTIVITY 1 : FUNCTION DECLARATION

// task1 => write a function to check if the number is even or odd and log result to console
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrOdd(2);
evenOrOdd(3);

// task2 => write function to caculate square of a number and return the result
function square(num) {
  return num * num;
}
console.log(square(12));

// ACTIVITY 2 : FUNCTION EXPRESSION

// task3 => write a function expression to find maximum of two numbers and log the result to the console
const maximumOfTwo = function (num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is maximum");
  } else if (num2 > num1) {
    console.log(num2 + " is maximum");
  } else {
    console.log("both are equal");
  }
};
maximumOfTwo(3, 5);
maximumOfTwo(13, 5);
maximumOfTwo(5, 5);

// task4 => write a function expression to concatenate two strings and return the result
const concatenate = function (str1, str2) {
  return str1 + str2;
};
console.log(concatenate("shivani ", "raichandani"));

// ACTIVITY 3 : ARROW FUNCTIONS

// task5 => write an arrow function to calculate sum of two numbers and return the result
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(5, 8));

// task6 => write an arrow function to check if string contains a particular character and return a boolean value
const charCheck = (str) => {
  if (str.includes("o")) {
    return true;
  } else {
    return false;
  }
};
console.log(charCheck("shivani"));

// ACTIVITY 4 : FUNCTION PARAMETERS AND DEFAULT VALUES

// task7 => write a function that takes two parameters and returns product of those, provide a default value for second parameter
function product(num1, num2 = 5) {
  return num1 * num2;
}
console.log(product(5));
console.log(product(5, 6));

// task8 => write a function that takes two parameters name and age, and returns a greeting message. provide default value to age
function greeting(name, age = 23) {
  return `Hello ${name}, ${age}. Thanks for visiting`;
}
console.log(greeting("shivani"));

// ACTIVITY 5 : HIGHER ORDER FUNCTIONS

// task9 => write a higher order function that takes a function and a number and calls that function those number of times
function HOF(fun, times) {
  for (let i = 0; i < times; i++) {
    console.log(fun());
  }
}

const fun = () => console.log("hey there");

HOF(fun, 5);

// task10 => write a higher order function that takes two functions and a value, applies the first function to the value, and then applies second function to the result
function HOF2(fun1, fun2, val) {
  const resFrom1 = fun1(val);

  return fun2(resFrom1);
}

function fun1(num) {
  return num * 2;
}

function fun2(num) {
  return num * num;
}

console.log(HOF2(fun1, fun2, 5));
