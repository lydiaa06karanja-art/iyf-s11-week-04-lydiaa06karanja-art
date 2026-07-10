let myName = "Regina Gathoni";
let myAge = 21;
let isStudent = true;
let favoriteColors = ["black", "purple", "burgundy"];
const today = new Date("2026-07-09");

console.log("My name is: " + myName);
console.log("My age is: " + myAge);
console.log("Am I a student? " + isStudent);
console.log("My favorite colors are: " + favoriteColors);
console.log("Today's date is: " + today.toDateString());
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1  <- remainder
console.log(a ** b); // 1000

let count = 0;
count++; // 1
count--; // 0
console.log(count);
let firstName = "Regina";
let lastName = "Gathoni";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Regina"));
let currentYear = 2026;
console.log("Age in days: " + (myAge * 365));
console.log("Age in hours: " + (myAge * 365 * 24));
console.log("Year I'll turn 100: " + (currentYear + (100 - myAge)))

// 1. Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Function expression
const add = function(a, b) {
    return a + b;
};

// 3. Arrow function - short
const multiply = (a, b) => a * b;

// 4. Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// TEST THEM
console.log(greet("Regina"));        // Hello, Regina!
console.log(add(5, 3));              // 8
console.log(multiply(4, 2));         // 8
console.log(divide(10, 2));          // 5
console.log(divide(10, 0));          // Cannot divide by zero

// ========== EXERCISE 2: BUILD 5 FUNCTIONS ==========

// 1. Calculate Area
function calculateArea(width, height) {
    return width * height;
}

// 2. Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// 3. Is Even - YOUR TURN TO TRY FIRST
// Hint: number % 2 === 0

// 4. Get Initials
// Hint: split the name, take first letter of each

// 5. Reverse String
// Hint: split('').reverse().join('')

// TEST THEM
console.log(calculateArea(5, 10));  // 50
console.log(celsiusToFahrenheit(25)); // 77
// 3. Is Even
const isEven = (number) => number % 2 === 0;

// 4. Get Initials
function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

// 5. Reverse String
const reverseString = (str) => str.split('').reverse().join('');

// UPDATE YOUR TESTS
console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(getInitials("Regina Gathoni")); // RG
console.log(reverseString("hello")); // olleh
