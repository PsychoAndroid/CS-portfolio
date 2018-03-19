/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {

background(120,120,120);

for(var i=0; i < width; i+=50 ) {
    for(var j=0; j < height; j+=50 ){
    var size=50;
        fill( (150),(250),(400) )
        stroke( 150, 150,200 )
        ellipse(i,j,size,size)
        fill((25),100,150 )
        stroke(150,25, 400 )
        rect(i,j,size,size)
    }
}

};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);