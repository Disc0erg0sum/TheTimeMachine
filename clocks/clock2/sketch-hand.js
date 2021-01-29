let s = null;
let m = null;
let h = null;

let s_handel = null;
let m_handel = null;
let h_handel = null;

let d = 3;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (width > height) {
    s_handel = height / 20;
    m_handel = height / 15;
    h_handel = height / 12;
  } else {
    s_handel = width / 20;
    m_handel = width / 15;
    h_handel = width / 12;
  }
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  smooth();
  frameRate(2);

  if (width > height) {
    s_handel = height / 20;
    m_handel = height / 15;
    h_handel = height / 12;
  } else {
    s_handel = width / 20;
    m_handel = width / 15;
    h_handel = width / 12;
  }
}

function draw() {
  background("#f9faff");
  s = second();
  m = minute();
  print(m);
  h = hour() % 12;

  push();
  translate(width / 2 - h_handel * d, height / 2 - (h_handel * d) / 2);
  clockBase();
  pop();

  push();
  translate(width / 2 - h_handel * d, height / 2 + (h_handel * d) / 2);
  clockBase();
  pop();

  push();
  translate(width / 2, height / 2 - (h_handel * d) / 2);
  clockBase();
  pop();

  push();
  translate(width / 2, height / 2 + (h_handel * d) / 2);
  clockBase();
  pop();

  push();
  translate(width / 2 + h_handel * d, height / 2 - (h_handel * d) / 2);
  clockBase();
  pop();

  push();
  translate(width / 2 + h_handel * d, height / 2 + (h_handel * d) / 2);
  clockBase();
  pop();


  // clock 1
  push();
  translate(width / 2 - h_handel * d, height / 2 - (h_handel * d) / 2);
  showHouerHand(0);
  showMinHand(h_handel);
  showSecHand(m_handel);
  pop();

  // clock 2
  push();
  translate(width / 2 - h_handel * d, height / 2 + (h_handel * d) / 2);
  showHouerHand(0);
  showSecHand(h_handel);
  showMinHand(s_handel);
  pop();

  // clock 3
  push();
  translate(width / 2, height / 2 - (h_handel * d) / 2);
  showMinHand(0);
  showHouerHand(m_handel);
  showSecHand(h_handel);
  pop();

  // clock 4
  push();
  translate(width / 2, height / 2 + (h_handel * d) / 2);
  showMinHand(0);
  showSecHand(m_handel);
  showHouerHand(s_handel);
  pop();

  // clock 5
  push();
  translate(width / 2 + h_handel * d, height / 2 - (h_handel * d) / 2);
  showSecHand(0);
  showMinHand(s_handel);
  showHouerHand(m_handel);
  pop();

  // clock 6
  push();
  translate(width / 2 + h_handel * d, height / 2 + (h_handel * d) / 2);
  showSecHand(0);
  showHouerHand(s_handel);
  showMinHand(h_handel);
  pop();
}

function clockBase() {
  ellipseMode(CENTER);
  noFill();
  stroke(219,214,213);
  if (width > height) {
    ellipse(0, 0, h_handel * 2 + height / 40, h_handel * 2 + height / 40);
  } else {
    ellipse(0, 0, h_handel * 2 + width / 40, h_handel * 2 + width / 40);
  }
}

function showSecHand(offset) {
  translate(offset, 0);
  rotate(radians(-90));
  angel = map(s, 0, 60, 0, 360);
  rotate(radians(angel));
  stroke(189,11,11);
  strokeWeight(2);
  line(0, 0, s_handel, 0);
}

function showMinHand(offset) {
  translate(offset, 0);
  rotate(radians(-90));
  angel = map(m, 0, 60, 0, 360);
  rotate(radians(angel));
  stroke(113,110,109);
  strokeWeight(4);
  line(0, 0, m_handel, 0);
}

function showHouerHand(offset) {
  translate(offset, 0);
  rotate(radians(-90));
  angel = map(h, 0, 12, 0, 360);
  rotate(radians(angel));
  stroke(55,53,53);
  strokeWeight(6);
  line(0, 0, h_handel, 0);
}
