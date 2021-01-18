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

  init_pattern(25, 40);
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

function init_pattern(x, y) {
  let d = 50;
  for (let i = 0; i < x; i++) {
    time_j = [0, 1, 2];
    pat[i] = [];
    time_i[i] = [];
    for (let j = 0; j < y; j++) {
      pat[i][j] = new squr(i * d, j * d, d, color(50));
      time_i[i][j] = random(time_j);
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
    strokeWeight(0);
    square(0, 0, this.d * this.t);
    pop();
  }
}
