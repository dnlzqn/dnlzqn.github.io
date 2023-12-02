let s = 23;
let t = 1;
let f = 1;
let mX, mY;

function setup() {
  createCanvas(w=windowWidth, h=windowHeight);
  mX = width * 0.9;
  mY = height * 0.9;
  noStroke();
}

function draw() {
  scale(2)
  for (let x = -s; x < w + (s*2); x += s/2) {
    for (let y = -s; y < w + (s*2); y += s/2) {
      let n = 1.5*cos(t / 5 -y * s*30 + map(mX, 0, width, -5, 5)) * s/2;
      let o = 2.5*sin(t / 5 -x / 30 + map(mY, 0, height, -5, 5)) * s/2;
      if ((x / (s/2) + y / (s/2)) % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }
      circle(x+o+n, y+o, s);
    }
  }
  t += 0.12;
}

function mousePressed() {
  mX = mouseX;
  mY = mouseY;
}

function mouseMoved() {
  t +=0;
  mX = mouseX;
  mY = mouseY;
}

function touchStarted() {
  mX = mouseX;
  mY = mouseY;
  return false;
}

function touchMoved() {
  mX = mouseX;
  mY = mouseY;
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}