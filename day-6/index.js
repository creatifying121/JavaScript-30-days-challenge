// DAY 6 : ARRAYS

// ACTIVITY 1 : ARRAY CREATION AND ACCESS

// task1 => Create an array of numbers from 1 to 5 and log it on console
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const arr2 = new Array(1, 2, 6, 8, 8, 9);
console.log(arr2);

// task2 => access the first and last element of the array and log it to console
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// ACTIVITY 2 : ARRAY METHODS (BASIC)

// task3 => use push method to add a new element at the end of array and log the result
arr.push(6);
console.log(arr);

// task4 => using the pop method remove the last element from array and log the result
arr2.pop();
console.log(arr2);

// task5 => use shift method to remove the first element from the array and log the result
arr.shift();
console.log(arr);

// task6 => using unshift method, add an element in the start of the array and log the result
arr.unshift("hello ji");
console.log(arr);

// ACTIVITY 3 : ARRAY METHODS (INTERMEDIATE)

// task7 => create a new array using map method where each element is doubled and log the new array
const arr3 = [3, 7, 1, 8, 9, 2];
const resArr3 = arr3.map((arr) => arr * 2);
console.log(resArr3);

// task8 => use the filter method to create a new array with only even numbers and log the new array
const arr4 = [1, 5, 6, 2, 7, 3, 10, 12, 15, 18];
const resArr4 = arr4.filter((arr) => arr % 2 == 0);
console.log(resArr4);

// task9 => use the reduce method to calculate the sum of all numbers of the array and log the result
const arr5 = [24, 1, 5, 2, 6, 23, 6, 2, 76];
const sum = arr5.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);

// ACTIVITY 4: ARRAY ITERATION

// task10 => use for loop to iterate over the array and print each element on the console
const arrPrint = [23, 1, true, "hello", null, undefined, -12, 234.1];
for (let i = 0; i < arrPrint.length; i++) {
  console.log(arrPrint[i]);
}

console.log("==========================================================");

// task11 => use forEach method to iterate over array and print each element on the console
arr5.forEach((num) => {
  console.log(num);
});
console.log("==========================================================");

// ACTIVITY 5 : MULTI-DIMENSIONAL ARRAY

// task12 => create a 2-d array and print all elements on console
const arr2d = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.table(arr2d);

// task13 => access and log a specific element from 2d array
console.log(arr2d[1][2]);
