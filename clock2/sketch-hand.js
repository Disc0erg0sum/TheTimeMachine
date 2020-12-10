sec = null;
min = null;
hour = null;

setup = function () {
  createCanvas(800, 800);
};

draw = function () {
  background(220);
  makeClockBase();
  showHouerHand();
  showMinHand(100);
  showSecHand(80);
  updateTime();
};

updateTime = function () {
  sec = (sec + 1) % 60;
  // console.log("sec:" + sec);

  if (sec == 0) {
    min = (min + 1) % 60;
    console.log("min" + min);
  }

  if (sec == 0 && min == 0) {
    hour = (hour + 1) % 12;
    console.log("houer" + hour);
  }
};

makeClockBase = function () {
  translate(width / 2, height / 2);
  ellipseMode(CENTER);
  ellipse(0, 0, 500, 500);
};

showSecHand = function (offset) {
  translate(offset, 0);
  angel = map(sec, 0, 60, 0, 360);
  rotate(radians(angel));
  stroke(100, 0, 0);
  strokeWeight(2);
  line(0, 0, 60, 0);
};

showMinHand = function (offset) {
  translate(offset, 0);
  angel = map(min, 0, 60, 0, 360);
  rotate(radians(angel));
  stroke(10, 100, 10);
  strokeWeight(4);
  line(0, 0, 80, 0);
};

showHouerHand = function () {
  rotate(radians(-90));
  angel = map(hour % 12, 0, 12, 0, 360);
  rotate(radians(angel));
  stroke(10);
  strokeWeight(6);
  line(0, 0, 100, 0);
};
