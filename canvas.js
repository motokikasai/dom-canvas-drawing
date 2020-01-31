const canvas = document.querySelector("#draw");
// console.log(canvas);
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#bada55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = "50";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when not moused down!
  //   console.log(e);
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //   context.lineWidth = hue;

  context.beginPath();
  //   start from
  context.moveTo(lastX, lastY);
  //   go to
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  //   lastX = e.offsetX;
  //   lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

// Mouse-down action
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
