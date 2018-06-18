var canvas = document.querySelector('canvas');

canvas.setAttribute("width", "800px")
canvas.setAttribute("height", "430px")

var c = canvas.getContext('2d');

var radius = 3;

var colorArr = [];

var totalDotsCount = 0;

// var makeCircle = function(x, y) {

// 	c.beginPath();
// 	c.arc(x, y, radius, 0, Math.PI * 2, false);
// 	// console.log(colorArr);
// 	randomIndex = Math.floor(Math.random() * colorArr.length);
// 	c.fillStyle = colorArr[randomIndex];

// 	// c.fillStyle = "white";

// 	c.fill();
// 	colorArr.splice(randomIndex, 1);
// }

var mapArrObj = [
{
	x: 270,
	y: 10,
	dots: [3, 2, 1],
	gaps: [2, 2]
},
{
	x: 270,
	y: 20,
	dots: [6, 5, 4],
	gaps: [2, 2]
},

]



var makeMap = function() {

	// make each row
	for (var k = 0; k < mapArrObj.length; k++) {

		x = mapArrObj[k].x;
		y = mapArrObj[k].y;

		// makes each set of dots
		for (var j = 0; j < mapArrObj[k].dots.length; j++) {

			// makes each dot
			for (var i = 0; i < mapArrObj[k].dots[j]; i++) {

			// draws the dot
			c.beginPath();
			c.arc(x, y, radius, 0, Math.PI * 2, false);
				// console.log(colorArr);
			randomIndex = Math.floor(Math.random() * colorArr.length);
			c.fillStyle = colorArr[randomIndex];
				// c.fillStyle = "white";
			c.fill();
			colorArr.splice(randomIndex, 1);

			// sets the distance bewteen each dot
			x += 10; // will + 10 each time a dot is made

			// counts the numbers of dots made
			totalDotsCount ++

			}

			// sets the gap distance
			// sets the distance between each set of dots because x += empty pixels
			x += mapArrObj[k].gaps[j] * 10;
			
		}

	}

}


var generateNewMap = function() {

	remain = 1175 - affected;
	var colorArr = [];

	// push into an empty array the number of affected dots, to be used later to set color of dots
	for (var i = 0; i < affected; i++) {
		colorArr.push("red");
	}

	// push into an empty array the number of NON affected dots, to be used later to set color of dots
	for (var i = 0; i < remain; i++) {
		//push random GREEN color
		var greenColorArr = ['#24436C', '#90AD56', '#607D37', '#375A28', '#90AD56', '#607D37', '#375A28'];
		var randomColorIndex = Math.floor(Math.random() * greenColorArr.length);
		colorArr.push(greenColorArr[randomColorIndex]);
	}

	makeMap();
}



