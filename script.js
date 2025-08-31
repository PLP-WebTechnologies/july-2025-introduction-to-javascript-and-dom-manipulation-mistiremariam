/* --------------------------------
Part 1: Mastering JavaScript Basics
-------------------------------- */
// Check if a number is positive, negative, or zero
const checkNumberBtn = document.getElementById('checkNumberBtn');
checkNumberBtn.addEventListener('click', () => {
  const num = Number(document.getElementById('userNumber').value);
  let result;
  if (num > 0) {
    result = "Positive number";
  } else if (num < 0) {
    result = "Negative number";
  } else {
    result = "Zero";
  }
  document.getElementById('numberResult').textContent = result;
});

/* --------------------------------
Part 2: Functions
-------------------------------- */
// Function 1: Greeting
function greet(name) {
  return `Hello, ${name}! Welcome to JS mastery.`;
}
document.getElementById('greetBtn').addEventListener('click', () => {
  const greeting = greet('Mistiremariam');
  document.getElementById('greetResult').textContent = greeting;
});

// Function 2: Sum two numbers
function sum(a, b) {
  return a + b;
}
document.getElementById('sumBtn').addEventListener('click', () => {
  const total = sum(3, 7);
  document.getElementById('sumResult').textContent = `Sum: ${total}`;
});

/* --------------------------------
Part 3: Loops
-------------------------------- */
const loopList = document.getElementById('loopList');
for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i} from for loop`;
  loopList.appendChild(li);
}

let count = 1;
while (count <= 3) {
  const li = document.createElement('li');
  li.textContent = `Item ${count} from while loop`;
  loopList.appendChild(li);
  count++;
}

/* --------------------------------
Part 4: DOM Manipulation
-------------------------------- */
// Toggle highlight class
const toggleBtn = document.getElementById('toggleBtn');
const toggleDiv = document.getElementById('toggleDiv');
toggleBtn.addEventListener('click', () => {
  toggleDiv.classList.toggle('highlight');
});

// Create new list items dynamically
const createBtn = document.getElementById('createBtn');
const dynamicList = document.getElementById('dynamicList');
let itemCount = 1;
createBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `Dynamic Item ${itemCount}`;
  dynamicList.appendChild(li);
  itemCount++;
});
