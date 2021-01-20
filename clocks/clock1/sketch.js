let time = [];
let time_i = [];
let pat = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  smooth();
  frameRate(2);
  let d;
  if (width > height) {
    d = height / 30;
  } else {
    d = width / 30;
  }
  init_pattern(width / d + 1, height / d + 1, d);
}

function draw() {
  background("#f9faff");
  nrom_time();
  for (let i = 0; i < pat.length; i++) {
    for (let j = 0; j < pat[i].length; j++) {
      pat[i][j].update(time[time_i[i][j]]);
      pat[i][j].show();
    }
  }
}

function init_pattern(x, y, d) {
  for (let i = 0; i < x; i++) {
    let time_j = [0, 1, 2];
    pat[i] = [];
    time_i[i] = [];
    for (let j = 0; j < y; j++) {
      time_i[i][j] = random(time_j);
      let c;
      switch (time_i[i][j]) {
        case 0:
          c = color(100, 129, 140);
          break;
        case 1:
          c = color(62, 81, 89);
          break;
        default:
          c = color(27, 34, 38);
          break;
      }
      pat[i][j] = new squr(i * d, j * d, d, c);
    }
  }
}

function nrom_time() {
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
