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
//  CALCULATOR 

// 1. Functions for add, subtract, multiply, divide
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    // 3. Handle division by zero
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// Extra functions for % and **
function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

// 2. A main calculate(num1, operator, num2) function
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":  // 4. modulus
            return modulus(num1, num2);
        case "**": // 4. power
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

// TEST THE CALCULATOR
console.log("--- MINI-PROJECT: CALCULATOR TESTS ---");
console.log("10 + 5 =", calculate(10, "+", 5));   // 15
console.log("10 - 5 =", calculate(10, "-", 5));   // 5
console.log("10 * 5 =", calculate(10, "*", 5));   // 50
console.log("10 / 5 =", calculate(10, "/", 5));   // 2
console.log("10 / 0 =", calculate(10, "/", 0));   // Error message
console.log("10 % 3 =", calculate(10, "%", 3));   // 1
console.log("2 ** 4 =", calculate(2, "**", 4));   // 16
console.log("10 $ 5 =", calculate(10, "$", 5));   // Invalid operator

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
const numbers = [1, 2, 3, 4, 5, -2, 15];

// 1. Double all numbers
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10, -4, 30]

// 2. Filter out negative numbers  
const positives = numbers.filter(num => num >= 0);
console.log(positives); // [1, 2, 3, 4, 5, 15]

// 3. Find first number greater than 10
const firstBig = numbers.find(num => num > 10);
console.log(firstBig); // 15

// 4. Calculate product of all numbers
const product = numbers.reduce((total, num) => total * num, 1);
console.log(product); // -4500
// ===== EXERCISE 1: OBJECT BASICS =====
const person = {
  firstName: "Regina",
  lastName: "Gathoni",
  age: 21,
  isStudent: true,
  hobbies: ["reading", "coding", "music"],
  address: {
    city: "Nairobi",
    country: "Kenya"
  }
};

// Accessing
console.log(person.firstName);       // Regina
console.log(person["lastName"]);     // Gathoni
console.log(person.address.city);    // Nairobi

// Modifying
person.age = 21;                   
person.email = "lydiaa06karanja-art@gmail.com";  
person.username = "lydiaa06karanja-art";         
delete person.isStudent;            

console.log(person); // check final object


// ===== EXERCISE 2: OBJECT METHODS =====
const calculator = {
  add: function(a, b) { 
    return a + b; 
  },
  subtract(a, b) {       
    return a - b;
  },
  multiply: (a, b) => a * b  
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(2, 5));  // 10


// ===== EXERCISE 3: OBJECT ITERATION =====
const scores = {
  math: 95,
  english: 88,
  science: 92
};

// Get keys
console.log(Object.keys(scores));    // ["math", "english", "science"]

// Get values
console.log(Object.values(scores));  // [95, 88, 92]

// Get entries
console.log(Object.entries(scores)); // [["math",95],["english",88],["science",92]]

// Loop through
for (const [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`)
}
//  ARRAY OF OBJECTS 
const students = [
  { name: "Alice", age: 22, grade: 85, major: "CS" },
  { name: "Bob", age: 20, grade: 72, major: "Math" },
  { name: "Charlie", age: 23, grade: 78, major: "CS" },
  { name: "Diana", age: 21, grade: 88, major: "Physics" },
  { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log(names); // ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers); // Alice, Diana, Eve

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log(charlie); // {name: "Charlie", age: 23, grade: 78, major: "CS"}

// 4. Calculate average grade
const total = students.reduce((sum, student) => sum + student.grade, 0);
const avgGrade = total / students.length;
console.log(avgGrade); // 83.6

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors); // Alice, Charlie, Eve

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade); // Eve 95, Diana 88, Alice 85...

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent); // true

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing); // true
// GRADE TRACKER 
const gradeTracker = {
  students: {},

  // Add student with their grades object
  addStudent(name, grades) {
    this.students[name] = grades;
  },

  // Get student average
  getStudentAverage(name) {
    const grades = Object.values(this.students[name]);
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
  },

  // Get class average for a subject
  getSubjectAverage(subject) {
    const grades = Object.values(this.students).map(student => student[subject]);
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
  },

  // Get top performer
  getTopStudent() {
    let topName = "";
    let topAvg = 0;
    for (const name in this.students) {
      const avg = this.getStudentAverage(name);
      if (avg > topAvg) {
        topAvg = avg;
        topName = name;
      }
    }
    return topName;
  },

  // Get students needing help (average < 70)
  getStrugglingStudents() {
    const struggling = [];
    for (const name in this.students) {
      if (this.getStudentAverage(name) < 70) {
        struggling.push(name);
      }
    }
    return struggling;
  },

  // Get letter grade
  getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  },

  // Generate report card
  generateReportCard(name) {
    const grades = this.students[name];
    const avg = this.getStudentAverage(name);
    let report = `--- Report Card: ${name} ---\n`;
    
    for (const subject in grades) {
      const grade = grades[subject];
      report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
    }
    
    report += `Average: ${avg.toFixed(2)} (${this.getLetterGrade(avg)})\n`;
    report += `-----------------------------`;
    return report;
  }
};

// ===== TEST YOUR IMPLEMENTATION =====
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 90 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice")); // 91
console.log(gradeTracker.getSubjectAverage("math")); // 75.67
console.log(gradeTracker.getTopStudent()); // Alice
console.log(gradeTracker.getStrugglingStudents()); // ["Charlie"]
console.log(gradeTracker.generateReportCard("Alice"));
