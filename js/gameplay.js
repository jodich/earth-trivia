// selectors for gameplay
var factBox = document.querySelector('#factual');
var bonusBox = document.querySelector('#bonus-round');

var factQns = document.querySelector('#fact');
var bonusQns = document.querySelector('#bonus');
var allChoices = document.querySelectorAll('.choices'); // returns an arrary
var choice1Box = document.querySelector('#choice-one');
var choice2Box = document.querySelector('#choice-two');
var choice3Box = document.querySelector('#choice-three');
var choice4Box = document.querySelector('#choice-four');
var earthStats = document.querySelector('#earth-stats');
var title = document.querySelector('#title');
var affectedCount = document.querySelector('#affected-count');


// --------------------- real thing starts here --------------------


// game starts with these fixed values
var affected = 0;
var remain = 1175 - affected;
var colorArr = [];
var count = 0

// start to generate one question
var pickQnRandomIndex;
var selectedQnObj;


var startGame = function(name) {

	// GENERATE game-info

	// design for countScore
	affectedCount.style.fontSize = "13px";
	affectedCount.style.lineHeight= "18px";
	affectedCount.style.fontWeight = "900";
	affectedCount.innerHTML = 'Affected Area :<br>' + '<span id="affectedCount">' + affected + ' / 1175 </span>';

	// title
	title.style.fontSize = "14px";
	title.textContent = name + ' on a mission to save the earth';
	titled = title.textContent;

	// status
	earthStats.style.fontSize = "13px";
	earthStats.style.lineHeight= "18px";
	earthStats.style.fontWeight = "900";
	earthStats.innerHTML = 'Earth\'s Mood :<br> Sad';

	// GENERATE map
	generateNewMap();

	// GENERATE questions loop
	generateQnsLoop();

}

var count = 0

var generateQnsLoop = function() {

	earthMood();

	count = count + 1
	
	if (count % 5 === 0) {
		bonusQn();
	} else if (questions.length === 0){
		showPopEndGameWin();
	} else {
		factQn();
	}
}
