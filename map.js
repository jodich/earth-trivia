var canvas = document.querySelector('canvas');

canvas.setAttribute("width", "800px")
canvas.setAttribute("height", "430px")

var c = canvas.getContext('2d');


var radius = 3;
var makeCircle = function(x, y) {
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.fillStyle = "gray";
	c.fill();
}



makeCircle(270, 10);
makeCircle(280, 10);

makeCircle(240, 20);
makeCircle(250, 20);
makeCircle(260, 20);
makeCircle(270, 20);
makeCircle(280, 20);
makeCircle(290, 20);

// row 3
x = 170;
y = 30;
for (var i = 0; i < 14; i++) {
	makeCircle(x, y);
	x += 10;
}

function makeRow4() {
	x = 170;
	y = 40;
	for (var i = 0; i < 16; i++) {
		makeCircle(x, y);
		x += 10;
	}

	makeCircle(500, 40);
	makeCircle(510, 40);

	x = 550;
	for (var i = 0; i < 8; i++) {
		makeCircle(x, y);
		x += 10;
	}
}
makeRow4()

function makeRow5() {
	x = 110;
	y = 50;
	for (var i = 0; i < 3; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 180;
	for (var i = 0; i < 4; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 250;
	for (var i = 0; i < 8; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 490;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 550;
	for (var i = 0; i < 9; i++) {
		makeCircle(x, y);
		x += 10;
	}	
}
makeRow5()

function makeRow6() {
	x = 110;
	y = 60;
	for (var i = 0; i < 4; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 150;
	for (var i = 0; i < 6; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 220;
	for (var i = 0; i < 8; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 480;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 510;
	for (var i = 0; i < 17; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 760;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
}
makeRow6()

function makeRow7() {
	x = 100;
	y = 70;
	for (var i = 0; i < 5; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 160;
	for (var i = 0; i < 8; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 250;
	for (var i = 0; i < 8; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 520;
	for (var i = 0; i < 26; i++) {
		makeCircle(x, y);
		x += 10;
	}
}
makeRow7()

function makeRow8() {
	x = 20;
	y = 80;
	for (var i = 0; i < 5; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 90;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}

	x = 120;
	for (var i = 0; i < 12; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 260;
	for (var i = 0; i < 8; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 380;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 420;
	for (var i = 0; i < 36; i++) {
		makeCircle(x, y);
		x += 10;
	}
}
makeRow8()

function makeRow9() {
	x = 10;
	y = 90;
	for (var i = 0; i < 24; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 260;
	for (var i = 0; i < 4; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 310;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 340;
	for (var i = 0; i < 1; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 370;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 420;
	for (var i = 0; i < 36; i++) {
		makeCircle(x, y);
		x += 10;
	}
}
makeRow9()

function makeRow10() {
	x = 10;
	y = 100;
	for (var i = 0; i < 24; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 260;
	for (var i = 0; i < 4; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 340;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 380;
	for (var i = 0; i < 40; i++) {
		makeCircle(x, y);
		x += 10;
	}
}
makeRow10()

function makeRow11() {
	x = 10;
	y = 110;
	for (var i = 0; i < 17; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 210;
	for (var i = 0; i < 3; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 270;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 330;
	for (var i = 0; i < 4; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 380;
	for (var i = 0; i < 31; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 720;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
}
makeRow11()

function makeRow12() {
	x = 10;
	y = 120;
	for (var i = 0; i < 4; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 60;
	for (var i = 0; i < 12; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 210;
	for (var i = 0; i < 3; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 340;
	for (var i = 0; i < 2; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 380;
	for (var i = 0; i < 1; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 410;
	for (var i = 0; i < 28; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 720;
	for (var i = 0; i < 1; i++) {
		makeCircle(x, y);
		x += 10;
	}
}
makeRow12()

function makeRow13() {
	x = 20;
	y = 130;
	for (var i = 0; i < 3; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 80;
	for (var i = 0; i < 10; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 210;
	for (var i = 0; i < 4; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 360;
	for (var i = 0; i < 33; i++) {
		makeCircle(x, y);
		x += 10;
	}
	x = 720;
	for (var i = 0; i < 1; i++) {
		makeCircle(x, y);
		x += 10;
	}
}
makeRow13()
















