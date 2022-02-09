
var gDebugmode = true;



// Setup code goes here
function setup() {
  createCanvas(1200, 600);
  textSize(24);
  textAlign(LEFT);
 }


// Draw code goes here
function draw() {
  background(164,172,134);
   drawEllipse();
   drawBezier();
  drawcurveVertex();
  drawWhiteEllipse();
   drawWhiteTwoEllipse();
  drawarc();
  drawBeanie();
  drawCapbeanie()
if (gDebugmode==true) {
  drawDebugInfo();
} 
 } 




function drawcurveVertex(){

}

function drawBezier(){
  push();
  translate(482,108);
  noFill();
  noStroke(105, 102, 0);
  line(55, 20, 0, 10);
  line(90, 90, 15, 80);
  stroke(0, 0, 0);
  strokeWeight(10);
  //bezier(85, 20, 10, 10, 90, 90, 35, 180);
  bezier(55, 40, 20, 350, 25,25,-50, 330, 25, 370);
  pop();
}
function drawEllipse() {
  
  noStroke();
  fill(127,79,36);
  ellipse(width/2,height/2,350,390);
}
function drawWhiteEllipse() {
  push();
  noStroke();
  fill(242,244,243);
  ellipse(542,268,50,30);
  pop();
}
function drawWhiteTwoEllipse() {

  noStroke();
  fill(242,244,243);
  ellipse(676,268,50,30);
}

function drawarc(){
  arc(50, 100, 90, 50, 15, PI + QUARTER_PI, CHORD);
describe('white open arc with black outline with top right missing');
}



function drawDebugInfo() {
  fill(0,255,0);
  text( "X: "+ mouseX + " Y: " + mouseY,20,height-20);   
}


function drawBeanie(){ 
push();
translate(402,117)
beginShape(TRIANGLE_STRIP);
fill(20,33,61);
vertex(20,40)
vertex(30, 95);
vertex(40, 40);
vertex(50, 95);
vertex(60, 40);
vertex(70, 95);
vertex(80, 40);
vertex(90, 95);
vertex(100, 40);
vertex(110, 95);
vertex(120, 40);
vertex(130, 95);
vertex(140, 40);
vertex(150, 95);
vertex(160, 40);
vertex(170, 90);
endShape(); 
pop();
}
function drawCapbeanie(){
  push();
  translate(388,0)
  fill(20,33,61);
  beginShape();
  vertex(-5, 300);
  quadraticVertex(155, 104, 233, 99);
  bezierVertex(287, 103, 389, 123, 404, 303);
  endShape(CLOSE)
 pop();
}



 



  




