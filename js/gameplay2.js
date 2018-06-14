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

// game starts with these fixed values
var affected = 0;
var remain = 1175 - affected;
var colorArr = [];

// design for countScore
// affectedCount.style.backgroundColor = "red";
affectedCount.style.fontSize = "13px";
affectedCount.style.lineHeight= "20px";
affectedCount.innerHTML = 'Affected Area:<br>' + affected + ' / 1175';

// title
title.style.fontSize = "14px";
title.innerHTML = 'save-the-world trivia';

// status
earthStats.style.fontSize = "13px";
earthStats.style.lineHeight= "20px";
earthStats.innerHTML = 'Earth\'s Mood:<br> Sad';


// start to generate one question
var pickQnRandomIndex;
var selectedQnObj;

var playFactQn = function(e) {

	// hide luck quns
	hideLuckQns();

	// remove the eventlistener of the choices
	for (var i = 0; i < allChoices.length; i++) {
		allChoices[i].removeEventListener('click', checkIfCorrect)
	}

	// set the style back for choice 4 (if it got removed previously, it would not appear in the next qn)
	choice4Box.setAttribute("style", "display: inline-block");

	if (questions.length !== 0) {

			// picks a random number
			pickQnRandomIndex = Math.floor(Math.random() * questions.length); // length is 8 means the max number that can random until is 7. The max index for an array is 7 when length is 8

			// picks a random question
			selectedQnObj = questions[pickQnRandomIndex];

			// remove question from array of questions
			questions.splice(pickQnRandomIndex, 1);

	} else if (questions.length === 0){
		setTimeout(function() { alert("WINNER"); }, 500)
		return e
	}

	// display the questions and choices
	factQns.textContent = selectedQnObj.question;
	choice1Box.textContent = selectedQnObj.choices[0];
	choice2Box.textContent = selectedQnObj.choices[1];
	choice3Box.textContent = selectedQnObj.choices[2];
	choice4Box.textContent = selectedQnObj.choices[3];

	if (choice4Box.textContent === "") {
		choice4Box.setAttribute("style", "display: none");
	}

	// add the eventlistener to the choices
	for (var i = 0; i < allChoices.length; i++) {
		allChoices[i].addEventListener('click', checkIfCorrect)
	}
}

var checkIfCorrect = function(event){
	//identify the textContent
	// console.log(this.textContent)

	// check if selected box textContent is the same as answer
	if (this.textContent === selectedQnObj.answer) {    				
		win();


	// if the selected box textContent is NOT the same as answer
	} else {
		lose(selectedQnObj.answer);
	}
}

var playLuckQn = function(e) {

}

generateNewMap()
playFactQn();
luckOne();


// var playFactQnInOrder = function() {

// 	hideLuckQns();

// 	console.log(questions[1].question);

// 	factQns.textContent = questions[1].question;
// 	choice1Box.textContent = questions[1].choices[0];
// 	choice2Box.textContent = questions[1].choices[1];
// 	choice3Box.textContent = questions[1].choices[2];
// 	choice4Box.textContent = questions[1].choices[3];

// 	for (var i = 0; i < allChoices.length; i++) {
// 		allChoices[i].addEventListener('click', checkIfCorrect)
// 	}

// }

// playFactQnInOrder();
