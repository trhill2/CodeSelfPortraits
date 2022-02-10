
var gDebugmode = true;



// Setup code goes here
function setup() {
  createCanvas(600, 600);
  textSize(24);
  textAlign(LEFT);
 }


// Draw code goes here
function draw() {
  background(164,172,134);
  drawEar();
  drawEarrings();
  drawShirt();
  drawBody();
  drawEllipse();
  drawWhiteEllipse();
  drawWhiteTwoEllipse();
  drawHair(); 
  drawHairright();
  drawBeanie();
  drawCapbeanie();
  drawPupil();
  drawPupiltwo();
  drawSeptum();
  drawNose();
  drawMouth();
  drawTeeth();
  drawTongue();
  drawSmiley();
  

if (gDebugmode==true) {
  drawDebugInfo();
} 
 } 





//DRAW EARS
function drawEar(){
  noStroke();
  fill(127,79,36);
  ellipse(120,290,50,60); 
  ellipse(480,290,50,60);
}

//DRAW EARRINGS
function drawEarrings(){
  noStroke();
  fill(168,169,173);
  ellipse(115,313,10,10); 
  ellipse(485,313,10,10);
}

//DRAW SHIRT
function drawShirt(){
  noStroke();
  fill(194,24,7);
  rect(136,519,320,400,40);
}
//DRAW BODY
function drawBody(){
  noStroke();
  fill(123,75,33);
  rect(244,475,100,55);
  arc(294,527,100,78,0,PI,CLOSE);
}



//DRAW HEAD
function drawEllipse() {
  noStroke();
  fill(127,79,36);
  ellipse(width/2,height/2,350,390);
}

//DRAW LEFT EYE
function drawWhiteEllipse() {
  push();
  noStroke();
  fill(242,244,243);
  ellipse(232,268,50,30);
  pop();
}
function drawPupil() {
  push();
  noStroke();
  fill(0);
  ellipse(232,268,30,28);
  pop();
}

// DRAW RIGHT EYE 
function drawWhiteTwoEllipse() {
  noStroke();
  fill(242,244,243);
  ellipse(366,268,50,30);
}

function drawPupiltwo() {
  push();
  noStroke();
  fill(0);
  ellipse(366,268,30,28);
  pop();
}



/*function drawDebugInfo() {
  fill(0,255,0);
  text( "X: "+ mouseX + " Y: " + mouseY,20,height-20);   
}*/

//DRAW HAIR LEFT
function drawHair(){
  noFill();
  stroke(0);
  strokeWeight(20);
  beginShape();
  curveVertex(170,200);
  curveVertex(130,200);
  curveVertex(170,250);
  curveVertex(130,250);
  curveVertex(170,300);
  curveVertex(130,300);
  curveVertex(170,350);
  curveVertex(130,350);
  curveVertex(170,400);
  curveVertex(130,400);
  curveVertex(170,450);
  curveVertex(130,450);
  curveVertex(170,500);
  curveVertex(130,500);
  curveVertex(170,550);
  curveVertex(130,550);
  endShape();   
}
// HAIR RIGHT SIDE
function drawHairright(){
  noFill();
  stroke(0);
  strokeWeight(20);
  beginShape();
  curveVertex(470,200);
  curveVertex(430,200);
  curveVertex(470,250);
  curveVertex(430,250);
  curveVertex(470,300);
  curveVertex(430,300);
  curveVertex(470,350);
  curveVertex(430,350);
  curveVertex(470,400);
  curveVertex(430,400);
  curveVertex(470,450);
  curveVertex(430,450);
  curveVertex(470,500);
  curveVertex(430,500);
  curveVertex(470,550);
  curveVertex(430,550);
  endShape();   
}

//DRAW BEANIE REC
function drawBeanie(){ 
  push();
  noStroke();
  fill(20,33,61);
  rect(120,190,360,50,10);
  pop();
}

//DRAW BEANIE CAP
function drawCapbeanie(){
  push();
  noStroke();
  fill(20,33,61);
  arc(300,200,325,270,PI,0,CLOSE);
  pop();
}

  //DRAW SEPTUM
  function drawSeptum(){
    strokeWeight(2);
    stroke(168,169,173);
    arc(309, 349, 15, 15,  -PI,0);
    ellipse(302,349,3,3);
    ellipse(317,349,3,3);
  }

  //NOSE
  function drawNose(){
    noFill();
    strokeWeight(4);
    stroke(0);
    beginShape();  
    vertex(300, 288);
    bezierVertex(320, 340, 330, 340, 288, 345);
    endShape();
  }

  //DRAW MOUTH
  function drawMouth(){
    push();
    noStroke();
    fill(0);
    arc(300,390,115,100,0,PI,CLOSE);
    pop();
    
  }

  //DRAW TEETH 
  function drawTeeth(){
    noStroke();
    fill(255,255,255)
    arc(300,422,85,34,0,PI,CLOSE);
    rect(243,390,115,10,2);
  }
  //DRAW TOUNGUE
  function drawTongue(){
    noStroke();
    fill(254,127,156);
    arc(300,415,60,74,0,PI,CLOSE);
  }

  //DRAW SMILEY
  function drawSmiley(){
    noFill();
    strokeWeight(2);
    stroke(168,169,173);
    arc(300, 395, 10, 10,  -PI,0);
    ellipse(296,396,3,3);
    ellipse(304,396,3,3);
  }





    //bezierVertex(298,300,304,335,320,350,300,290,280,350);
    
  







 



  




