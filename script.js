
// Task 1: Button Click Event
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  alert("Button clicked!");
});

// Task 2: Change Text on Click
const para = document.getElementById("para");
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  para.textContent = "Text has been changed!";
});

// Task 3: Background Color Change
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// Task 4: Input Event (Live Typing)
const input = document.getElementById("input");
const output = document.getElementById("output");
input.addEventListener("input", function () {
  output.textContent = input.value;
});

// Task 5: Mouse Events
const mouse = document.getElementById("mouse");
mouse.addEventListener("mouseover", function () {
  mouse.style.backgroundColor = "yellow";
});

// Task 6: Double Click Event
const btn3 = document.getElementById("btn3");
btn3.addEventListener("dblclick", function () {
  alert("Button double-clicked!");
});
