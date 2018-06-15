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


var play = function() {
	
	var colorArr = [];
	
	generateNewMap()

	// if (questionFunctArr.length !== 0) {
		randomQuestionIndex = Math.floor(Math.random() * questionFunctArr.length)
		questionFunctArr[randomQuestionIndex](); // runs the 1st function in the questionFunctArr
		// questionFunctArr.splice(randomQuestionIndex, 1);
	// } else if (questionFunctArr.length === 0) {
	// 	console.log('GAME OVER')
	// }
}

play();



bonusQns.setAttribute("style", "display: none");
factQns.setAttribute("style", "display: visible");

bonusQns.setAttribute("style", "display: visible");
factQns.setAttribute("style", "display: none");



body {
	margin: 0;
	background-color: #FFE4C4;
}

#map {
	position: relative;
}

canvas {
    padding: 0;
    margin: 40px auto;
    margin-top: -40px; 
    display: block;
    background-color: rgba(0, 0, 0, 0);
    /*border: 1px solid red;*/
}


.game-info {
	margin: 60px auto;
	text-align: center;
	width: 800px;
	height: 50px;
	padding-bottom: 0px;
	/*background-color: white;*/
	position: relative;
	font-family: 'Karla', sans-serif;
	font-size: 16px;
	color: #555;
	letter-spacing: 0.05em;
}

#earth-stats {
	display: inline-block;
	padding: 0px;
	float: left;
	margin-left: 20px;
	/*background-color: green;*/
	width: 150px;
	text-align: left;
}

#title {
	display: inline-block;
	padding: 0px;
	/*background-color: blue;*/
	line-height: 11px;
	font-size: 17px;
	width: 200px;
	text-transform: uppercase;
}

#affected-count {
	display: inline-block;
	padding: 0px;
	float: right;
	margin-right: 20px;
	/*background-color: orange;*/
	width: 150px;
	text-align: right;
}

h2 {
	font-family: 'Inconsolata', monospace;
	color: red;
}

.factual {
	position: absolute;
	margin: 0 auto;
	width: 100%;
	height: auto;
}

.questions {
	margin: 10px auto;
	text-align: center;
	font-size: 15px;
	width: 600px;
	height: auto;
	padding-top: 0px;
	padding-bottom: 0px;
	/*background-color: white;*/
	position: relative;
	top: -25px;
	line-height: 35px;
}

.choices-row {
	margin: -15px auto 0 auto;
	width: auto;
	text-align: center;
	font-size: 18px;
	font-family: 'Karla', sans-serif;
	/*background-color: white;*/
}

#choice-one {
	display: inline-block;
	margin: 10px 30px;
	padding: 10px 20px;
/*	background-color: red;*/
	border: 2px solid red;
}

#choice-two {
	display: inline-block;
	margin: 10px 30px;
	padding: 10px 20px;
	/*background-color: yellow;*/
	border: 2px solid red;
}

#choice-three {
	display: inline-block;
	margin: 10px 30px;
	padding: 10px 20px;
	/*background-color: blue;*/
	border: 2px solid red;
}

#choice-four {
	display: inline-block;
	margin: 10px 30px;
	padding: 10px 20px;
	/*background-color: blue;*/
	border: 2px solid red;
}

.input-box {
	position: absolute;
	height: auto;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	margin: 0 auto;
	display: none;
}

#bonus {
	display: none;
}

.input {
	margin: 0 auto;
	text-align: center;
}

input[type=text] {
    width: 300px;
    padding: 12px 20px;
    margin: -5px auto;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    border: none;
    border-bottom: 2px solid red;
    background-color: rgba(0, 0, 0, 0);
    color: red;
    font-size: 20px;
    font-family: 'Inconsolata', monospace;
}

			margin: 10px auto;
			text-align: center;
			font-size: 15px;
			width: 600px;
			height: auto;
			padding-top: 0px;
			padding-bottom: 0px;
			top: -25px;
			line-height: 35px;
