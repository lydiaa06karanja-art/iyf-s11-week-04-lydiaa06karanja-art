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
// Exercise 3: Default Parameters
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(calculateTip(1000));       // 150
console.log(calculateTip(1000, 20));   // 200
// CONTROL FLOW

// EXERCISE 1: IF/ELSE - Grade
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

// EXERCISE 2: SWITCH - Day Name
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

// EXERCISE 3: LOOPS
console.log("--- TASK 7.4 EXERCISE 3 ---");

// 1. Print numbers 1-100
console.log("1. Numbers 1-100:");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2. Print only even numbers 1-50
console.log("2. Even numbers 1-50:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 3. FizzBuzz
console.log("3. FizzBuzz 1-100:");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 4. Print a triangle of stars
console.log("4. Triangle of Stars:");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// TEST EXERCISE 1 & 2
console.log("--- TEST TASK 7.4 EX 1 & 2 ---");
console.log("Grade for 85:", getGrade(85));  // B
console.log("Day 3:", getDayName(3));        // Wednesday
