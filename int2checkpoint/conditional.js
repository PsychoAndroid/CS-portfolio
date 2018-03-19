/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 350;
var yPos = 25;
var weight = 15;


draw = function() {
   background();
   
    rect(mouseX,mouseY,20,20);
    

    //Changes mouse's color and stroke
    if(mouseX > 200) {
        fill(0,0,150);
        strokeWeight(5);
        stroke(96,5,250);
        
        ellipse(50,25,50,50);
    }
    else {
        fill(0,0,96);
        strokeWeight(2);
        stroke(76,10,245);
        
        ellipse(50,25,50,50);
       strokeWeight(weight);
       stroke(96,5,25);
       fill(0,0,100);
       
        
    }
     
     if (mouseY > 200) {
     fill(0,0,300);
     strokeWeight(3);
     stroke(0,0,400);
     
     
     }
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);