var piggyback=document.getElementById("piggyback");
var solaire=document.getElementById("solaire");
var display=document.getElementById("display");

piggyback.addEventListener("click", function(){
    display.innerHTML= "BACKING UP!!!!!!!!!!!!!!!";
});

solaire.addEventListener("click", function() {
    display.innerHTML= "If only i was so grossly incandescent.";
});

