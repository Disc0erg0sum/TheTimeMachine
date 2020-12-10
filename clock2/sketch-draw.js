const canvas2 = function (p) {
  sec = 0;
  min = 0;
  hour = 0;

  p.setup = function () {
    p.createCanvas(800, 800);
    p.makeClockBase();
    p.background(0, 0, 0, 0);
  };

  p.draw = function () {
    p.translate(p.width / 2, p.height / 2);
    p.showHouerHand();
    p.showMinHand(100);
    p.showSecHand(80);
    p.updateTime();
  };

  p.makeClockBase = function () {
    p.translate(p.width / 2, p.height / 2);
    p.ellipseMode(p.CENTER);
    p.ellipse(0, 0, 500, 500, 0);
  };

  p.updateTime = function () {
    sec = (sec + 1) % 60;

    if (sec == 59) {
      min = (min + 1) % 60;
    }

    if (sec == 59 && min == 59) {
      hour = (hour + 1) % 12;
    }
  };

  p.showSecHand = function (offset) {
    p.translate(offset, 0);
    angel = p.map(sec, 0, 60, 0, 360);
    p.rotate(p.radians(angel));
    p.stroke(100, 0, 0);
    p.strokeWeight(2);
    p.point(60, 0);
  };

  p.showMinHand = function (offset) {
    p.translate(offset, 0);
    angel = p.map(min, 0, 60, 0, 360);
    p.rotate(p.radians(angel));
    p.stroke(10, 100, 10);
    p.strokeWeight(4);
    p.point(80, 0);
  };

  p.showHouerHand = function () {
    p.rotate(p.radians(-90));
    angel = p.map(hour, 0, 12, 0, 360);
    p.rotate(p.radians(angel));
    p.stroke(10);
    p.strokeWeight(6);
    p.point(100, 0);
  };
};

var myp5 = new p5(canvas2, "canvas2");
