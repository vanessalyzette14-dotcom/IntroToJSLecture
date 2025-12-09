// Begin Program

//  Variable Declaring Practice
// Strings - always need quotes, thats how you know its a string
const name = "Vanessa";
console.log("Name:", name);

let job = "Student";
console.log("Job:", job);

let hello = `Hello, World!`;
console.log(hello);
console.log("Name is a", typeof name);

// Numbers - no quotes needed for numbers
//  //  Int
let age = 13;
console.log("Age:", age);
console.log("Age is", typeof age);

//  //  Float
const PI = 3.1415;
console.log("I like", PI);
console.log("PI is", typeof PI);

// Booleans - declared with NO QUOTES, thats how you know its not a string
let truthy = true;
console.log("Truthy:", truthy);
console.log("Truthy is a", typeof truthy);

const falsey = false;
console.log("Falsey:", falsey);

// Null
let nothing = null;
console.log("Null:", nothing);
console.log("Null is a", typeof nothing);

// Undefined
let cantFind;
console.log("Undefined:", cantFind);
console.log("Undefined is", typeof cantFind);

//  Compairison Operators -----------------------------

// Addition +
console.log(13 + 23);

// Subtraction
console.log(13 - 23);

// Multiplication
console.log(13 * 23);

// Division
console.log(13 / 23);

//  Modulous MOD - remainder AFTER division
console.log(7 % 3);

// Exponents
console.log(2 ** 3);

console.log("Artimetic Shorthand -------------------------");
let num1 = 12;
// num1 = num1 + 1
num1 += 1; // Same as above but shorter
console.log(num1);

// num1 = num1 - 1
num1 -= 1; // Same as above
console.log(num1);

// num1 = num1 * 3
num1 *= 3;
console.log(num1);

// num1 = num1 / 3
num1 /= 3;
console.log(num1);

console.log("Inc/Dec Short hand -----------------");
age++;
console.log(age);
age--;
console.log(age);

console.log("Order Matters ex ------------------");
let newNumber = 9;
let currentNumber = newNumber++;
console.log("NewNum", newNumber);
console.log("CurrentNum", currentNumber);

let newNumber1 = 9;
let currentNumber1 = ++newNumber1;
console.log("NewNum", newNumber1);
console.log("CurrentNum", currentNumber1);

console.log("Compairison Operators --------------------");

// Greater than
console.log(12 > 23);

// Less than
console.log(12 < 23);

// GTE
console.log(23 >= 23);

// LTE
console.log(23 <= 21);

// Loose Compairison - just check value, will typecast
console.log("Loose Comparison", 2 == "2");
console.log("hello" === "Hello");

//  Strict Compairison - check both datatype and value
console.log("strict", 2 === "2");

// NOT compairison
console.log(2 != 1);

console.log("Logical Operators ------------------------------");

num1 = 13;
let num2 = 23;

// AND operator && - all statement must be true to return true.
console.log(num1 < num2 && num1 === 13);

// OR operator || - only ONE needs to be true to return true, but all have to be false to return false
console.log(num1 > num2 || num1 == 14);

// NOT/Opposite operator !
console.log(!(num1 > num2));

console.log((13 > 12 && 14 < 22 && 16 > 3) || 6 > 7);