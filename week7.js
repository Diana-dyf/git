// ==========================================
// 1.2 JavaScript Recap - Variables
// ==========================================
// Define variables using let and constants using const
let studentName = "Diana";
const university = "Your University";
console.log("Student Name:", studentName); // Print information in the browser console

// ==========================================
// 1.3 JavaScript Recap - If / Else Conditions
// ==========================================
let score = 85;

if (score >= 50) {
    console.log("You passed the assessment!"); // If score >= 50, execute this
} else {
    console.log("You need to try again."); // Otherwise, execute this
}

// ==========================================
// 1.4 JavaScript Recap - Loops
// ==========================================
// This is a for loop that will print numbers from 1 to 5
console.log("Counting to 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

// ==========================================
// 1.5 Button Events - AddEventListener + Alerts
// ==========================================
// 1. Find the button in the HTML with id "myButton"
const myButton = document.getElementById("myButton");

// 2. Add a "click" listener to the button (AddEventListener)
myButton.addEventListener("click", function() {
    // 3. When the button is clicked, show an alert box (Alert)
    alert("Hello " + studentName + "! You clicked the button.");
});