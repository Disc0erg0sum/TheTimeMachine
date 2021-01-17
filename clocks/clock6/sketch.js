function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  smooth();
}

function draw() {
  background("#f9faff");
  showHour();
  showMin();
  showSec();
}

function showMin() {
  let c = color(0, minute() * 4.26, 0);
  push();
  translate(width / 2, height / 2);
  fill(c);
  strokeWeight(0);
  rectMode(CENTER);
  square(0, 0, 60);
  pop();
}

function showSec() {
  let c = color(0, 0, second() * 4.26);
  push();
  translate(width / 2 + 70, height / 2);
  fill(c);
  strokeWeight(0);
  rectMode(CENTER);
  square(0, 0, 60);
  pop();
}

function showHour() {
  let c = color(hour() * 10.6, 0, 0);
  push();
  translate(width / 2 - 70, height / 2);
  fill(c);
  strokeWeight(0);
  rectMode(CENTER);
  square(0, 0, 60);
  pop();
}
