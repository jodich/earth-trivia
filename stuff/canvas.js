// each circle in the canvas is a static object with an unique x and y position and a color of either black or red
// the color of the circles will indicate the score, black as unaffected areas and red as affected areas
// upon answering each question, if it's right, the number of black circles will not change
// if wrong, the number of red circles will increas (number of black circles will decrease)
// question: after every 4 questions of fact-based answer, the 5th question will be a luck based one 50/50 chance
// if guessed wrongly, the number of red circles will increase as well

var canvas = document.querySelector('canvas');

canvas.setAttribute("width", "800px")
canvas.setAttribute("height", "430px")

var c = canvas.getContext('2d');

function makeBlue() {
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.fillStyle = "blue";
	c.fill();
	x += 10;
}

function makeRed() {
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.fillStyle = "red";
	c.fill();
	x += 10;
}

var radius = 3;

var x = 10;
var y = 10;

for (var j = 0; j < 42; j++) {

	x = 10;

	for (var i = 0; i < 79; i++) {
		
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.fillStyle = "gray";
	c.fill();
	x += 10;
	}

	y += 10;

}