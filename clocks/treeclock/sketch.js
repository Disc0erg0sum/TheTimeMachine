let minrings = [];
let rings = [];

var minscl = 18;
let bg;

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	pixelDensity(displayDensity());
	createCanvas(windowWidth, windowHeight);
	background("#f9faff");
	frameRate(3);

	for (let i = 0; i < 25; i++){
	  	minrings[i] = new Treering();
	  	rings[i] = new Treering();
  }

  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  //imagenoise
  rectMode(CENTER);
  bg = createGraphics(windowWidth, windowHeight);
  bg.noStroke();
  for (let i = 0; i < min(windowWidth,windowHeight)*333; i++) {
  	let x = random(windowWidth);
  	let y = random(windowHeight);
  	let s = noise(x*0.01, y*0.01) + 0.0009*min(windowWidth,windowHeight);
  	bg.fill(255,50);
  	bg.rect(x, y, s, s);
  }
}

function draw() { 
	background("#f9faff");
  randomSeed(1);

  minscl = min(windowWidth,windowHeight)/40;

  let m = map(minute(),0,60,0,minscl);
  let c = [color('#3D2100'), color('#724A1D'), color('#64341B')];

  push();
  translate(windowWidth/2,windowHeight/2);
  drawingContext.shadowColor = "#724A1D";
  
  for (let i = 0; i < hour()+1; i++){
  	noStroke()
  	fill(250,230,188,225);
  	minrings[i].show(i*minscl+m, second());
  }

  for (let i = 0; i < hour(); i++){
  	strokeWeight(minscl/6);
  	stroke(c[int(random(0, c.length))]);
  	noFill();
  	rings[i].show(minscl+i*minscl, second());
  }
  pop();
  image(bg,0,0);
}

class Treering {

	constructor() {
		this.vertNum = 10;
		this.radStep = TAU/this.vertNum;
		this.maxRad = TAU * 2 + this.radStep * 6;
		this.noiseOffset = 100;
		this.noiseScale = 2;
		this.noiseZ = 5;	
	}

	show(size, morph){
		drawingContext.shadowBlur = 5;
		beginShape();
		for(this.r = 0; this.r < this.maxRad; this.r += this.radStep){
			this.additionalOffset = this.r > this.maxRad/2 ? 0 : 0.01;
			this.x = cos(this.r);
			this.y = sin(this.r);
			this.nv = noise(this.x * this.noiseScale + this.noiseOffset, this.y * this.noiseScale + this.additionalOffset, this.noiseZ+morph);
			this.noiseScale2 = map(this.nv, 0, 1, 0.01, 2);
			this.nv2 = noise(this.x * this.noiseScale2 + this.noiseOffset, this.y * this.noiseScale2 , this.noiseZ);
			this.radiusnoise = map(this.nv2, 0, 1, 0.5,1);
			this.radius = size * this.radiusnoise;
			this.x *= this.radius;
			this.y *= this.radius;
			curveVertex(this.x,this.y);
		}
		endShape();
	}
}
