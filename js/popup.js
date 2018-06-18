// selectors of popup box
var popup = document.querySelectorAll('.popup')[0];  // the whole pop which is width 100% and height 100%, has a low opacity background etc
var popupBox = document.querySelector('#answer-wrong'); // same shit as the one above
var popupContent = document.querySelector('#answer-wrong-content');

// global variables
var endGameStatus;
var affectedLog;
var mood;


var showPopup = function(answer) {

	popupContent.innerHTML = 'The correct answer is \" <span id="ans">' + answer + '</span> \".<br><span id="note">Click anywhere to close</span>';

	popupBox.style.display = "block";

	popupBox.addEventListener('click', afterClickPopup);
};



var afterClickPopup = function(event) {

	// what happens after clicking popup when lose
	if (affected === 1175) {

		// set variables
		endGameStatus = 'LOST';
		affectedLog = remain;
		mood = document.getElementById('earthMood').textContent;

		generateEndGamePopup(endGameStatus, affectedLog, mood);

	// default action when after clicking the popup 
	} else if (affected < 1175) { 
		popupBox.style.display = "none";
		popupBox.removeEventListener('click', afterClickPopup);
		generateQnsLoop();
	}
}


// when questions.length = 0
var showPopEndGameWin = function() {

	// set variables
	endGameStatus = 'WON';
	affectedLog = remain;
	mood = document.getElementById('earthMood').textContent;

	generateEndGamePopup(endGameStatus, affectedLog, mood);

}


var generateEndGamePopup = function (endGameStatus, affectedLog, mood) {

	var popupClone = popupBox.cloneNode(true);
	document.querySelector('body').replaceChild(popupClone, popupBox);
	popupClone.style.display = "block";

	var gameEnd = document.querySelector('#answer-wrong-content')
	gameEnd.innerHTML = '';
	var gameEndClone = gameEnd.cloneNode(true)
	popupClone.replaceChild(gameEndClone, gameEnd);

	// set style
	gameEndClone.style.textAlign = "center";


	// set the variables as text in the popup
	gameEndClone.innerHTML = 'YOU ' + endGameStatus + '!<br><br>Your score is : ' + affectedLog + '<br>Earth is feeling <i>' + mood + '</i>.'

	createResetButton(gameEndClone);

}


// create button
// textcontent button
// appendChild the button to the popup
// set eventlistener to button
var createResetButton = function(gameEndClone) {

		var button = document.createElement('div');
		button.setAttribute("id", "reset");
		button.innerHTML = 'Play Again?';
		gameEndClone.appendChild(button);

		button.addEventListener('click', function() {
			location.reload();
		})

}

