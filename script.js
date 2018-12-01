var result = document.querySelector('h3');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.querySelector('body');
var randomBtn = document.getElementById('random');

color1.addEventListener('input',changeColor);

color2.addEventListener('input',changeColor);

result.textContent = "linear-gradient(to right, RGB(255,0,0), RGB(0,0,255))";

function changeColor() {
	// console.log(color1.value,color2.value);
	body.style.background = 
	"linear-gradient(to right,"
	+color1.value 
	+ ","
	+color2.value
	+")";
	result.textContent = body.style.background+";";
}

function getRandomNumber(min,max){
	return Math.floor(Math.random() * (max - min)) + min;
}

function componentToHex(c) {
    // console.log(typeof(c));
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

randomBtn.addEventListener('click',function(){
	var r1 = getRandomNumber(0,256);
	var g1 = getRandomNumber(0,256);
	var b1 = getRandomNumber(0,256);
	var r2 = getRandomNumber(0,256);
	var g2 = getRandomNumber(0,256);
	var b2 = getRandomNumber(0,256);
	color1.value = rgbToHex(r1,g1,b1);
	color2.value = rgbToHex(r2,g2,b2);
	// console.log(color1.value, color2.value);
	changeColor();
})
