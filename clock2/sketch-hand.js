sec = null;
min = null;
h = null;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
};

function draw() {
  background(220);
  sec = second();
  min = minute();
  h = hour() % 12;
  makeClockBase();
  showHouerHand();
  showMinHand(100);
  showSecHand(80);
};


function makeClockBase() {
  translate(width / 2, height / 2);
  ellipseMode(CENTER);
  ellipse(0, 0, 500, 500);
};

function showSecHand(offset) {
  translate(offset, 0);
  angel = map(sec, 0, 60, 0, 360);
  rotate(radians(angel));
  stroke(100);
  strokeWeight(2);
  line(0, 0, 60, 0);
};

function showMinHand(offset) {
  translate(offset, 0);
  angel = map(min, 0, 60, 0, 360);
  rotate(radians(angel));
  stroke(50);
  strokeWeight(4);
  line(0, 0, 80, 0);
};

function showHouerHand() {
  rotate(radians(-90));
  angel = map(h, 0, 12, 0, 360);
  rotate(radians(angel));
  stroke(10);
  strokeWeight(6);
  line(0, 0, 100, 0);
};
