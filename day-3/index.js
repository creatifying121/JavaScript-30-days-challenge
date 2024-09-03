// CONTROL STRUCTURES

// ACTIVITY 1 => IF ELSE

// task 1 => write a program to check if a number is positive negative or zero, and log the result to the console
let num = 3;

if (num > 0) {
  console.log("positive");
}
if (num === 0) {
  console.log("zero");
}
if (num < 0) {
  console.log("negative");
}

// task 2 => write a program to check if a person is eligible to vote and log the result
let age = 17;

if (age >= 18) {
  console.log("eligible");
} else {
  console.log("not eligible");
}

// ACTIVTY 2 => NESTED IF ELSE

// task 3 => write a program to find largest of three numbers using nested if else
let num1 = 5;
let num2 = 9;
let num3 = -12;

// approach 1
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is largest");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is largest");
} else {
  console.log(num3 + " is largest");
}

// approach 2
if (num1 >= num2) {
  if (num1 >= num3) {
    console.log(num1 + " is largest");
  } else {
    console.log(num3 + " is largest");
  }
} else {
  if (num2 >= num3) {
    console.log(num2 + " is largest");
  } else {
    console.log(num3 + " is largest");
  }
}

// ACTIVITY 3 => SWITCH CASE STATEMENT

// task 4 => write a program to determine the day of week between number 1-7 and log day name to console
let dayNum = 5;

switch (dayNum) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("wrong choice");

    break;
}

// task 5 => write a program to assign a grade ('A', 'B', 'C', 'D', 'E', 'F') on the basis of score and print the result on console
let score = 66;

if (score > 100 || score < 0) {
  console.log("enter correct score");
}

switch (Math.floor(score / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;

  case 8:
  case 7:
    console.log("B");
    break;

  case 6:
    console.log("C");
    break;

  case 5:
    console.log("D");
    break;

  case 4:
    console.log("E");
    break;

  case 3:
  case 2:
  case 1:
    console.log("F");
    break;

  default:
    console.log("invalid score");
    break;
}

// ACTIVITY 4: CONDITIONAL (TERNARY) OPERATOR

// task 6 => use a ternary operator to check wheter the number is even or odd and log result to console
let checkNum = 5;

console.log(checkNum % 2 == 0 ? "even" : "odd");

// ACTIVITY 5: COMBINING CONDITIONS

// task 7 => write a program to check if a year is leap year or not using multiple conditions (divisible by 4 but not 100)
let year = 2016;

if (year % 4 === 0 && year % 100 !== 0) {
  console.log("leap");
} else {
  console.log("regular year");
}
