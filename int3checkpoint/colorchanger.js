/*Both of these commands allow the uesr to change the color of the background and make the color take effect.*/
var newBGColor=document.getElementById("newBGColor");
var colorbutton=document.getElementById("colorbutton");

/*If the user types in a color and clicks the button the background will change to the given color.*/
colorbutton.addEventListener("click",function(){
    document.body.style.backgroundColor = newBGColor.value;
})