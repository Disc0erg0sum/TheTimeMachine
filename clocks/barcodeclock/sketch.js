function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  background(245);
}

function draw() {
  background(245);

  let mil = map(millis()%1000,0,1000,0,windowWidth);
  let sec = map(second(),0,60,0,windowWidth);
  let min = map(minute(),0,60,0,windowWidth);
  let h = map(hour(),0,24,0,windowWidth);

  //text(millis(),200,200);


  //stroke(10);
  //strokeWeight(10);

  stroke("#1B2226");
  strokeWeight(windowWidth/8);   //16
  line(h,0,h,height);

  stroke("#3E5159");
  strokeWeight(windowWidth/60);   //70
  line(min,0,min,height);

  stroke("#64818C");
  strokeWeight(windowWidth/110);   //120
  line(sec,0,sec,height);

  stroke("#99B8BF");
  strokeWeight(windowWidth/200);   //200
  line(mil,0,mil,height);

}