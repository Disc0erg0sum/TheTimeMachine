var numw;
var numh;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(224, 198, 92);

  //numw = windowWidth/80;
  //numh = windowHeight/80;

  numw = 32;
  numh = 32;


}

function draw() {
  background("#DAD8A7");

  let s = map(second(),0,60,0,height);
  let m = map(minute(),0,60,0,height);
  let h = map(hour(),0,24,0,width);


  for (let i = 0; i < numw; i++) {
    stroke("#99B898");
    strokeWeight(min(width,height)/90);
    line(h,0,i*width/numw,height);
  }


  for (let i = 0; i < numh; i++) {
    stroke("#E84A5F");
    strokeWeight(min(width,height)/200);
    line(0,m,width,i*height/numh);
  }


  for (let i = 0; i < numh; i++) {
    stroke("#2A363B");
    strokeWeight(min(width,height)/300);
    line(0,i*height/numh,width,s);
  }

}