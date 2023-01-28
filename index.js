"use strict";

let mouseIsDown = false;

const boardScreen = document.querySelector("#board-screen");
const clearButton = document.querySelector("#clear-button");
const sizeRadioButtons = document.querySelectorAll(".radio-size-button");
const toggleGridButton = document.querySelector("#grid-button");

// Watch mouse button status
document.addEventListener("mousedown", () => {
  mouseIsDown = true;
});
document.addEventListener("mouseup", () => {
  mouseIsDown = false;
});

// Fill screen with 'pixels'
const fillScreen = (size) => {
  boardScreen.style.gridTemplateColumns = `repeat(${size * 4}, auto)`;
  const totalPixels = 12 * Math.pow(size, 2);
  for (let count = 0; count < totalPixels; count++) {
    const screenPixel = document.createElement("div");
    screenPixel.classList.add("screen-pixel");
    if (count % (size * 4) === 0)
      screenPixel.classList.add("screen-pixel_first-column");
    if (count < size * 4) screenPixel.classList.add("screen-pixel_first-row");
    boardScreen.appendChild(screenPixel);
  }
};

// Color change for initial mousedown
boardScreen.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("screen-pixel"))
    event.target.style.backgroundColor = "#808080";
});

// Color change for subsequent mouse movement
boardScreen.addEventListener("mouseover", (event) => {
  if (mouseIsDown && event.target.classList.contains("screen-pixel"))
    event.target.style.backgroundColor = "#808080";
});

// Clear button
clearButton.addEventListener("click", () => {
  document.querySelectorAll(".screen-pixel").forEach((pixel) => {
    pixel.style.backgroundColor = "transparent";
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

// Change screen resolution
sizeRadioButtons.forEach((button) =>
  button.addEventListener("change", (event) => {
    while (boardScreen.firstChild) {
      boardScreen.removeChild(boardScreen.lastChild);
    }
    fillScreen(event.target.dataset.size);
  })
);

fillScreen(10);
