var kiRed = 255;
var kiGreen = 50;
var kiBlue = 250;
var x = 200;
var i = [10,20,30,40,50,60];



function setup(){
    createCanvas(700,500);
  background(255);  

}

function draw(){
     if(mouseIsPressed){
         paint();
         rowOfSqaures();
     }
     
     size = [20,40,60,40,20];
     for(var i = 0; i < 5; i++){
         fill(255,90);
        ellipse((i+1)*100, 400, size[i],size[i]);
    } 
     
    
}

function paint(){
    kiBlue = random(0,255);
    kiGreen = random(0,255);
    kiBlue = random(0,255);
    stroke(0,90);
    strokeWeight(4);
    fill(kiBlue,kiGreen,kiRed,100);
    ellipse(mouseX,mouseY,50,50);
}

function rowOfSqaures(){
 for(var x = 50; x <= 600; x = x + 100){
         stroke(kiBlue,kiGreen,kiRed,90);
         fill(0,90);
        ellipse(x,100,50,50);    
     }
    
}