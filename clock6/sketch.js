function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  showHour();
  showMin();
  showSec();
}

function showMin() {
  let c = color(0, minute() * 4.26, 0);
  push();
  translate(width / 2, height / 2);
  fill(c);
  stroke(0);
  rectMode(CENTER);
  rect(0, 0, 40, 100);
  pop();
}

function showSec() {
  let c = color(0, 0, second() * 4.26);
  push();
  translate(width / 2 + 50, height / 2);
  fill(c);
  stroke(0);
  rectMode(CENTER);
  rect(0, 0, 40, 100);
  pop();
}

function showHour() {
  let c = color(hour() * 10.6, 0, 0);
  push();
  translate(width / 2 - 50, height / 2);
  fill(c);
  stroke(0);
  rectMode(CENTER);
  rect(0, 0, 40, 100);
  pop();
}
