// Variables

const drawingBoardUI = document.querySelector('#drawing');
const form = document.querySelector('#form');
const boardWidthUI = document.querySelector('#board-width');
const boardHeightUI = document.querySelector('#board-height');
let drawingBoardSizeX = boardWidthUI.value;
let drawingBoardSizeY = boardHeightUI.value;
let drawingBoardHeight;

// Function calls & event listeners

createDrawingBoard(drawingBoardUI, drawingBoardSizeX, drawingBoardSizeY);

drawingBoardUI.addEventListener('mouseover', draw);
form.addEventListener('submit', recreateDrawingBoard);

// Functions

function createDrawingBoard (board, sizeX, sizeY) {

  for (let i = 0; i < sizeX * sizeY; i++) {
    board.appendChild(document.createElement('div'));
  }

  for (let i = 0; i < sizeX * sizeY; i++) {
    board.children[i].classList.add('square');
  }

  drawingBoardHeight = 720 / sizeX * sizeY;

  board.setAttribute('style', `height: ${drawingBoardHeight}px; display: grid; grid-template-columns: repeat(${sizeX}, auto); grid-template-rows: repeat(${sizeY}, auto); gap: 1px;`);
}

function draw (e) {
  e.target.classList.remove('square');
}

function recreateDrawingBoard (e) {

  let newDrawingBoardSizeX = boardWidthUI.value;
  let newDrawingBoardSizeY = boardHeightUI.value;

  drawingBoardUI.innerHTML = ''; // Clearing the board

  createDrawingBoard(drawingBoardUI, newDrawingBoardSizeX, newDrawingBoardSizeY);

  e.preventDefault();
}