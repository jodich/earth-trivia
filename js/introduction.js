var introPage = document.querySelector('#instructions');

var intro = document.querySelector('.intro');
var name = document.querySelector('#name');
var inputName = document.querySelector('#input-name');


var canvas = document.querySelector('canvas');
var text = document.querySelector('.reset-this');
var gameStats = document.querySelector('.game-info');

var intro = document.querySelector('.intro');
	var quote = document.querySelector('.quote');
	var instruct = document.querySelector('.instruct');
var nameQn = document.querySelector('#name');
var nameInput = document.querySelector('#name-form');



canvas.setAttribute("style", "display: none");
text.setAttribute("style", "display: none");
gameStats.setAttribute("style", "display: none");



// open intro page
quote.innerHTML = 'Ignorance is the bane of our existance<br>- Adipo Sidang';
instruct.innerHTML = 'Each time a question is answered wrongly, the affected area on Earth will increase. These affected areas are represented by <b>red</b> dots. The increment of the red dots represents the danger you are placing in Earth in each time you are ignorant about matters concerning the environment.<br><br>\
Can you complete the questionnaire without polluting Earth with your ignorance?' 
nameQn.textContent = 'What is your name?'

// introPage.setAttribute("style", "display: none");
// canvas.removeAttribute("style", "display: none");
// text.removeAttribute("style", "display: none");
// gameStats.removeAttribute("style", "display: none");

var name;

nameInput.addEventListener('keypress', function (event) {
	if (event.which === 13) {

		name = nameInput.value

		if (name === ''){
			name = 'You are'
		} else {
			name = name + ' is'
		}
		console.log(name);

		introPage.setAttribute("style", "display: none");
		canvas.removeAttribute("style", "display: none");
		text.removeAttribute("style", "display: none");
		gameStats.removeAttribute("style", "display: none");

		// start game
			// input all game stats
			// generate map
			// generate set of questions
			
		generateNewMap();
		luckOne(name);
	}
})