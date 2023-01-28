"use strict";

let mouseIsDown = false;

const boardScreen = document.querySelector("#board-screen");
const clearButton = document.querySelector("#clear-button");
const toggleGridButton = document.querySelector("#grid-button");

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
  if (count % 8 === 0) screenPixel.classList.add("screen-pixel_first-column");
  if (count < 8) screenPixel.classList.add("screen-pixel_first-row");
  boardScreen.appendChild(screenPixel);
}

// Color change for initial mousedown
boardScreen.addEventListener("mousedown", (event) => {
  event.target.style.backgroundColor = "#808080";
});

// Color change for subsequent mouse movement
boardScreen.addEventListener("mouseover", (event) => {
  if (mouseIsDown && event.target !== boardScreen)
    event.target.style.backgroundColor = "#808080";
});

// Clear button
clearButton.addEventListener("click", () => {
  document.querySelectorAll(".screen-pixel").forEach((pixel) => {
    pixel.style.backgroundColor = "#f0f0f0";
  });
});

// Toggle grid
toggleGridButton.addEventListener("click", () => {
  if (boardScreen.classList.contains("board-screen_grid")) {
    boardScreen.classList.remove("board-screen_grid");
  } else {
    boardScreen.classList.add("board-screen_grid");
  }
});
