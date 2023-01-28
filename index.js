"use strict";

let mouseIsDown = false;

const boardScreen = document.querySelector("#board-screen");
const clearButton = document.querySelector("#clear-button");

// Watch mouse button status
document.addEventListener("mousedown", () => {
  mouseIsDown = true;
});
document.addEventListener("mouseup", () => {
  mouseIsDown = false;
});

// Fill screen with 'pixels'
for (let count = 0; count < 48; count++) {
  const screenPixel = document.createElement("div");
  screenPixel.classList.add("screen-pixel");
  boardScreen.appendChild(screenPixel);
}

// Color change for initial mousedown
boardScreen.addEventListener("mousedown", (event) => {
  event.target.style.backgroundColor = "#000";
});

// Color change for subsequent mouse movement
boardScreen.addEventListener("mouseover", (event) => {
  if (mouseIsDown && event.target !== boardScreen)
    event.target.style.backgroundColor = "#000";
});

// Clear button
clearButton.addEventListener("click", () => {
  document.querySelectorAll(".screen-pixel").forEach((pixel) => {
    pixel.style.backgroundColor = "#fff";
  });
});
