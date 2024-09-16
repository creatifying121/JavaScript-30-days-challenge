// DAY 7 : OBJECTS

// ACTIVITY 1 : OBJECTS CREATION AND ACCESS

// task1 => create an object representing a book with properties like title, author, and year, and log the object to the console
const book = {
  title: "Dopamine Detox",
  author: "Thibaut Meurisse",
  year: "2021",
};
console.log(book);

// task2 => Access and log the title and author of the book
console.log(book.title + "'s author is " + book.author);

// ACTIVITY 2 : OBJECT METHODS

// task3 => add a method to the book object that returns a string with the book's title and author, and log the result of calling this method
book.details = function () {
  return `Book Name: ${this.title}, Author: ${this.author}`;
};
console.log(book.details());
// console.log(book);

// task4 => add the method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object
book.updateYear = function (newYear) {
  this.year = newYear;
};
book.updateYear("2024");
console.log(book);

// ACTIVITY 3 : NESTED OBJECTS

// task5 => create a nested object representing a library with properties like name and books (an array of book objects), and log the library to the console.
