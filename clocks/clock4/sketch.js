function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  clockKoeln = new Clock(width / 4, height, 0, 0, 0, -26, -11, "Köln");
  clockHannover = new Clock(
    width / 4,
    height,
    width / 4,
    0,
    0,
    -21,
    -3,
    "Hanover"
  );
  clockMuenchen = new Clock(
    width / 4,
    height,
    (width / 4) * 2,
    0,
    0,
    -14,
    18,
    "München"
  );
  clockBerlin = new Clock(
    width / 4,
    height,
    (width / 4) * 3,
    0,
    0,
    -7,
    38,
    "Berlin"
  );
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  smooth();
  frameRate(2);
  textFont('Crete Round');
  clockKoeln = new Clock(width / 4, height, 0, 0, 0, -26, -11, "Köln");
  clockHannover = new Clock(
    width / 4,
    height,
    width / 4,
    0,
    0,
    -21,
    -3,
    "Hanover"
  );
  clockMuenchen = new Clock(
    width / 4,
    height,
    (width / 4) * 2,
    0,
    0,
    -14,
    18,
    "München"
  );
  clockBerlin = new Clock(
    width / 4,
    height,
    (width / 4) * 3,
    0,
    0,
    -7,
    38,
    "Berlin"
  );
}

function draw() {
  background("#f9faff");
  clockKoeln.update();
  clockHannover.update();
  clockMuenchen.update();
  clockBerlin.update();

  clockKoeln.show();
  clockHannover.show();
  clockMuenchen.show();
  clockBerlin.show();
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
    fill("#1F2417");
    stroke("#1F2417");
    rect(this.clockW/2, this.h + this.divH, this.clockW,this.clockH/20);
    fill("#877426");
    stroke("#877426");
    rect(this.clockW/2, this.min + this.divMin, this.clockW,this.clockH/250);
    fill("#301B26");
    stroke("#301B26");
    rect(this.clockW/2, this.sec + this.divSec, this.clockW,this.clockH/1000);
    
    fill("#301B26");
    noStroke();
    textSize(24);
    text(this.local, 14, this.sec + this.divSec-this.clockH/300);
    pop();
  }
}
