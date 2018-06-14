
var hideLuckQns = function() {

	luckBox.setAttribute("style", "display: none");
	factBox.setAttribute("style", "display: visible");
}

var hideFactQns = function() {

	luckBox.setAttribute("style", "display: visible");
	factBox.setAttribute("style", "display: none");
}

var win = function() {
	console.log('right')
	affectedCount.innerHTML = 'Affected Area:<br>' + affected + ' / 1175';
	playFactQn();
}

var lose = function(answer) {

	console.log('The correct answer is ' + answer);

	c.clearRect(0, 0, 800, 430);

	// generate random count for affected
	var randomAffected = Math.floor((Math.random() * 100) + 50)		// range: 50 to 150
	affected += randomAffected;

	if (affected < 1175) {
		generateNewMap();
		affectedCount.innerHTML = 'Affected Area:<br>' + affected + ' / 1175';
		playFactQn();
		return affected;

	} else if (affected >= 1175) {
		affected = 1175;
		generateNewMap();
		affectedCount.innerHTML = 'Affected Area:<br>' + affected + ' / 1175';
		
		setTimeout(function() { alert("LOSER"); }, 500)

		// remove eventlisteners when game over
		for (var i = 0; i < allChoices.length; i++) {
			allChoices[i].removeEventListener('click', checkIfCorrect)
		}
	}
}

var startGame 

function luckOne(name) {

	hideFactQns()

	title.innerHTML = name + ' on a mission to save the earth';

	var randomNum = Math.floor(Math.random() * 3) + 1;					  //questionLuck[0].variable
	luckQns.textContent = 'Let\'s match. Choose a number from 1 to 3.';   //questionLuck[0].question

	// MAKE SURE THE INPUT ONLY RUNS ONCE, CLEARS STACKED VALUE!!
	var inputForm = document.querySelector('#form')

	var inputClone = inputForm.cloneNode(true);
	document.querySelector('.input-form').removeChild(inputForm)

	document.querySelector('.input-form').appendChild(inputClone)

	// console.log(inputForm)
	// console.log(inputClone)
	
	inputClone.addEventListener('keypress', function (event) {
		if (event.which === 13) {
		
		var num = inputClone.value;											  //questionLuck[0].input
		num = parseInt(num);
			
			if (randomNum === num) {									  // if questionLuck[0].variable === questionLuck[0].input
				win();
			} else {
				lose(randomNum);
			}

		}
	});

	inputClone.addEventListener('blur', function() {
		inputClone.value = ''
	});

};