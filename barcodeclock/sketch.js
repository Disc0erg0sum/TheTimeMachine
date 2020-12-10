

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
}

function draw() {
  background(10);

  let mil = map(millis()%1000,0,1000,0,windowWidth);
  let sec = map(second(),0,60,0,windowWidth);
  let min = map(minute(),0,60,0,windowWidth);
  let h = map(hour(),0,24,0,windowWidth);

  //text(millis(),200,200);


  stroke(255);
  strokeWeight(5);

  line(h,0,h,height);
  line(min,0,min,height);
  line(sec,0,sec,height);
  line(mil,0,mil,height);

}