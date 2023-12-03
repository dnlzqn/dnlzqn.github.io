let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  translate(width * 0.5, height * 0.4);
  scale(200);
  noStroke();
  for (let a = 0; a < 3; a += 0.01112) {
    let e = cos(a-zoff) * map(mouseX,0,width,0.1,2);
    fill(100*a,15*a,250*a);
    circle(sin(e), cos(e)*map(mouseX,0,width,0.5,1.15), 0.171/a*map(mouseX,0,width,2,8));
  }
  zoff += 0.13;
}
