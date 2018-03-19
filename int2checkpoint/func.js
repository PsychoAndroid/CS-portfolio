/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(random(400),random(400),random(400) );//background change


Balloons = function(x,y) {//balloon and lines
    stroke(random(400),random(250),random(250),230);
    line(x+8,y+8,random(40),random(40) );
    fill(random(400),random(400),random(400) );
    ellipse(x+5,y+5,35,35);
}


mouseClicked = function() {//on click will make balloon appear
    Balloons(mouseX,mouseY);
}



draw = function() {
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);