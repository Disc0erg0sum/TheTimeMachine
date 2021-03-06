var numw;
var numh;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  background("#f9faff");
  frameRate(3);

  numw = 115;
  numh = 115;
}

function draw() {
  background("#f9faff");

  let s = map(second(),0,60,0,height);
  let m = map(minute(),0,60,0,height);
  let h = map(hour(),0,24,0,width);

  for (let i = 0; i < numw; i++) {
    stroke("#F2B705");
    strokeWeight(1);
    line(h,0,i*width/numw,height);
  }

  for (let i = 0; i < numh; i++) {
    stroke("#3DADF2");
    strokeWeight(1);
    line(0,m,width,i*height/numh);
  }

  for (let i = 0; i < numh; i++) {
    stroke("#F26D91");
    strokeWeight(1);
    line(0,i*height/numh,width,s);
  }
}