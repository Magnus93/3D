
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
  console.log(lns);
  return geo(pts, lns);
}

// function getCube() {
//   var lst = [];
//   lst.push([ 1, 1, 1]);
//   lst.push([ 1, 1,-1]);
//   lst.push([ 1,-1, 1]);
//   lst.push([ 1,-1,-1]);
//   lst.push([-1, 1, 1]);
//   lst.push([-1, 1,-1]);
//   lst.push([-1,-1, 1]);
//   lst.push([-1,-1,-1]);
//   return lst;
// }
