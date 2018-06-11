var score = 0;
var remain = 70 - score;

var xPosition = [];

for (var i = 10; i < 710; i += 10) {
	xPosition.push(i)
}
// console.log(xPosition)

var x = xPosition[Math.floor(Math.random() * 71)]
var y = 10;
var radius = 3;

makeBlue(x)