/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 10;
var yPos = 10;
var weight = 0;
var xPos2 = 40;
var yPos2 = 40;
var weight2 = 0;
var xPos3 = 150
var yPos3 = 5
var weight3 = 4
var weight4 = 2
var xPos4 = 10
var yPos4= 10


draw = function() {
    
    //Draws smaller circles heading to the bottom right corner
    strokeWeight(2);
    stroke(60,10,150);
    fill(100,100,100)
    ellipse(xPos,yPos,30,30);
    xPos = xPos + 20;
    yPos = yPos + 20;
    
    //Draws bigger circles heading to the bottom right corner
    strokeWeight(weight);
    stroke(60,10,150);
    fill(100,100,100)
    ellipse(xPos,yPos,60,60);
    xPos = xPos + 20;
    yPos = yPos + 20;
    
    //Draws the other set of tiny circles pointing in the same direction as the other circles.
    strokeWeight(weight2);
    stroke(60,10,150);
    fill(100,100,100)
    ellipse(xPos2,yPos2,30,30);
    xPos2 = xPos2 + 40;
    yPos2 = yPos2 + 40;
    
    //Draws line of circles on the right
    strokeWeight(weight3)
    stroke(60,10,150)
    fill(100,100,100)
    ellipse(xPos3,yPos3,60,60)
    xPos3 = xPos3 + 40
    yPos3 = yPos3 + 40
    
    //Draws line of circles on the right
    strokeWeight(weight4)
    stroke(60,10,150)
    fill(100,100,100)
    ellipse(xPos4,yPos4,60,60)
    xPos4 = xPos4 + 5
    yPos4 = yPos4 + 40
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
