var factBox = document.querySelector('#factual');
var luckBox = document.querySelector('#feeling-lucky');

var factQns = document.querySelector('#fact');
var luckQns = document.querySelector('#luck');
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
	affectedCount.style.lineHeight= "20px";
	affectedCount.innerHTML = 'Affected Area:<br>' + affected + ' / 1175';

	// title
	title.style.fontSize = "14px";
	title.textContent = name + ' on a mission to save the earth';
	titled = title.textContent;

	// status
	earthStats.style.fontSize = "13px";
	earthStats.style.lineHeight= "20px";
	earthStats.innerHTML = 'Earth\'s Mood:<br> Sad';

	// GENERATE map
	generateNewMap();

	// GENERATE questions loop
	generateQnsLoop();    // need to replace this with generateQnsLoop

}

var generateQnsLoop = function() {

	earthMood();

		document.querySelector('#form').autofocus = true;

	count++
	
	if (count % 5 === 0) {
		luckQn();
	} else if (questions.length === 0){

		for (var i = 0; i < allChoices.length; i++) {
			allChoices[i].removeEventListener('click', checkIfCorrect)
		};

		document.querySelector('#form').removeEventListener('keypress', lucky);

		setTimeout(function() { alert("WINNER"); }, 500);

	} else {
		factQn();
	}
	return count;
}
