let zoff=1000000;
let mX, mY

function setup() {
  createCanvas(windowWidth, windowHeight);
  mX = windowWidth / 2;
  mY = windowHeight / 2;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(5);
  let mm = map(mX, 0, width, -1, 1);
  let my = map(mY, 0, height, -100, 0);

  for (let a = 0; a < 2.5; a += 0.0004) {
    stroke(255)
    strokeWeight(0.151)
    let x = a*10000;
    let y = noise(a)/tan(x+zoff)*my;
    let e = (cos(x))*width/20;
    //circle(cos(((x*e))-my)*e, atan(((y/a))/mm)*e,0.13);
    circle(cos(((e*a))-my)*e, atan(((y/e))/mm)*e,0.13);

  }
  zoff += 0.035;
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
