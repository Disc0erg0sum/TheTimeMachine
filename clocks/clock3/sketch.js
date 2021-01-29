function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  smooth();
  background("#f9faff");
  angleMode(DEGREES);
  frameRate(2);
}

function draw() {
  translate(width / 2, height / 2);
  let radius = min(width, height) / 2;
  // TODO -90grad damit die dastellung stimmt
  let xS = cos(map(second(), 0, 60, 0, 360)) * radius;
  let yS = sin(map(second(), 0, 60, 0, 360)) * radius;

  let xM = cos(map(minute(), 0, 60, 0, 360)) * radius;
  let yM = sin(map(minute(), 0, 60, 0, 360)) * radius;

  let xH = cos(map(hour(), 0, 24, 0, 360)) * radius;
  let yH = sin(map(hour(), 0, 24, 0, 360)) * radius;
  strokeWeight(0.2);
  stroke(27, 34, 38, 85);
  noFill();
  beginShape();
  vertex(xS, yS);
  vertex(xM, yM);
  vertex(xH, yH);
  vertex(xS, yS);
  endShape();
}
