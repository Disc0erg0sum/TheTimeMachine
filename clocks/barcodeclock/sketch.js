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
  let sec = map(second(),0,60,0,windowWidth);
  let min = map(minute(),0,60,0,windowWidth);
  let h = map(hour(),0,24,0,windowWidth);

  //text(millis(),200,200);


  //stroke(10);
  //strokeWeight(10);

  stroke(27, 34, 38);
  strokeWeight(windowWidth/8);   //16
  line(h,0,h,height);

  stroke(62, 81, 89);
  strokeWeight(windowWidth/60);   //70
  line(min,0,min,height);

  stroke(100, 129, 140);
  strokeWeight(windowWidth/110);   //120
  line(sec,0,sec,height);

  stroke(153, 184, 191);
  strokeWeight(windowWidth/200);   //200
  line(mil,0,mil,height);

}






