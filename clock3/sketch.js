function setup() {
  pixelDensity(displayDensity());
  createCanvas(400, 400);
  background(220);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);

  let radius = 200;

  let xSec = cos(map(second(), 0, 60, 0, 360)) * radius;
  let ySec = sin(map(second(), 0, 60, 0, 360)) * radius;

  let xMin = cos(map(minute(), 0, 60, 0, 360)) * radius;
  let yMin = sin(map(minute(), 0, 60, 0, 360)) * radius;

  let xHour = cos(map(hour(), 0, 24, 0, 360)) * radius;
  let yHour = sin(map(hour(), 0, 24, 0, 360)) * radius;

  noFill();
  beginShape();
  vertex(xSec, ySec);
  vertex(xMin, yMin);
  vertex(xHour, yHour);
  vertex(xSec, ySec);
  endShape();
}
