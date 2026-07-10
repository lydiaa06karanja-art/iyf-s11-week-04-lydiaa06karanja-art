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
console.log("Year I'll turn 100: " + (currentYear + (100 - myAge)));
