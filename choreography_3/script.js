let zoff = 0;
let mX, mY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mX = windowWidth / 2;
  mY = windowHeight / 2;
}

function draw() {
  background(0);
  let mm = map(mX, 0, width, -20, 20);
  let my = map(mY, 0, height, 0, 20);
  translate(width / 2, height / 2);
  scale(20);
  noStroke();
  fill(255);
  for (let a = 0; a < 7; a += 0.0012) {
    let x = constrain(cos(zoff) * mm * sin(a),2,20);
    let y = (cos(zoff) * 15 * cos(a));
    let e = sin(x+a) / sin(y+my);
    let e2 = tan(a-x) / tan(a-x)+mm;
    circle(sin(e+mm) -1 + e+e2, cos(e-my) -1 * a*4+15, 0.0971);
  }
  
  zoff += map(mouseX, 0, width, -0.01, +0.01);
}

function mousePressed() {
  mX = mouseX;
  mY = mouseY;
}

function mouseMoved() {
  mX = mouseX;
  mY = mouseY;
}

function touchStarted() {
  mX = mouseX;
  mY = mouseY;
}

function touchMoved() {
  mX = mouseX;
  mY = mouseY;
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
