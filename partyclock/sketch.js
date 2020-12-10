var num = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  background(20);

  for (let i = 0; i < num; i++) {
    stroke(0,255,0);
    strokeWeight(4);
    line(0+hour()*60,0,0+i*60,height);
  }

  for (let i = 0; i < num; i++) {
    stroke(0,0,255);
    strokeWeight(4);
    line(0,0+minute()*10,width,0+i*26);
  }

  for (let i = 0; i < num; i++) {
    stroke(255,0,0);
    strokeWeight(4);
    line(0,0+i*26, width,0+second()*10);
  }

}