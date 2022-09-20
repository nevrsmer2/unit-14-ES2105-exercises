// Andres Sanchez
// USF Programming Bootcamp
// September 20, 2022
// Arrow Functions Exercise


// Arrow Functions Exercise
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Map Callback

function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

// ES2015 Arrow Functions Shorthand
// Refactor the above code to use two arrow functions. Turn it into a one-liner.

Answer: ES2015 Map Callback

const double = (arr) => arr.map((val) => val * 2);

double([1, 2, 3]);
Returns: (3)[(2, 4, 6)];



/* Write an ES2015 Version */
// Refactor the following function to use arrow functions:
// Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}


Answer - ES2015 Version

const squareAndFindEvens = (numbers) => numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);

squareAndFindEvens([1, 2, 3, 4]) 
Returns: (2) [4, 16]


