t = 1e4,
z = r = g = b = 0,
s = 125;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360);
  noiseSeed(random() * 999999);
  randomSeed(random() * 999999);
  r = random(360);
  g = random(360);
  b = random(360);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(s);
  noStroke();
  let n = map(mouseX, 0, width, 0, 3);
  let m = map(mouseY, 0, height, 0, 15);

  for (let a = 0; a < 5; a += 4e-4) {
    let x = 1e4 * a;
    let y = cos(a) / sin(t / x);
    let e = cos(x) % a;
    let f = 2.5 * noise(tan(e));

    fill(a + r + b, g * a, 360);
    circle(sin(tan(cos(y)) + n) * f * e, sin(tan(sin(y)) + z + m) * f, 0.015);
  }

  t += 0.03;
  z += 0.003;
}

function touchStarted() {
  return false; 
}

function touchMoved() {
  return false; 
}

function touchEnded() {
  return false; 
}
