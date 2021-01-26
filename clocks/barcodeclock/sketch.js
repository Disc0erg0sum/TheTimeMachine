function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  background("#f9faff");
}

function draw() {
  background("#f9faff");

  let mil = map(millis()%1000,0,1000,0,windowWidth);
  let s = map(second(),0,60,0,windowWidth);
  let m = map(minmute(),0,60,0,windowWidth);
  let h = map(hour(),0,24,0,windowWidth);


  stroke(27, 34, 38);
  strokeWeight(windowWidth/8);   
  line(h,0,h,height);

  stroke(62, 81, 89);
  strokeWeight(windowWidth/60); 
  line(m,0,m,height);

  stroke(100, 129, 140);
  strokeWeight(windowWidth/110); 
  line(s,0,s,height);

  stroke(153, 184, 191);
  strokeWeight(windowWidth/200); 
}