	// <div class="popup" id="answer-wrong">
	//   <div class="popup-content" id="answer-wrong-content">
	//   </div>
	// </div>

// var factBox = document.querySelector('#factual');
// var bonusBox = document.querySelector('#bonus-round');

// var factQns = document.querySelector('#fact');
// var bonusQns = document.querySelector('#bonus');
// var allChoices = document.querySelectorAll('.choices'); // returns an arrary
// var choice1Box = document.querySelector('#choice-one');
// var choice2Box = document.querySelector('#choice-two');
// var choice3Box = document.querySelector('#choice-three');
// var choice4Box = document.querySelector('#choice-four');
// var earthStats = document.querySelector('#earth-stats');
// var title = document.querySelector('#title');
// var affectedCount = document.querySelector('#affected-count');

	// pop up is to indicate when wrong
	// runs when player 'lose'
	// displays popup div
	// the correct answer is ______
	// press enter so that popup's display is none
	// and continues with next question


	// pop up is to indicate during end game
	// runs when no more questions or the map is full of reds
	// textContent the status; Winner or Loser
	// press Enter to reload page and hence reset game



var popup = document.querySelectorAll('.popup')[0];  // the whole pop which is width 100% and height 100%, has a low opacity background etc
var popupBox = document.querySelector('#answer-wrong');
var popupContent = document.querySelector('#answer-wrong-content');

var showPopup = function(answer) {

	popupContent.innerHTML = 'The correct answer is \" <span id="ans">' + answer + '</span> \".<br><span id="note">Press Enter or Click anywhere to close</span>';

	popupBox.style.display = "block";

	document.addEventListener('keydown', function(event) {
		if (event.which === 13) {
			popupBox.style.display = "none";
		}
	})
	popup.addEventListener('click', function() {
		popupBox.style.display = "none";
	})
};


var showPopEndGame = function(endGameStatus, affectedLog, mood) {

	// remove eventListener for choices
	for (var i = 0; i < allChoices.length; i++) {
		allChoices[i].removeEventListener('click', checkIfCorrect)
	}

	popupContent.innerHTML = '<center> YOU ' + endGameStatus + '!<br><br>Your score is : ' + affectedLog + '.<br>Earth is feeling <i>' + mood + '</i>.</center>';

	popupBox.style.display = "block";

}









