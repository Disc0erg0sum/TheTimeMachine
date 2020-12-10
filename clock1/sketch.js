let s, m ,h;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CENTER);
  draw_sec(second());
  draw_min(minute());
  draw_hour(hour());

}


function draw_sec(s){
  push();
  translate(width/2 - 70, height/2);
  fill(0,0,0,0);
  stroke(1);
  square(0, 0, 60);
  fill(10);
  square(0,0,s);
  pop()
}

function draw_min(m) {
  push();
  translate(width/2, height/2);
  fill(0,0,0,0);
  stroke(1);
  square(0, 0, 60);
  fill(10);
  square(0,0,m);
  pop()
}

function draw_hour(h) {
  push();
  translate(width / 2 + 70, height / 2);
  fill(0, 0, 0, 0);
  stroke(1);
  square(0, 0, 60);
  fill(10);
  square(0, 0, mag(h, 0, 23, 0, 59));
  pop();
}

