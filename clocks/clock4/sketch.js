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
    "Hannover"
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
    "Hannover"
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
  constructor(clockW, clockH, posX, posY, divH, divM, divS, local) {
    this.clockW = clockW;
    this.clockH = clockH;
    this.posX = posX;
    this.posY = posY;
    this.divH = divH;
    this.divM = divM;
    this.divS = divS;
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
    fill("#818199");
    stroke("#818199");
    rect(this.clockW/2, this.h + this.divH, this.clockW,this.clockH/10);
    fill("#706A69");
    stroke("#706A69");
    rect(this.clockW/2, this.min + this.divM, this.clockW,this.clockH/200);
    fill("#301B26");
    stroke("#301B26");
    rect(this.clockW/2, this.sec + this.divS, this.clockW,this.clockH/900);
    
    fill("#301B26");
    noStroke();
    if (windowWidth <769){
      textSize(16);
    } else {
      textSize(24);
    }
    text(this.local, 14, this.sec + this.divS-this.clockH/300);
    pop();
  }
}
