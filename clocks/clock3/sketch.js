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

  let xSec = cos(map(second(), 0, 60, 0, 360)) * radius;
  let ySec = sin(map(second(), 0, 60, 0, 360)) * radius;

  let xMin = cos(map(minute(), 0, 60, 0, 360)) * radius;
  let yMin = sin(map(minute(), 0, 60, 0, 360)) * radius;

  let xHour = cos(map(hour(), 0, 24, 0, 360)) * radius;
  let yHour = sin(map(hour(), 0, 24, 0, 360)) * radius;
  strokeWeight(0.2);
  stroke(27, 34, 38, 85);
  noFill();
  beginShape();
  vertex(xSec, ySec);
  vertex(xMin, yMin);
  vertex(xHour, yHour);
  vertex(xSec, ySec);
  endShape();
}
