var canvas;

var numw;
var numh;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background(245);

  //numw = windowWidth/80;
  //numh = windowHeight/80;

  numw = 32;
  numh = 32;

  /*rectMode(CENTER);
  bg = createGraphics(width, height);
  bg.noStroke();
  for (let i = 0; i < 300000; i++) {
    let x = random(width);
    let y = random(height);
    let s = noise(x*0.01, y*0.01) + 0.0009*min(windowWidth,windowHeight);
    bg.fill(255,50);
    bg.rect(x, y, s, s);
  }*/


}

function draw() {
  background(245);

  let s = map(second(),0,60,0,height);
  let m = map(minute(),0,60,0,height);
  let h = map(hour(),0,24,0,width);


  for (let i = 0; i < numw; i++) {
    stroke("#F2B705");
    strokeWeight(min(width,height)/90);
    line(h,0,i*width/numw,height);
  }


  for (let i = 0; i < numh; i++) {
    stroke("#3DADF2");
    strokeWeight(min(width,height)/200);
    line(0,m,width,i*height/numh);
  }


  for (let i = 0; i < numh; i++) {
    stroke("#F26D91");
    strokeWeight(min(width,height)/250);
    line(0,i*height/numh,width,s);
  }

  //image(bg,0,0);
}