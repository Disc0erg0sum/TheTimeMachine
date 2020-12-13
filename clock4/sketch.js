function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  clockGerman = new Clock(width, height / 4, 0, 0, 0, 0, 0);
  clockBerlin = new Clock(width, height / 4, 0, height / 4, 0, -6, -22);
  clockBremen = new Clock(width, height / 4, 0, (height / 4) * 2, 0, -24, -46);
  clockWien = new Clock(width, height / 4, 0, (height / 4) * 3, 0, 5, 30);
}

function draw() {
  background(10);
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
  constructor(clockW, clockH, posX, posY, divH, divMin, divSec) {
    this.clockW = clockW;
    this.clockH = clockH;
    this.posX = posX;
    this.posY = posY;
    this.divH = divH;
    this.divMin = divMin;
    this.divSec = divSec;
  }

  update() {
    this.sec = map(second(), 0, 60, 0, this.clockW);
    this.min = map(minute(), 0, 60, 0, this.clockW);
    this.h = map(hour(), 0, 24, 0, this.clockW);
  }

  show() {
    push();
    translate(this.posX, this.posY);

    stroke(245);
    strokeWeight(5);

    line(this.h + this.divH, 0, this.h + this.divH, this.clockH);
    line(this.min + this.divMin, 0, this.min + this.divMin, this.clockH);
    line(this.sec + this.divSec, 0, this.sec + this.divSec, this.clockH);
    pop();
  }
}
