let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth;

// ctx.fillStyle = "yellow";
// ctx.fillRect(10, 10, 500, 100);

ctx.strokeStyle = "black";

// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(500,10);
// ctx.stroke();

let isMouseDown = false;

canvas.addEventListener("mousedown", function (e) {
  isMouseDown = true;
  let x = e.clientX;
  let y = e.clientY - 100;
  ctx.beginPath();
  ctx.moveTo(x , y);
});

canvas.addEventListener("mousemove", function (e) {
  if(isMouseDown){
    let x = e.clientX;
    let y = e.clientY - 100;
    ctx.lineTo(x,y);
    ctx.stroke();
  }
});


canvas.addEventListener("mouseup", function (e) {
  isMouseDown = false;
});
