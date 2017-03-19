function drawLine(posX0,posY0,posX1,posY1,color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(posX0,posY0);
  ctx.lineTo(posX1,posY1);
  ctx.stroke();
}

function setPixel(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect( x, y, 1, 1 );
}

function drawPoint(x, y, color) {
  drawCircle(x,y,1,color);
}

function drawCircle(x, y, r, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.stroke();
}


function fillCanvas(color) {
  ctx.fillStyle = color;
  ctx.fillRect(0,0,canvas.width,canvas.height);
}
