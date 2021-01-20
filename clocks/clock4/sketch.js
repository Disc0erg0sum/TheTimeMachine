function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  smooth();
  frameRate(2);
  clockGerman = new Clock(width / 4, height, 0, 0, 0, 0, 0, "Germany");
  clockBerlin = new Clock(
    width / 4,
    height,
    width / 4,
    0,
    0,
    -6,
    -22,
    "Berlin"
  );
  clockBremen = new Clock(
    width / 4,
    height,
    (width / 4) * 2,
    0,
    0,
    -24,
    -46,
    "Bremen"
  );
  clockWien = new Clock(
    width / 4,
    height,
    (width / 4) * 3,
    0,
    0,
    5,
    30,
    "Wien"
  );
}

function draw() {
  background("#f9faff");
  clockGerman.update();
  clockBerlin.update();
  clockBremen.update();
  clockWien.update();

  clockGerman.show();
  clockBerlin.show();
  clockBremen.show();
  clockWien.show();
}

class Clock {
  constructor(clockW, clockH, posX, posY, divH, divMin, divSec, local) {
    this.clockW = clockW;
    this.clockH = clockH;
    this.posX = posX;
    this.posY = posY;
    this.divH = divH;
    this.divMin = divMin;
    this.divSec = divSec;
    this.local = local;
  }

  update() {
    this.sec = map(second(), 0, 60, 0, this.clockH);
    this.min = map(minute(), 0, 60, 0, this.clockH);
    this.h = map(hour(), 0, 24, 0, this.clockH);
  }

  show() {
    push();
    translate(this.posX, this.posY);
    rectMode(CENTER)
    fill(27, 34, 38);
    stroke(27, 34, 38);
    rect(this.clockW/2, this.h + this.divH, this.clockW,this.clockH/8);
    fill(62, 81, 89);
    stroke(62, 81, 89);
    rect(this.clockW/2, this.min + this.divMin, this.clockW,this.clockH/60);
    fill(100, 129, 140);
    stroke(100, 129, 140);
    rect(this.clockW/2, this.sec + this.divSec, this.clockW,this.clockH/120);
    
    fill(153, 184, 191);
    noStroke();
    textSize(18);
    text(this.local, this.clockH/120, this.sec + this.divSec-this.clockH/120);
    pop();
  }
}
