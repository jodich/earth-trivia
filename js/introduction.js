var introPage = document.querySelector('#instructions');

var intro = document.querySelector('.intro');
var name = document.querySelector('#name');
var inputName = document.querySelector('#input-name');


var canvas = document.querySelector('canvas');
var text = document.querySelector('.reset-this');
var gameStats = document.querySelector('.game-info');

var intro = document.querySelector('.intro');
	var quote = document.querySelector('.quote');
	var byWho = document.querySelector('.by-who');
	var instruct = document.querySelector('.instruct');
var nameQn = document.querySelector('#name');
var nameInput = document.querySelector('#name-form');


// remove items from display
canvas.setAttribute("style", "display: none");
text.setAttribute("style", "display: none");
gameStats.setAttribute("style", "display: none");

// set up items for intro page
quote.innerHTML = 'Ignorance is the bane of our existence';
byWho.innerHTML = '- Adipo Sidang';
instruct.innerHTML = 'For each question answered wrongly, the ‘Affected Area’, represented by red dots will increase. As the red dots increases, it mirrors the danger you are placing Earth in each time you are ignorant about matters concerning the environment.\
<br><br>Are you able to complete the trivia without fully polluting the Earth with red dots? Let\'s get started!' ;
nameQn.textContent = 'What is your name?';

// introPage.setAttribute("style", "display: none");
// canvas.removeAttribute("style", "display: none");
// text.removeAttribute("style", "display: none");
// gameStats.removeAttribute("style", "display: none");

var name;

nameInput.addEventListener('keypress', function (event) {
	if (event.which === 13) {

		name = nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1);

		if (name === ''){
			name = 'You are';
		} else if (name.length > 30) {
			name = name[0] + name[1] + name[2] + name[3] + name[4] + name[5] + name[6] + name[7] + ' is';
		} else {
			name = name + ' is';
		}

		introPage.setAttribute("style", "display: none");
		canvas.removeAttribute("style", "display: none");
		text.removeAttribute("style", "display: none");
		gameStats.removeAttribute("style", "display: none");

		// start game
			// input all game stats
			// generate map
			// generate set of questions

		startGame(name);
	}
});
