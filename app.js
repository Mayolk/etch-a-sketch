const drawingBoard = document.querySelector('#drawing');
let drawingBoardSizeX = 40;
let drawingBoardSizeY = 5;
let drawingBoardSize = drawingBoardSizeX * drawingBoardSizeY;

createDrawingBoard();

function createDrawingBoard () {

for (i = 0; i < drawingBoardSize; i++) {
  drawingBoard.appendChild(document.createElement('div'));
}

for (j = 0; j < drawingBoardSize; j++) {
  drawingBoard.children[j].classList.add('square');
}

// need to calculate height or width or aspect ratio

let drawingBoardHeight = 720 / drawingBoardSizeX * drawingBoardSizeY;

drawingBoard.setAttribute('style', `height: ${drawingBoardHeight}px; display: grid; grid-template-columns: repeat(${drawingBoardSizeX}, auto); grid-template-rows: repeat(${drawingBoardSizeY}, auto); gap: 1px;`);
}