let onbulb=document.getElementById("onbulb");
let imagecat=document.getElementById("imagecat");
let switchon=document.getElementById("switchon");
let onbutton2=document.getElementById("onbutton");
let offbutton2=document.getElementById("offbutton");
function onbutton1(){
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchon.textContent = "Switch On";
    switchon.style.color = "red";
    onbutton2.style.backgroundColor = "green";
    offbutton2.style.backgroundColor = "#cbd2d9";
}
function offbutton1(){
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
     imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
     switchon.textContent = "Switch Off";
    switchon.style.color = "red";
    onbutton2.style.backgroundColor = "#cbd2d9";
    offbutton2.style.backgroundColor = "red";
}
