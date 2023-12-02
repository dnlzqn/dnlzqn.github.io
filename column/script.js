let t, s, mx, my;
let w, h;

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  mx = random(w);
  my = random(h);
  t = s = 1e5;
}

function draw() {
  background(0);
  fill(w);
  noStroke();
  translate(w / 2, h / 2);
  scale(100);

  let n = map(mx, 0, w, 2.5, -2.5);
  let m = map(my, 0, h, 2.5, -2.5);

  for (let a = 0; a < 3.5; a += 4e-4) {
    let x = a * s * n;
    let y = a % tan(x + s) + m;
    let e = 1.75 * cos(x * s);
    let posX = noise(cos(y + t) + m) * e;
    let posY = tan(sin(y + n + m) + m / s);
    circle(posX, posY, 0.015);
  }

  t += 0.03;
  s += 0.003;
}

function mousePressed() {
  mx = mouseX;
  my = mouseY;
}

function mouseMoved() {
  mx = mouseX;
  my = mouseY;
}

function touchStarted() {
  mx = mouseX;
  my = mouseY;
}

function touchMoved() {
  mx = mouseX;
  my = mouseY;
  return false;
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
}
