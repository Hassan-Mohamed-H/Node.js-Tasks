// Intro to JavaScript — Revision Practice
// ----------------------------------------------------
// Instructions:
// 1) Open this file in VS Code (or any editor).
// 2) Work through the tasks in order. Replace the TODOs with code.
// 3) Run the file using:  node intro-js-revision.js
// 4) You should see outputs in your terminal for each console.log.
//
// NOTE: Try to predict the output BEFORE running, then confirm.
// ----------------------------------------------------

'use strict';

// ---------- Shared Dataset (reuse across tasks) ----------
const student = {
  name: "Amina",
  age: 19,
  contact: {
    email: "amina@example.com",
    phones: ["+201100000000", "+201122233344"]
  },
  favorites: {
    colors: ["red", "green", "blue"],
    books: [
      { title: "Eloquent JavaScript", authors: ["Marijn Haverbeke"] },
      { title: "You Don't Know JS", authors: ["Kyle Simpson"] }
    ]
  }
};

const classroom = {
  courseName: "Intro to JavaScript",
  batches: [
    {
      id: "AUG",
      students: [
        { id: "s1", name: "Amina", scores: [10, 15, 20] },
        { id: "s2", name: "Omar", scores: [12, 18, 17] }
      ]
    },
    {
      id: "SEP",
      students: [
        { id: "s3", name: "Sara", scores: [20, 19, 18] }
      ]
    }
  ],
  materials: ["console", "strings", "arrays", "objects"]
};

// Helper for visual separation of outputs
function hr(title) {
  console.log("\n----- " + title + " -----");
}

// ========================================================
// A) Console basics
// ========================================================
hr("A) Console basics");

// 1) Log the course name from `classroom`.
console.log(`Course name: ${classroom.courseName}`);

// 3) Log the entire `student` object, then log only `student.contact`.
console.log("Student =>",student);
console.log("Student contact =>",student.contact);

// 4) How many phone numbers does Amina have? (use phones array length from student object)
console.log("\nNumber of phone numbers =>",student.contact.phones.length);

// 5) Log the third course material from classroom materials (use materials array from classroom object)
console.log("\nclassroom materials =>",classroom.materials);

// ========================================================
// B) Strings vs. numbers (the `+` operator)
// ========================================================
hr("B) Strings vs. numbers");

// 6) Predict the outputs, then log them:
console.log(2 + 3); // Result is sum of digits
console.log("2" + 3); // Result is a concatenate of digits
console.log(2 + "3"); // Result is a concatenate of digits
console.log("2" + "3"); // Result is a concatenate of digits
console.log(2 + 3 + "5"); // First it sum of digits and then it makes a concatenate 
console.log("5" + 2 + 3); // Result is a concatenate of digits

// 7) a="10", b=5. Log numeric sum (15) and string concatenation ("105").
const a = "10";
const b = 5;
console.log("Concatenation =>",a + b);
console.log("Sum =>",(+a) + b);

// ========================================================
// C) Arrays & objects (direct access)
// ========================================================
hr("C) Arrays & objects");

// 9) Log Amina’s first phone number.
console.log(`first phone number is: ${student.contact.phones[0]}`);

// 10) Log the LAST favorite color (no hardcoded index).
console.log(`Last favorite color is: ${student.favorites.colors[student.favorites.colors.length-true]}`);

// 11) Log the title of the second favorite book.
console.log(`Second favorite book is: ${student.favorites.books[student.favorites.books.length-true].title}`);

// 12) From classroom.batches[0], log the name of the second student.
console.log("the second student is:",classroom.batches[0].students[classroom.batches[0].students.length-true]);

// 13) Add "purple" to favorite colors, then log the updated array.
/* TODO: push to student.favorites.colors */
student.favorites.colors.splice(0,0,"purple")
console.log("Add purple to favorite colors:",student.favorites.colors);

// ========================================================
// D) Deeply nested access (no loops required)
// ========================================================
hr("D) Deeply nested access");

// 14) Log the first author of the first favorite book.
console.log(`Author to the the first favorite book is: ${student.favorites.books[0].authors}`);

// 15) Log the second score for Omar.
console.log(`the second score for Omar is: ${classroom.batches[0].students[1].scores[1]}`);

// ========================================================
// E) String methods practice
// ========================================================
hr("E) String methods");

const phrase = "  'JavaScript is Fun and Powerful!'  ";

// 19) Trim spaces from the phrase and log the result. (use phrase variable)
let phraseAfterTrim = phrase.trim()
console.log("phrase without spaces:",phraseAfterTrim);

// 20) Log the phrase in UPPERCASE, then in lowercase. (use phrase variable)
console.log("The phrase in UPPERCASE:",phraseAfterTrim.toUpperCase());
console.log("The phrase in lowercase:",phraseAfterTrim.toLowerCase());

// 22) Replace "Fun" with "Awesome" and log the new phrase. (use phrase variable)
let afterReplace = phraseAfterTrim.replace("Fun","Awesome")
console.log(afterReplace);


const csv = "Amina,19,amina@example.com";
/* TODO: split and log csv variable */
console.log("Convert to Array:",csv.split(","));

// ========================================================
// F) Small challenge (no loops; indexing only)
// ========================================================
hr("F) Small challenge (Bounes 50 points)");

// 26) For each student in AUG, log: "Name — last score: X — contains 'a'? true/false"
// Use only console logs and indexing (no loops yet).
let Name1 = classroom.batches[0].students[0].name
let Name2 = classroom.batches[0].students[1].name
let lastScore1 = classroom.batches[0].students[0].scores[classroom.batches[0].students[0].scores.length-1]
let lastScore2 = classroom.batches[0].students[1].scores[classroom.batches[0].students[1].scores.length-1]
let contain1 = Name1.includes("a")
let contain2 = Name2.includes("a")
console.log(`Name: ${Name1} — Last Score: ${lastScore1} — contains 'a': ${contain1}`);
console.log(`Name: ${Name2} — Last Score: ${lastScore2} — contains 'a': ${contain2}`);

// ----------------------------------------------------
// End of practice. Great job!
// ----------------------------------------------------
