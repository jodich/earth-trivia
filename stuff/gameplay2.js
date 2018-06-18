var question = document.querySelector('h2');
var allChoices = document.querySelectorAll('.choices'); // returns an arrary
var choice1 = document.querySelector('#choice-one');
var choice2 = document.querySelector('#choice-two');
var choice3 = document.querySelector('#choice-three');
var choice4 = document.querySelector('#choice-four');




var affected = 0;
var remain = 1175 - affected;
var colorArr = [];

var correctAns = function() {
	alert('You\'re right!');
	
	removeAddListeners();

	play();
}

var wrongAns = function(answer) {
	alert('You\'re wrong! The correct answer is ' + answer)   // + answer;
	// console.log(answer)
	// wrongAns.unbind();
	removeAddListeners();

	c.clearRect(0, 0, 800, 430);
	
	affected += 100;
	colorArr = [];


	if (affected < 1175) {
		remain = 1175 - affected;
		play();
		return affected;

	} else if (affected >= 1175) {
		affected = 1175;
		remain = 1175 - affected
		console.log('GAME OVER - LOST');
		generateNewMap();
		return affected;
	}
}

// var wrong = function(answer) { wrongAns(answer) }
var ww;

var choiceOneIsRight = function() {

	var answer = choice1.textContent
	// console.log(answer);
	ww = wrongAns.bind(this, answer);
	
	choice1.addEventListener('click', correctAns);
	choice2.addEventListener('click', ww);
	choice3.addEventListener('click', ww);
	choice4.addEventListener('click', ww);
}

var choiceTwoIsRight = function() {

	var answer = choice2.textContent
	// console.log(answer);
	ww = wrongAns.bind(this, answer);

	choice1.addEventListener('click', ww);
	choice2.addEventListener('click', correctAns) ;
	choice3.addEventListener('click', ww);
	choice4.addEventListener('click', ww);
}

var choiceThreeIsRight = function() {

	var answer = choice3.textContent

	choice1.addEventListener('click', wrongAns(answer));
	choice2.addEventListener('click', wrongAns(answer));
	choice3.addEventListener('click', correctAns);
	choice4.addEventListener('click', wrongAns(answer));
}

var choiceFourIsRight = function() {

	console.log(answer);

	choice1.addEventListener('click', wrongAns);
	choice2.addEventListener('click', wrongAns);
	choice3.addEventListener('click', wrongAns);
	choice4.addEventListener('click', correctAns);
}

var removeOptionIfEmpty = function() {
	if (choice3.textContent === "") {
		choice3.setAttribute("style", "display: none")
	}
	if (choice4.textContent === "") {
		choice4.setAttribute("style", "display: none")
	}
}

var removeAddListeners = function(answer) {

	choice1.removeEventListener('click', correctAns);
	choice2.removeEventListener('click', correctAns);
	choice3.removeEventListener('click', correctAns);
	choice4.removeEventListener('click', correctAns);
	choice1.removeEventListener('click', ww);
	choice2.removeEventListener('click', ww);
	choice3.removeEventListener('click', ww);
	choice4.removeEventListener('click', ww);
}

var questionFunctArr = [];

for (var i = 0; i < 19; i++) {  // number of qns -1
	questionNum = 'q' + i
	questionFunctArr.push(eval(questionNum));
}



var play = function() {
	
	generateNewMap()

	if (questionFunctArr.length !== 0) {
		randomQuestionIndex = Math.floor(Math.random() * questionFunctArr.length)
		questionFunctArr[randomQuestionIndex](); // runs the 1st function in the questionFunctArr
		questionFunctArr.splice(randomQuestionIndex, 1);
	} else if (questionFunctArr.length === 0) {
		// q9()
		console.log('GAME OVER - OUT OF QNS');
	}
}

play();



// q1()
// questionFunctArr[Math.floor(Math.random() * 2)](); // runs the 1st function in the questionFunctArr