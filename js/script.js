var hidebonusQns = function() {

	bonusBox.setAttribute("style", "display: none");
	factBox.setAttribute("style", "display: visible");
}

var hideFactQns = function() {

	bonusBox.setAttribute("style", "display: visible");
	factBox.setAttribute("style", "display: none");
}

var earthMood = function() {

	if (affected === 1175) {
		earthStats.innerHTML = 'Earth\'s Mood:<br> Crushed';
	} else if (affected >= 950) {
		earthStats.innerHTML = 'Earth\'s Mood:<br> Devastated';
	} else if (affected >= 800) {
		earthStats.innerHTML = 'Earth\'s Mood:<br> Gloomy';
	} else if (affected >= 550) {
		earthStats.innerHTML = 'Earth\'s Mood:<br> Distressed';
	} else if (affected >= 300) {
		earthStats.innerHTML = 'Earth\'s Mood:<br> Pessimistic';
	} else if (affected >= 100) {
		earthStats.innerHTML = 'Earth\'s Mood:<br> Anxious';
	} else if (affected >= 0) {
		earthStats.innerHTML = 'Earth\'s Mood:<br> Hopeful' ;
	} else {
		earthStats.innerHTML = 'Earth\'s Mood:<br> WTF';
	}

}




var cloneInputTag = function(inputClone){
	var inputForm = document.querySelector('#form');

	inputClone = inputForm.cloneNode(true);
	document.querySelector('.input-form').removeChild(inputForm)

	document.querySelector('.input-form').appendChild(inputClone)
	inputClone.focus()

	return inputClone
}




var win = function() {
	console.log('right')
	affectedCount.innerHTML = 'Affected Area:<br>' + affected + ' / 1175';
	generateQnsLoop(); // need to change this
}




var lose = function(answer) {

	console.log('The correct answer is ' + answer);

	c.clearRect(0, 0, 800, 430);

	// generate random count for affected
	var randomAffected = Math.floor((Math.random() * 100) + 50)		// range: 50 to 150
	affected += randomAffected;


	// default; continues the qns
	if (affected < 1175) {
		generateNewMap();
		affectedCount.innerHTML = 'Affected Area:<br>' + affected + ' / 1175';
		generateQnsLoop();   // need to change this


	// when lose liao, ends the qns
	// sets gameover when lose
	} else if (affected >= 1175) {
		affected = 1175;
		generateNewMap();
		earthMood();
		affectedCount.innerHTML = 'Affected Area:<br>' + affected + ' / 1175';
		
		setTimeout(function() { alert("LOSER"); }, 500)

		// remove all the eventlisteners when game over
		for (var i = 0; i < allChoices.length; i++) {
			allChoices[i].removeEventListener('click', checkIfCorrect)
		}

		document.querySelector('#form').removeEventListener('keypress', bonusy);
	}
}





var checkIfCorrect = function(event){

	// check if selected box textContent is the same as answer
	if (this.textContent === selectedQnObj.answer) {    				
		win();


	// if the selected box textContent is NOT the same as answer
	} else {
		lose(selectedQnObj.answer);
	}
}





// generate a factual question
var factQn = function(e) {

	// set style for Factual Questions first
	hidebonusQns();
	choice4Box.setAttribute("style", "display: inline-block");

	// ---------- real thing starts here ------------
	if (questions.length !== 0) {
		// picks a random number
		pickQnRandomIndex = Math.floor(Math.random() * questions.length); // length is 8 means the max number that can random until is 7. The max index for an array is 7 when length is 8

		// picks a random question
		selectedQnObj = questions[pickQnRandomIndex];

		// remove question from array of questions
		questions.splice(pickQnRandomIndex, 1);

		factQns.textContent = selectedQnObj.question;
		choice1Box.textContent = selectedQnObj.choices[0];
		choice2Box.textContent = selectedQnObj.choices[1];
		choice3Box.textContent = selectedQnObj.choices[2];
		choice4Box.textContent = selectedQnObj.choices[3];


	} else if (questions.length === 0) {
		generateNewMap();
	}

	// if choice4Box is empty
	if (choice4Box.textContent === "") {
		choice4Box.setAttribute("style", "display: none");
	}

	// add the eventlistener to the choices
	for (var i = 0; i < allChoices.length; i++) {
		allChoices[i].addEventListener('click', checkIfCorrect)
	}
}



// generate a bonus-based question
var bonusQuestionsClone = bonusQuestions;

var bonusQn = function() {

	hideFactQns();
	// bonusQuestionsClone[3]();

	// duplicate bonusQuestions array
	// empty bonusQuestionsClone arr
	// when empty bonusQuestionsClone then it will equals bonusQuestions

	if (bonusQuestionsClone.length !== 0) {
		// picks a random number
		pickbonusQnRandomIndex = Math.floor(Math.random() * bonusQuestionsClone.length); // length is 8 means the max number that can random until is 7. The max index for an array is 7 when length is 8

		// execute function
		bonusQuestionsClone[pickbonusQnRandomIndex]();

		// remove question from array of questions
		bonusQuestionsClone.splice(pickbonusQnRandomIndex, 1);


	} else if (bonusQuestions.length === 0) {
		bonusQuestionsClone = bonusQuestions;
	};

};



