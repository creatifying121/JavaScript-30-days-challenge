// DAY 4: LOOPS

// ACTIVITY 1: FOR LOOP

// task1 => write a program to print numbers from 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("=============================================================");

// task2 => write a program to pring multiplication table of 5 using for loop
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + 5 * i);
}
console.log("=============================================================");

// ACTIVITY 2 : WHILE LOOP

// task3 => write a program to calculate sum of numbers from 1 to 10 using while loop
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

// task4 => write a program to print numbers from 10 to 1 using while loop
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// ACTIVITY 3 : DO...WHILE LOOP

// task5 => write a program to print numbers from 1 to 5 using do while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// task6 => write a program to calculate factorial of a number using do while loop
let num = 5;
let fact = 1;
if (num === 0 || num === 1) {
  console.log(fact);
}

do {
  fact *= num;
  num--;
} while (num >= 1);

console.log(fact);

// ACTIVITY 4 : NESTED LOOPS

// task7 => write a program to print a pattern using nested loops
// *
// * *
// * * *
// * * * *
// * * * * *
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// ACTIVITY 5 : LOOP CONTROL STATEMENTS

// task8 => write a program to print numbers from 1 to 10 but skip number 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

// task9 => write a program to print numbers from 1 to 10 but stop the loop when number is 7
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  } else {
    console.log(i);
  }
}
