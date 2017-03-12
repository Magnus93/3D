// global variables
var canvas;
var ctx;
var myCube;
var scale = 40;
var offsetX;
var offsetY;
var canvasColor;

window.onload = function () {
  console.log("Started Script");
  init();
  setInterval(run, 50);
}


function init () {
  console.log("Running Main");
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  offsetX = canvas.width/2;
  offsetY = canvas.height/2;
  canvasColor = window.getComputedStyle(document.body).getPropertyValue('--canvas-color').trim();

  canvas.addEventListener("click", function() {
    console.log("Clicked!");
  });
  canvas.addEventListener("mousedown", getMousePos, false);

  fillCanvas("#393f4c");
  myCube = getCube();
}

function getMousePos() {
  //var 
}

function run() {
  for (var i = 0; i < myCube.length; i++) {
    drawPoint(offsetX+scale*myCube[i][0],
      offsetY+scale*myCube[i][1],
      "green");
  }
}




function fillCanvas(color) {
  ctx.fillStyle = color;
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawPoint(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect( x, y, 1, 1 );
}

function getCube() {
  var lst = [];
  lst.push([ 1, 1, 1]);
  lst.push([ 1, 1,-1]);
  lst.push([ 1,-1, 1]);
  lst.push([ 1,-1,-1]);
  lst.push([-1, 1, 1]);
  lst.push([-1, 1,-1]);
  lst.push([-1,-1, 1]);
  lst.push([-1,-1,-1]);
  return lst;
}
