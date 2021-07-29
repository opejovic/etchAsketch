const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const clearButton = document.querySelector('.clear');

let x = Math.floor(Math.random() * canvas.width);
let y = Math.floor(Math.random() * canvas.height);

const LINE_WIDTH = 10;
let MOVE_AMOUNT = 10;

ctx.lineWidth = LINE_WIDTH;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw(key) {
  ctx.moveTo(x, y);
  ctx.beginPath();

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;

    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKeydown(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    let key = event.key;
    draw(key);
  }

  if (event.key === 'Shift') {
    MOVE_AMOUNT = 30;
  }
}

function handleKeyup(event) {
  if (event.key === 'Shift') {
    MOVE_AMOUNT = 10;
  }
}

function clearCanvas(event) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('keydown', handleKeydown);
window.addEventListener('keyup', handleKeyup);
clearButton.addEventListener('click', clearCanvas);