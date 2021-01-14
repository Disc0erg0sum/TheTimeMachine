//math
let mathNum = [
  ['98×0','5+3-8','4-4','(3+4)÷7-1','2+1-(1.5×2)','3875687284×0'],//0
  ['0.5×2' , '1+1-1'],//1 
  ['1×2' , '1+1'],//2
  ['1×3' , '1+2'],//3
  ['2×2' , '2+2'],//4
  ['1×5' , '2+3'],//5
  ['1×6' , '3+3'],//6
  ['3.5×2' ,'4+3'],//7
  ['2×4' , '5+3'],//8
  ['3×3' , '6+3'],//9
  ['0+10','1+9'],//10
  ['1+10','2+9'],//11 
  ['2+10','3+9'],//12
  ['10+3','4+9'],//13
  ['10+4','5+9'],//14
  ['10+5','6+9'],//15
  ['10+6','7+9'],//16
  ['10+7','8+9'],//17
  ['10+8','9+9',],//18
  ['10+9','10+9'],//19
  ['0+20','11+9'],//20
  ['1+20','12+9','42÷2'],//21  
  ['2+20','13+9'],//22
  ['20+3','14+9'],//23
  ['20+4','15+9'],//24
  ['20+5','5×5'],//25
  ['20+6','69-43'],//26
  ['20+7','3×9'],//27
  ['20+8','4×7'],//28
  ['20+9','58÷2'],//29
  ['0+30'],//30
  ['1+30'],//31 
  ['2+30'],//32
  ['30+3'],//33
  ['30+4'],//34
  ['30+5'],//35
  ['30+6'],//36
  ['30+7'],//37
  ['30+8'],//38
  ['30+9'],//39
  ['0+40'],//40
  ['1+40'],//41 
  ['2+40'],//42
  ['40+3'],//43
  ['40+4'],//44
  ['40+5'],//45
  ['40+6'],//46
  ['40+7'],//47
  ['40+8'],//48
  ['40+9'],//49
  ['0+50'],//50
  ['1+50'],//51 
  ['2+50'],//52
  ['50+3'],//53
  ['50+4'],//54
  ['50+5'],//55
  ['50+6'],//56
  ['50+7'],//57
  ['50+8'],//58
  ['50+9'],//59
];

//text
let germanNum = [
  'null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun',
  'zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn',
  'zwanzig','einundzwanzig','zweiundzwanzig','dreiundzwanzig','vierundzwanzig','fünfundzwanzig','sechsundzwanzig','siebenundzwanzig','achtundzwanzig','neunundzwanzig',
  'dreißig','einunddreißig','zweiunddreißig','dreiunddreißig','vierunddreißig','fünfunddreißig','sechsunddreißig','siebenunddreißig','achtunddreißig','neununddreißig',
  'vierzig','einundvierzig','zweiundvierzig','dreiundvierzig','vierundvierzig','fünfundvierzig','sechsundvierzig','siebenundvierzig','achtundvierzig','neunundvierzig',
  'fünfzig','einundfünfzig','zweiundfünfzig','dreiundfünfzig','vierundfünfzig','fünfundfünfzig','sechsundfünfzig','siebenundfünfzig','achtundfünfzig','neunundfünfzig'
];

function getMathNum(num){
  let r = Math.floor(random(mathNum[num].length));
  let out = {disp : mathNum[num][r] , ans : num , info : ''};
  return out;
}

function getLangNum(num){
  let out = {disp : germanNum[num] , ans : num , info : germanNum[1]};
  return out;

}

function getRandNum(num){
  let r = random();
  if(r > 0.5)return getMathNum(num);
  else return getLangNum(num);
}

//////////////////////////////////////////////////////////////////////


let colIndex = 0;
let cols;
const fps = 60;
const span = fps;

/*function preload(){
  font = loadFont();
}*/

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  frameRate(fps);

  textFont('Titillium Web');

  //cols = [color(255,100,100),color(45,150,19),color(245,150,198),color(24,150,15),color(80,85,90)];
  cols = [color('#E4CEF2'),color('#E36A2E'),color('#CF2C34'),color('#74184C'),color('#465C85')];

  updateArray();

  background(245);
}



function draw(){
  if(frameCount % span == 0){
    updateArray();
  }

  background(245);
  fill(cols[colIndex]);

  let ts = min(windowWidth,windowHeight)*0.25;
  textAlign(LEFT,CENTER);

  setTextSize(hArray.disp,ts);
  text(hArray.disp,windowWidth*0.1,windowHeight/2-ts*0.6); 
  setTextSize(mArray.disp,ts);
  text(mArray.disp,windowWidth*0.1,windowHeight/2+ts*0.6); 
}

function setTextSize(str,ts){
  textSize(ts);
  let w = 0.7*windowWidth;
  let tw = textWidth(str);
  if(tw > w){
    textSize(ts * w / tw);
  } else textSize(ts);
}

function updateArray(){
  hArray = getRandNum(hour());
  mArray = getRandNum(minute());

  colIndex += Math.ceil(random(cols.length-1));
  colIndex = colIndex%(cols.length); 
}










