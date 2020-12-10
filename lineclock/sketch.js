

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  drawingContext.shadowOffsetX = 2;
  drawingContext.shadowOffsetY = 2;
}

function draw() {
  background(220);

  push()
  drawingContext.shadowBlur = 3;
  drawingContext.shadowColor = color(0);
  noStroke();

  for (let i=0; i<second();i++){
  	fill(220);
  	ellipse(20+i*23,300,10,10);
  }

  for (let i=0; i<minute();i++){
    fill(220);
  	ellipse(20+i*23,400,10,10);
  }

  for (let i=0; i<hour();i++){
    fill(220);
  	ellipse(20+i*60,500,10,10);
  }
  pop();

  drawingContext.shadowBlur = 0;

}