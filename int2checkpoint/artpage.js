/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(100,100,110)//creates  the rest of the colosseum

draw = function() {
for(var x=50; x < width; x+=100) {//creates collums
    for(var y=100; y < height; y+=10) {
    var size=75;
        fill( (0),(0),(0) );
        ellipse(x,y,size,size);
        
    }
}

if(mouseX<200){//switches moon to the right side
    fill(0,0,400)
    stroke(0,0,)
    ellipse(350,100,50,50)
}

else {//switches moon to the left side
    fill(0,0,400)
    ellipse(50,100,50,50)
}

decorate=function (x,y) {//randomized color circles
    fill(random (100),random(100),random(150))
    ellipse(x+10,y+10,10,10)
}

mouseClicked=function(){//on click will add decortive circle
    decorate(mouseX,mouseY);
}

};    


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);