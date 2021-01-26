function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  background("#f9faff");
  frameRate(3);

  textFont('Noto Sans JP');
}

function draw() {
  background("#f9faff");

  let s = map(second(),0,60,0,TWO_PI) - HALF_PI;
  let m = map(minute(),0,60,0,TWO_PI) - HALF_PI;
  let h = map(hour(),0,24,0,TWO_PI*2) - HALF_PI;

  let hjap = hour()+8;
  hjap % 23; 
  let h8 = map(hjap,0,24,0,TWO_PI*2) - HALF_PI;


  let hnep = hour()+4;
  hnep % 23;
  let h4 = map(hnep,0,24,0,TWO_PI*2) - HALF_PI;

  let mnep = minute()+45;
  mnep % 59;
  let m45 = map(mnep,0,60,0,TWO_PI) - HALF_PI;

  //japan
  push();
  translate(width/4,height/2);
  push();
  rotate(-PI/6+s);
  drawWatch(0,0,12,width/16,'チク');
  pop();
  push();
  rotate(-PI/6 +m);
  drawWatch(0,0,1,width/10,'タク');
  pop();
  push();
  rotate(-PI/6 +h8);
  drawWatch(0,0,1,width/10,'タク');
  pop();
  pop();

  //germany
  push();
  translate(width/2,height/2);
  push();
  rotate(-PI/6+s);
  drawWatch(0,0,12,width/16,'TICK');
  pop();
  push();
  rotate(-PI/6 +m);
  drawWatch(0,0,1,width/10,'TACK');
  pop();
  push();
  rotate(-PI/6 +h);
  drawWatch(0,0,1,width/10,'TACK');
  pop();
  pop();

  //nepal
  push();
  translate(width-width/4,height/2);
  push();
  rotate(-PI/6+s);
  drawWatch(0,0,12,width/16,'clit');
  pop();
  push();
  rotate(-PI/6 +m45);
  drawWatch(0,0,1,width/10,'caqq');
  pop();
  push();
  rotate(-PI/6 +h4);
  drawWatch(0,0,1,width/10,'caqq');
  pop();
  pop();
}

function drawWatch(x,y,num,radius,txt){
  push();
  translate(x,y);
  for (let a = 0; a < num; a += 1) {
    let angle = radians(TWO_PI);
    let x = cos(angle) * radius;
    rotate(PI/6);
    push();
    fill(10);
    textSize(width/100);
    textAlign(CENTER);
    text(txt,x,0);
    pop();
  }
  pop();
}