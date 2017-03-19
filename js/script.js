// global variables
var canvas;
var ctx;
var myCube;
var scale = 120;
var offsetX;
var offsetY;
var canvasColor = "#393f4c";
var lastMousePos = {x:0, y:0};
var mousePos = {x:0, y:0};
var mouseDown = false;
var cubeObject = geo(getCube(), []);

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
  myCube = getCube();
}



function run() {
  fillCanvas(canvasColor);
  if (mouseDown) {
    drawLine(lastMousePos.x,lastMousePos.y,mousePos.x,mousePos.y, "red");
  }

  // Draw cube points for myCube
  for (var i = 0; i < myCube.length; i++) {
    drawPoint(offsetX+scale*myCube[i][0],
      offsetY+scale*myCube[i][1],
      "green");
  }

  // Draw cubeObject
  drawGeoOrto(cubeObject, "blue");

  var drag = getMouseDrag();
  rotateY(myCube, drag[0]*0.001);
  rotateX(myCube, drag[1]*0.001);
}

function geo(pts, lns) {
  return {
    points: pts,
    lines: lns
  };
}

function drawGeoOrto(geo, color) {
  for (var i = 0; i < geo.points.length; i++) {
    drawPoint(offsetX+scale*geo.points[i][0],
      offsetY+scale*geo.points[i][1],
      color);
  }
}

function rotateX(objList, angle) {
  for (var i = 0; i < objList.length; i++) {
    var y = objList[i][1]*Math.cos(angle)-objList[i][2]*Math.sin(angle);
    var z = objList[i][1]*Math.sin(angle)+objList[i][2]*Math.cos(angle);
    objList[i][1] = y;
    objList[i][2] = z;
  }
}

function rotateY(objList, angle) {
  for (var i = 0; i < objList.length; i++) {
    var x =  objList[i][0]*Math.cos(angle)+objList[i][2]*Math.sin(angle);
    var z = -objList[i][0]*Math.sin(angle)+objList[i][2]*Math.cos(angle);
    objList[i][0] = x;
    objList[i][2] = z;
  }
}

function rotateZ(objList, angle) {
  for (var i = 0; i < objList.length; i++) {
    var x = objList[i][0]*Math.cos(angle)-objList[i][1]*Math.sin(angle);
    var y = objList[i][0]*Math.sin(angle)+objList[i][1]*Math.cos(angle);
    objList[i][0] = x;
    objList[i][1] = y;
  }
}

function setMousePos(e) {
  var rect = canvas.getBoundingClientRect();
  var posX = e.clientX - rect.left;
  var posY = e.clientY - rect.top;
  mousePos.x = posX;
  mousePos.y = posY;
}

function getMouseDrag() {
  if (mouseDown) {
    var x = mousePos.x - lastMousePos.x;
    var y = mousePos.y - lastMousePos.y;
    return [x,y];
  } else {
    return [0,0];
  }
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
