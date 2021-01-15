
let sec;
let min;
let hours;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  smooth();
}
  
function draw() {
  background(245);
  updateTime();
  text(hours, 50, 50);
  text(min, 50,60);
  text(sec, 50,70);

}


function updateTime() {
  hours = toBin(hour());
  min = toBin(minute());
  sec = toBin(second());
}
  
function toBin(dec) {
    return dec.toString(2);
  }
