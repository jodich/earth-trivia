// selectors and styling for cavas
var canvas = document.querySelector('canvas');
canvas.setAttribute("width", "800px")
canvas.setAttribute("height", "430px")
var c = canvas.getContext('2d');

// global variables
var radius = 3;
var colorArr = [];

var makeMap = function() {

	// make each row, until all the length of the mapArrObj, which is the total number of rows
	for (var k = 0; k < mapArrObj.length; k++) {

		// defines the value of x and y
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
				x += 10; // will + 10 on the x axis each time a dot is made

			}

			// sets the gap distance
			// sets the distance between each set of dots because x += empty pixels
			x += mapArrObj[k].gaps[j] * 10;
			
		}

	}

}


var generateNewMap = function() {

	// finds out how many remaining
	remain = 1175 - affected;

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


// dots positioning on the map
var mapArrObj = [

// row 1
{
	x: 270,
	y: 10,
	dots: [2],
	gaps: [0]
},
// row 2
{
	x: 240,
	y: 20,
	dots: [6],
	gaps: [0]
},
// row 3
{
	x: 170,
	y: 30,
	dots: [14],
	gaps: [0]
},
// row 4
{
	x: 170,
	y: 40,
	dots: [16, 2, 8],
	gaps: [17, 3, 0]
},
// row 5
{
	x: 110,
	y: 50,
	dots: [3, 4, 8, 2, 9],
	gaps: [4, 3, 16, 4, 0]
},
// row 6
{
	x: 110,
	y: 60,
	dots: [4, 6, 8, 2, 17, 2],
	gaps: [1, 3, 15, 2, 7, 0]
},
// row 7
{
	x: 100,
	y: 70,
	dots: [5, 8, 8, 26],
	gaps: [1, 1, 19, 0]
},
// row 8
{
	x: 20,
	y: 80,
	dots: [5, 2, 12, 8, 2, 36],
	gaps: [2, 1, 2, 4, 2, 0]
},
// row 9
{
	x: 10,
	y: 90,
	dots: [24, 4, 2, 1, 2, 36],
	gaps: [1, 1, 2, 2, 2, 0]
},
// row 10
{
	x: 10,
	y: 100,
	dots: [24, 3, 2, 40],
	gaps: [1, 5, 2, 0]
},
// row 11
{
	x: 10,
	y: 110,
	dots: [17, 3, 2, 4, 31, 2],
	gaps: [3, 3, 4, 1, 3, 0]
},
// row 12
{
	x: 10,
	y: 120,
	dots: [4, 12, 3, 2, 1, 28, 1],
	gaps: [1, 3, 10, 2, 2, 3, 0]
},
// row 13
{
	x: 20,
	y: 130,
	dots: [3, 10, 4, 33, 1],
	gaps: [3, 3, 11, 3, 0]
},
// row 14
{
	x: 10,
	y: 140,
	dots: [1, 10, 5, 31, 1],
	gaps: [7, 2, 10, 2, 0]
},
// row 15
{
	x: 100,
	y: 150,
	dots: [16, 8, 21, 1],
	gaps: [9, 2, 2, 0]
},
// row 16
{
	x: 110,
	y: 160,
	dots: [15, 3, 3, 4, 17, 1],
	gaps: [9, 2, 1, 1, 2, 0]
},
// row 17
{
	x: 110,
	y: 170,
	dots: [12, 3, 6, 15, 2],
	gaps: [12, 4, 1, 3, 0]
},
// row 18
{
	x: 110,
	y: 180,
	dots: [12, 4, 19, 2],
	gaps: [12, 6, 2, 0]
},
// row 19
{
	x: 110,
	y: 190,
	dots: [12, 26, 2],
	gaps: [11, 2, 0]
},
// row 20
{
	x: 120,
	y: 200,
	dots: [9, 31],
	gaps: [12, 0]
},
// row 21
{
	x: 130,
	y: 210,
	dots: [4, 1, 17, 10],
	gaps: [3, 12, 2, 0]
},
// row 22
{
	x: 130,
	y: 220,
	dots: [4, 1, 16, 3, 4, 1],
	gaps: [3, 12, 4, 2, 2, 0]
},
// row 23
{
	x: 150,
	y: 230,
	dots: [5, 2, 14, 1, 3, 1],
	gaps: [1, 10, 7, 4, 2, 0]
},
// row 24
{
	x: 170,
	y: 240,
	dots: [4, 13, 2, 1, 4],
	gaps: [13, 7, 3, 2, 0]
},
// row 25
{
	x: 190,
	y: 250,
	dots: [2, 9, 1, 3],
	gaps: [17, 12, 2, 0]
},
// row 26
{
	x: 190,
	y: 260,
	dots: [5, 8],
	gaps: [15, 0]
},
// row 27
{
	x: 190,
	y: 270,
	dots: [7, 7, 1, 4],
	gaps: [13, 16, 1, 0]
},
// row 28
{
	x: 190,
	y: 280,
	dots: [8, 6, 5, 3],
	gaps: [12, 17, 1, 0]
},
// row 29
{
	x: 190,
	y: 290,
	dots: [10, 6, 1, 2, 3],
	gaps: [10, 1, 16, 5, 0]
},
// row 30
{
	x: 190,
	y: 300,
	dots: [11, 6, 1, 1, 3],
	gaps: [9, 1, 21, 1, 0]
},
// row 31
{
	x: 200,
	y: 310,
	dots: [9, 7, 7, 2],
	gaps: [11, 19, 2, 0]
},
// row 32
{
	x: 200,
	y: 320,
	dots: [9, 5, 7, 1],
	gaps: [11, 20, 4, 0]
},
// row 33
{
	x: 200,
	y: 330,
	dots: [9, 3, 9],
	gaps: [12, 21, 0]
},
// row 34
{
	x: 200,
	y: 340,
	dots: [8, 2, 9],
	gaps: [13, 22, 0]
},
// row 35
{
	x: 210,
	y: 350,
	dots: [6, 9, 1],
	gaps: [38, 4, 0]
},
// row 36
{
	x: 210,
	y: 360,
	dots: [6, 3, 2],
	gaps: [44, 4, 0]
},
// row 37
{
	x: 210,
	y: 370,
	dots: [4, 1, 2],
	gaps: [47, 5, 0]
},
// row 38
{
	x: 210,
	y: 380,
	dots: [4, 2],
	gaps: [52, 0]
},
// row 39
{
	x: 210,
	y: 390,
	dots: [2, 1],
	gaps: [54, 0]
},
// row 40
{
	x: 210,
	y: 400,
	dots: [2],
	gaps: [0]
},
// row 41
{
	x: 210,
	y: 410,
	dots: [2],
	gaps: [0]
},
// row 42
{
	x: 210,
	y: 420,
	dots: [1],
	gaps: [0]
}
]


