var canvas = document.querySelector('canvas');

canvas.setAttribute("width", "800px")
canvas.setAttribute("height", "430px")

var c = canvas.getContext('2d');

var radius = 3;

var colorArr = [];

var makeCircle = function(x, y) {

	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	// console.log(colorArr);
	randomIndex = Math.floor(Math.random() * colorArr.length);
	c.fillStyle = colorArr[randomIndex];

	// c.fillStyle = "white";

	c.fill();
	colorArr.splice(randomIndex, 1);
}


function generateNewMap() {

	remain = 1175 - affected;

	for (var i = 0; i < affected; i++) {
		colorArr.push("red")
	}

	for (var i = 0; i < remain; i++) {
		colorArr.push("#999")
	}



	function makeMap() {

		function makeRow1() {
			x = 270;
			y = 10;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow1()

		function makeRow2() {
			x = 240;
			y = 20;
			for (var i = 0; i < 6; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow2()

		function makeRow3() {
			x = 170;
			y = 30;
			for (var i = 0; i < 14; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow3()

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

		function makeRow14() {
			x = 10;
			y = 140;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 90;
			for (var i = 0; i < 10; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 210;
			for (var i = 0; i < 5; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 360;
			for (var i = 0; i < 31; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 690;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow14()

		function makeRow15() {
			x = 100;
			y = 150;
			for (var i = 0; i < 16; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 350;
			for (var i = 0; i < 8; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 450;
			for (var i = 0; i < 21; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 680;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow15()

		function makeRow16() {
			x = 110;
			y = 160;
			for (var i = 0; i < 15; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 350;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 400;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 440;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 490;
			for (var i = 0; i < 17; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 680;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow16()

		function makeRow17() {
			x = 110;
			y = 170;
			for (var i = 0; i < 12; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 350;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 430;
			for (var i = 0; i < 6; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 500;
			for (var i = 0; i < 15; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 680;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow17()

		function makeRow18() {
			x = 110;
			y = 180;
			for (var i = 0; i < 12; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 350;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 460;
			for (var i = 0; i < 19; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 670;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow18()

		function makeRow19() {
			x = 110;
			y = 190;
			for (var i = 0; i < 12; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 340;
			for (var i = 0; i < 26; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 620;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow19()

		function makeRow20() {
			x = 120;
			y = 200;
			for (var i = 0; i < 9; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 330;
			for (var i = 0; i < 31; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow20()

		function makeRow21() {
			x = 130;
			y = 210;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 200;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 330;
			for (var i = 0; i < 17; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 520;
			for (var i = 0; i < 9; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow21()

		function makeRow22() {
			x = 130;
			y = 220;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 200;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 330;
			for (var i = 0; i < 16; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 540;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 590;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 650;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow22()

		function makeRow23() {
			x = 150;
			y = 230;
			for (var i = 0; i < 5; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 210;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 330;
			for (var i = 0; i < 14; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 550;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 600;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 650;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow23()

		function makeRow24() {
			x = 170;
			y = 240;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 340;
			for (var i = 0; i < 13; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 540;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 600;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 630;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow24()

		function makeRow25() {
			x = 190;
			y = 250;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 380;
			for (var i = 0; i < 9; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 590;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 620;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow25()

		function makeRow26() {
			x = 190;
			y = 260;
			for (var i = 0; i < 5; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 390;
			for (var i = 0; i < 8; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow26()

		function makeRow27() {
			x = 190;
			y = 270;
			for (var i = 0; i < 7; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 390;
			for (var i = 0; i < 7; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 620;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 640;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow27()

		function makeRow28() {
			x = 190;
			y = 280;
			for (var i = 0; i < 8; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 390;
			for (var i = 0; i < 6; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 620;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 680;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow28()

		function makeRow29() {
			x = 190;
			y = 290;
			for (var i = 0; i < 10; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 390;
			for (var i = 0; i < 6; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 460;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 630;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 700;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow29()

		function makeRow30() {
			x = 190;
			y = 300;
			for (var i = 0; i < 11; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 390;
			for (var i = 0; i < 6; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 460;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 680;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 700;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow30()

		function makeRow31() {
			x = 200;
			y = 310;
			for (var i = 0; i < 9; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 400;
			for (var i = 0; i < 7; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 660;
			for (var i = 0; i < 7; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 750;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow31()

		function makeRow32() {
			x = 200;
			y = 320;
			for (var i = 0; i < 9; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 400;
			for (var i = 0; i < 5; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 650;
			for (var i = 0; i < 7; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 760;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow32()

		function makeRow33() {
			x = 200;
			y = 330;
			for (var i = 0; i < 9; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 410;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 650;
			for (var i = 0; i < 9; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow33()

		function makeRow34() {
			x = 200;
			y = 340;
			for (var i = 0; i < 8; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 410;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 650;
			for (var i = 0; i < 9; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow34()

		function makeRow35() {
			x = 210;
			y = 350;
			for (var i = 0; i < 6; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 650;
			for (var i = 0; i < 9; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 780;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow35()

		function makeRow36() {
			x = 210;
			y = 360;
			for (var i = 0; i < 6; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 710;
			for (var i = 0; i < 3; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 780;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow36()

		function makeRow37() {
			x = 210;
			y = 370;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 720;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 780;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow37()

		function makeRow38() {
			x = 210;
			y = 380;
			for (var i = 0; i < 4; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 770;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow38()

		function makeRow39() {
			x = 210;
			y = 390;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
			x = 770;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow39()

		function makeRow40() {
			x = 210;
			y = 400;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow40()

		function makeRow41() {
			x = 210;
			y = 410;
			for (var i = 0; i < 2; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow41()

		function makeRow42() {
			x = 210;
			y = 420;
			for (var i = 0; i < 1; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow42()

		function makeRow43() {
			x = 210;
			y = 430;
			for (var i = 0; i < 5; i++) {
				makeCircle(x, y);
				x += 10;
			}
		}
		makeRow42()
	}
	makeMap()
}

