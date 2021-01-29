let time = [];
let time_i = [];
let pat = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  let d;
  if (width > height) {
    d = height / 25;
  } else {
    d = width / 25;
  }
  initPattern(width / d + 1, height / d + 1, d);
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  smooth();
  frameRate(2);
  let d;
  if (width > height) {
    d = height / 25;
  } else {
    d = width / 25;
  }
  initPattern(width / d + 1, height / d + 1, d);
}

function draw() {
  background("#f9faff");
  nromTime();
  for (let i = 0; i < pat.length; i++) {
    for (let j = 0; j < pat[i].length; j++) {
      pat[i][j].update(time[time_i[i][j]]);
      pat[i][j].show();
    }
  }
}

function initPattern(x, y, d) {
  for (let i = 0; i < x; i++) {
    let time_j = [0, 1, 2];
    pat[i] = [];
    time_i[i] = [];
    for (let j = 0; j < y; j++) {
      time_i[i][j] = random(time_j);
      let c;
      switch (time_i[i][j]) {
        case 0:
          c = color(1, 2, 3);
          break;
        case 1:
          c = color(20, 28, 36);
          break;
        default:
          c = color(13, 38, 64);
          break;
      }
      pat[i][j] = new squr(i * d, j * d, d, c);
    }
  }
}

function nromTime() {
  time[0] = second() / 59;
  time[1] = minute() / 59;
  time[2] = hour() / 23;
}

class squr {
  constructor(x, y, d, c) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
    this.t;
  }

  update(t) {
    this.t = t;
  }

  show() {
    push();
    translate(this.x, this.y);
    fill(this.c);
    stroke(this.c);
    rectMode(CENTER);
    square(0, 0, this.d * this.t);
    pop();
  }
}
