Andres Sanchez
USF Programming Bootcamp
September 21, 2022

Rest / Spread Operator Exercises

Section 1

In this exercise, you’ll refactor some ES5 code into ES2015.



Problem 1: Given this function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
Refactor the function filterOutOdds to use the rest operator & an arrow function:
/* Write an ES2015 Version */

Answer 1

const evens = (...nums) => nums.filter((num) => num % 2 === 0);



Problem 2: findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.  Make sure to do this using the rest and spread operator.


Answers Problem 2

const minValue = (...nums) =>
  nums.reduce((acc, current) => (acc < current ? acc : current));

or 

const findMin = (...args) => Math.min(...args)

Returns:
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1



Problem 3: mergeObjects

Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

Problem 3 Answers:

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

or

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

Returns:
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}



Problem 4: doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.


const doubleAndReturnArg = (arr, ...nums) => {
  const result = nums.map(function (i) {
    return i * 2;
  });

  const newArr = [...arr, ...result];
  return newArr;
};


or

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]


Returns:
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]


Section 2:  Slice and Dice!


For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.



Problem 1: /** remove a random element in the items array
and return a new array without that item. */

Problem 1 Anser: 

const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}



Problem 2: /** Return a new array with every item in array1 and array2. */


Problem 2 Answer:

const extend = (arr1, arr2) => {
  return [...arr1, ...arr2];
};



Problem 3: /** Return a new object with all the keys and values
from obj and a new key/value pair */


Problem 3 Answer: 

const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
}

addKeyVal({ make: "VW", model: "GTI", color: "grey" }, "price", 500);
Returns: {make: 'VW', model: 'GTI', color: 'grey', price: 500}

or 

let newObj = { ...obj }
  newObj[key] = val;
  return newObj;



Problem 4: /** Return a new object with a key removed. */

Problem 4 Answer:

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};



Problem 5: /** Combine two objects and return a new object. */


Problem 5 Answer:

***This is the same problen as Problem 3

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}



Problem 6: /** Return a new object with a modified key and value. */


Problem 6 Answer: 

const updateProperty = (obj, key, val) => {
  return { ...obj, [key]: val };
};

// updateProperty({ make: "VW", model: "GTI", color: "grey" }, "color", "red");
Returns: {make: 'VW', model: 'GTI', color: 'red'}