let zoff = 0;
let color;
let mX, mY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, 255, 100, 100, 255);
  frameRate(20);
  mX = windowWidth*0.4;
}

function draw() {
  background(0);
  translate(width * 0.5, height * 0.385);
  scale(170*map(mX,0,windowWidth,1.5,0.82));
  noStroke();

  for (let a = 0; a < map(mX,0,windowWidth,2,5); a += 0.01112) {

    let e = cos(a-zoff) * map(mX,width*0.5,width,1.25,1.75);

    fill(
      85*a,
      100/a,
      250+a)

    ellipse(
      sin(e), 
      cos(e)*map(mX,0,width,0.5,1.5), 
      0.171/a*map(mX,0,width,18,10),
      0.171/a*map(mX,0,width,18,10)
    );

    //circle(sin(e), cos(e)*map(mouseX,0,width,0.5,1.5), 0.171/a*map(mouseX,0,width,2,6));

  }

  zoff += 0.3;
  
  //zoff += map(mouseX,0,width,-0.2,+0.2);

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
