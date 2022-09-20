// let and const Exercise
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global Constants
/* Write an ES2015 Version */

const pi = 3.15;

// Quiz
// Question 1: What is the difference between var and let?

// Answer: var is function scope, and let is block scope.  Var can be re-declared, and let cannot be re-declared.  Both can have their value value re-assigned.  Both var and let can have the array or object assigned to them mutated.  Var is also hoisted, whereas let is not.

//Question 2: What is the difference between var and const?
// The only similiarity between var and const is that the array or object that is assigned to either one can be mutated.   Var ca be re-declared, not cost.  Var is function scope, and const is block scope.Var is also hoisted, whereas const is not.

// Question 3: What is the difference between let and const?
// The only difference between let and cost is that let can have a new value assigned, and const cannot.  Otherwise, they hace the same functionality.

//Question 4: What is hoisting?
// Hoisting has to to with the keyword var.  When JS starts to read the code on a page, it will read the var declaration first, and later it will read the value that is assigned to it when it's called.  It's as if the var declaration is "hoised" to the top of the page.
