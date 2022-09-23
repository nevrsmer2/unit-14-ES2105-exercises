Andres Sanchez
USF Programming Bootcamp
September 23, 2022
Destructuring Exercise


Problem 1: Object Destructuring 1
What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};

let {numPlanets, yearNeptuneDiscovered} = facts;

Problem 1 Answer:

console.log(numPlanets); 
Returns: 8

console.log(yearNeptuneDiscovered);
Returns: 1846



Problem 2: Object Destructuring 2
What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;


Problem 2 Solution:

console.log(discoveryYears); // ?

Returns:
 { yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};



Problem 3: Object Destructuring 3
What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

A. getUserData({firstName: "Alejandro", favoriteColor: "purple"})

B. getUserData({firstName: "Melissa"})

C. getUserData({}) 


Problem 3 Solution:

A. getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?

	Returns: Your name is Alejandro and you like purple


B. getUserData({firstName: "Melissa"}) // ?

	Returns: Your name is Melissa and you like green


C. getUserData({}) // ?

	Returns: Your name is undefined and you like green



Problem 4: Array Destructuring 1
What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

A. console.log(first); // ?
B. console.log(second); // ?
C. console.log(third); // ?


Problem 4 Solution:

A. console.log(first); // ?
Returns: Maya

B. console.log(second); // ?
Returns: Marisa

C. console.log(third); // ?
Returns: Chi





Problem 5: Array Destructuring 2
What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

A. console.log(raindrops); // ?
B. console.log(whiskers); // ?
C. console.log(aFewOfMyFavoriteThings); // ?


Problem 5 Solution:
A. console.log(raindrops); 
Returns: Raindrops on roses

B. console.log(whiskers); 
Returns: whiskers on kittens

C. console.log(aFewOfMyFavoriteThings); 
Returns: [
 "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]




Problem 6: Array Destructuring 3
What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]


[10, 20, 30];

[10, 30, 30];

[10, 30, 20];

console.log(numbers) 


Problem 6 Solution:

console.log(numbers) // ?
Returns: [10, 30, 20];


ES2015 Refactoring
In this exercise, you’ll refactor some ES5 code into ES2015.

Problem 7: ES5 Assigning Variables to Object Properties

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;



Problem 7 Solution:


const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const {
  numbers: { a, b },
} = obj;

Or
 
const {a,b} = obj.numbers




ES2015 Object Destructuring

/* Write an ES2015 Version */

Problem 8:ES5 Array Swap

var arr = [1, 2];
var temp = arr[0];

arr[0] = arr[1];
arr[1] = temp;


Problem 8 Solution:

[arr[0], arr[1]] = [arr[1], arr[0]]



ES2015 One-Line Array Swap with Destructuring
/* Write an ES2015 Version */


Problem 9: raceResults()
Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.
•	first: the first element in the array
•	second: the second element in the array
•	third: the third element in the array
•	rest: all other elements in the array


Problem 10: Write a one-line function to make this work using
•	An arrow function
•	Destructuring
•	‘Enhanced’ object assignment (same key/value shortcut)

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/


Problem 10 Solution:

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});


raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

Returns:

{first: 'Tom', second: 'Margaret', third: 'Allison', rest: Array(2)}

