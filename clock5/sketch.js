
let sec;
let min;
let hour;

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(220);
  time[0] = toBin(hour());
  time[1] = toBin(minute());
  time[2] = toBin(second());

  text(time, 50, 50);

}


function (update) {
  
}
  
function toBin(dec) {
    return dec.toString(2);
  }
