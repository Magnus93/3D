// global variables
var canvas;
var ctx;
var scale = 120;
var offsetX;
var offsetY;
var canvasColor = "#393f4c";
var lastMousePos = {x:0, y:0};
var mousePos0 = {x:0, y:0};
var mousePos = {x:0, y:0};
var mouseDown = false;
var cubeObject = geoCube();

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

  canvas.addEventListener("mousedown", function() {
    lastMousePos.x = mousePos.x;
    lastMousePos.y = mousePos.y;
    mouseDown = true;
  });
  canvas.addEventListener("mouseup", function() {
    mouseDown = false;
  });
  canvas.addEventListener("mousemove", setMousePos, false);

  fillCanvas("#393f4c");
}



function run() {
  fillCanvas(canvasColor);
  if (mouseDown) {
    drawLine(lastMousePos.x,lastMousePos.y,mousePos.x,mousePos.y, "red");
  }

  // Draw cubeObject
  drawGeoOrto(cubeObject, "pink");

  var drag = getMouseDrag();
  rotateY(cubeObject, drag[0]*-0.001);
  rotateX(cubeObject, drag[1]*-0.001);
}



function drawGeoOrto(geo, color) {
  // Draw lines
  for (i in geo.lines) {
    var pixStart = getPixelPosOrto(geo.points[geo.lines[i][0]]);
    var pixEnd   = getPixelPosOrto(geo.points[geo.lines[i][1]]);
    drawLine(pixStart[0], pixStart[1], pixEnd[0], pixEnd[1], "aqua");
  }

  // Draw points
  for (i in geo.points) {
    var pixPos = getPixelPosOrto(geo.points[i]);
    drawPoint(pixPos[0], pixPos[1], color);
  }
}

function getPixelPosOrto(point3D) {
  var x2D = offsetX+scale*point3D[0];
  var y2D = offsetY+scale*point3D[1];
  return [x2D, y2D];
}

function rotateX(obj, angle) {
  for (var i = 0; i < obj.points.length; i++) {
    var y = obj.points[i][1]*Math.cos(angle)-obj.points[i][2]*Math.sin(angle);
    var z = obj.points[i][1]*Math.sin(angle)+obj.points[i][2]*Math.cos(angle);
    obj.points[i][1] = y;
    obj.points[i][2] = z;
  }
}

function rotateY(obj, angle) {
  for (var i = 0; i < obj.points.length; i++) {
    var x =  obj.points[i][0]*Math.cos(angle)+obj.points[i][2]*Math.sin(angle);
    var z = -obj.points[i][0]*Math.sin(angle)+obj.points[i][2]*Math.cos(angle);
    obj.points[i][0] = x;
    obj.points[i][2] = z;
  }
}

function rotateZ(obj, angle) {
  for (var i = 0; i < obj.points.length; i++) {
    var x = obj.points[i][0]*Math.cos(angle)-obj.points[i][1]*Math.sin(angle);
    var y = obj.points[i][0]*Math.sin(angle)+obj.points[i][1]*Math.cos(angle);
    obj.points[i][0] = x;
    obj.points[i][1] = y;
  }
}

function setMousePos(e) {
  var rect = canvas.getBoundingClientRect();
  mousePos0.x = mousePos.x+0;
  mousePos0.y = mousePos.y+0;
  var posX = e.clientX - rect.left;
  var posY = e.clientY - rect.top;
  mousePos.x = posX;
  mousePos.y = posY;
}

function getMouseDrag() {
  if (mouseDown) {
    var x = mousePos.x - lastMousePos.x;//mousePos0.x;
    var y = mousePos.y - lastMousePos.y;//mousePos0.y;
    //console.log("jajaja",x,y);
    return [x,y];
  } else {
    return [0,0];
  }
}
