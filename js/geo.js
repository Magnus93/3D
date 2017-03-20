
function geo(pts, lns) {
  return {
    points: pts,
    lines: lns
  };
}

function geoCube() {
  // Points
  var pts = [];
  pts.push([ 1, 1, 1]);
  pts.push([ 1, 1,-1]);
  pts.push([ 1,-1, 1]);
  pts.push([ 1,-1,-1]);
  pts.push([-1, 1, 1]);
  pts.push([-1, 1,-1]);
  pts.push([-1,-1, 1]);
  pts.push([-1,-1,-1]);

  // Lines
  var lns = [];
  // one side
  lns.push([0,1]);
  lns.push([1,3]);
  lns.push([3,2]);
  lns.push([2,0]);

  // middle
  lns.push([0,4]);
  lns.push([1,5]);
  lns.push([2,6]);
  lns.push([3,7]);

  // other side
  lns.push([4,5]);
  lns.push([5,7]);
  lns.push([7,6]);
  lns.push([6,4]);
  return geo(pts, lns);
}

function geoSphere() {
  // Points
  var radius = 1;
  var turnSeg = 8;
  var turnAngle = 2*Math.PI/turnSeg;
  var heightSeg = 8;
  var heightAngle = Math.PI/heightSeg;

  var pts = [];
  pts.push([0,radius,0]);
  for (var h = 0; h < heightSeg; h++) {
    for (var t = 0; t < turnSeg; t++) {
      var x = Math.sin(heightAngle*h)*radius+Math.cos(turnAngle*t)*radius;
      var y = Math.cos(heightAngle*h)*radius;
      var z = Math.sin(turnAngle*t)*radius;
      pts.push([x,y,z]);
    }
  }

  // Lines
  var lns = [];
  return geo(pts, lns);

}
