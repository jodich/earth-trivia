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



var popup = document.querySelectorAll('.popup')[0];  // the whole pop which is width 100% and height 100%, has a low opacity background etc
var wrongAnsPopup = document.querySelector('#answer-wrong');
var wrongAnsContent = document.querySelector('#answer-wrong-content');



var showPopup = function(answer) {

	wrongAnsContent.innerHTML = 'The correct answer is \" <span id="ans">' + answer + '</span> \".<br><span id="note">Press Enter or Click anywhere to close</span>';

	wrongAnsPopup.style.display = "block";

	document.addEventListener('keypress', function(event) {
		if (event.which === 13) {
			wrongAnsPopup.style.display = "none";
		}
	})
	popup.addEventListener('click', function() {
		wrongAnsPopup.style.display = "none";
	})
};