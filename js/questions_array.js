var questions = [

{
	question: "Where does more than half the breathable oxygen in the world come from?",
	choices: [
		"Forest",
		"Ocean",
		"Flowering Plants",
		"Clouds"
	],
	answer: "Ocean"
},
{
	question: "Humans cause a significant amount of air pollution by burning _____ fuels?",
	choices: [
		"Natural",
		"Electric",
		"Organic",
		"Fossil"
	],
	answer: "Fossil"
},
{
	question: "When was the first Earth Day?",
	choices: [
		"1970",
		"1982",
		"1999",
		"2003"
	],
	answer: "1970"
},
{
	question: "How much of the world’s oxygen is produced by just the Amazon rainforest?",
	choices: [
		"5%",
		"10%",
		"15%",
		"20%"
	],
	answer: "20%"
},
{
	question: "Which is the largest ocean on our planet?",
	choices: [
		"The Pacific Ocean",
		"The Atlantic Ocean",
		"The Indian Ocean",
		"The Arctic Ocean"
	],
	answer: "The Pacific Ocean"
},
{
	question: "What is it called when you collect organic waste and store it so it breaks down into fertilizer?",
	choices: [
		"Recycling",
		"Biodegrading",
		"Composting",
		"Trashing"
	],
	answer: "Composting"
},
{
	question: "How much oxygen does an average 50-year-old tree provide? Enough for _____.",
	choices: [
		"1 person / year",
		"4 person / year",
		"8 person / year",
		"10 person / year"
	],
	answer: "4 person / year"
},
{
	question: "Which land-based ecosystem holds the most biodiversity, i.e. concentration of plants and animals?",
	choices: [
		"Tropical rainforest",
		"African Savannah",
		"South Pacific islands",
		"Coral reefs"
	],
	answer: "Tropical rainforest"
},
{
	question: "What color of the Air Quality Index lets us know that the air outside is 'unhealthy'?",
	choices: [
		"Green",
		"Red",
		"Yellow",
		"Orange"
	],
	answer: "Red"
},
{
	question: "What do we call large areas where garbage is placed on the land?",
	choices: [
		"Landmines",
		"Garbagelands",
		"Landfills",
		"Trashlands"
	],
	answer: "Landfills"
},
{
	question: "What is the biggest single cause of air pollution?",
	choices: [
		"Factories",
		"Transportation",
		"Corporations",
		"Forest fires"
	],
	answer: "Transportation"
},
{
	question: "About how long does it take a Styrofoam cup to decompose?",
	choices: [
		"2 years",
		"10 years",
		"150 years",
		"400 years"
	],
	answer: "400 years"
},
{
	question: "How much of the world's water is available for human use?",
	choices: [
		"< 1%",
		"3%",
		"23%",
		"97%"
	],
	answer: "< 1%"
},
{
	question: "What is the most common type of debris that litters our oceans?",
	choices: [
		"Bags",
		"Plastic bottles",
		"Cigarettes",
		"Food packaging"
	],
	answer: "Cigarettes"
},
{
	question: "Which of the following sources of energy is NOT renewable?",
	choices: [
		"Petroleum",
		"Hydropower",
		"Biomass",
		"Solar power"
	],
	answer: "Petroleum"
},
{
	question: "What country produces the most energy in the world?",
	choices: [
		"Iraq",
		"China",
		"United States",
		"Russia"
	],
	answer: "China"
},
{
	question: "What is the number one cause of worldwide tropical deforestation worldwide?",
	choices: [
		"Commercial logging",
		"Wildfire",
		"Building of roads and cities",
		"Clearing of lands for agricultural use"
	],
	answer: "Clearing of lands for agricultural use"
},
{
	question: "What is visible air pollution called?",
	choices: [
		"Chemvis Pollution",
		"Photochemical Smog",
		"Rainbow Pollution",
		"Smoglight"
	],
	answer: "Photochemical Smog"
},
{
	question: "The main gases responsible for the Greenhouse Effect are:",
	choices: [
		"Water and Ozone",
		"Oxygen and Nitrous Oxide",
		"Carbon Dioxide and Methane",
		""
	],
	answer: "Carbon Dioxide and Methane"
},
{
	question: "Which of the following lightbulb types uses the least energy, and thus fewer greenhouse gas emissions?",
	choices: [
		"Incandescent",
		"Compact flourescent",
		"Halogen",
		""
	],
	answer: "Compact flourescent"
}
]

// 

var bonusQuestions = [

function l1() {
	var randomNum = Math.floor(Math.random() * 3) + 1;
	bonusQns.innerHTML = '<b>Bonus Round!</b> Are you feeling lucky?<br>Pick a number from 1 to 3, let\'s see if we match!';

	// MAKE SURE THE INPUT ONLY RUNS ONCE, CLEARS STACKED VALUE!!
	var inputForm = document.querySelector('#form');
	var inputClone = inputForm.cloneNode(true);

	document.querySelector('.input-form').removeChild(inputForm);
	document.querySelector('.input-form').appendChild(inputClone);
	inputClone.focus()
	// console.log(inputForm)
	// console.log(inputClone)

	inputClone.addEventListener('keyup', bonusy = function(event) {
		
		// showPopup(randomNum);
		
		if (event.which === 13) {
		
		var num = inputClone.value;
		num = parseInt(num);
		
		console.log('the value input is ' + num); // just to check
		

			if (randomNum === num) {
				inputClone.removeEventListener('keyup', bonusy);
				win();
			} else if (randomNum !== num) {
				lose(randomNum)
				// showPopup(randomNum); // not working!!!
				// alert('The correct answer is ' + randomNum)
				inputClone.removeEventListener('keyup', bonusy);
				
			}
		
		} 
	});

	

	inputClone.addEventListener('blur', function() {
		inputClone.value = ''
	});
}
,

function l2() {

	var chooseFromThisArr = ["H", "T"];
	var randomNum = Math.floor(Math.random() * chooseFromThisArr.length);
	var choosenItem = chooseFromThisArr[randomNum];

	bonusQns.innerHTML = '<b>Bonus Round!</b> Are you feeling lucky?<br>Flip a coin, Heads(H) or Tails(T)?';

	// MAKE SURE THE INPUT ONLY RUNS ONCE, CLEARS STACKED VALUE!!
	var inputForm = document.querySelector('#form');
	var inputClone = inputForm.cloneNode(true);

	document.querySelector('.input-form').removeChild(inputForm);
	document.querySelector('.input-form').appendChild(inputClone);
	inputClone.style.width = "100px"
	inputClone.focus()

	// console.log(inputForm)
	// console.log(inputClone)
	
	inputClone.addEventListener('keyup', bonusy = function(event) {
		if (event.which === 13) {
		
		var val = inputClone.value.toUpperCase();
		console.log('the value input is ' + val); // just to check

			if (choosenItem === val) {
				inputClone.removeEventListener('keyup', bonusy);
				win();
			} else if (choosenItem !== val) {
				lose(choosenItem);
				inputClone.removeEventListener('keyup', bonusy);
			}

		}
	});

	inputClone.addEventListener('blur', function() {
		inputClone.value = ''
	});
}
,
function l3() {

	bonusQns.innerHTML = '<b>Bonus Round!</b> Are you feeling lucky?<br>Roll a die. If the number is bigger than 3, you win.';

	// remove <input>
	var inputForm = document.querySelector('#form');

	document.querySelector('.input-form').removeChild(inputForm);

	// create button
	var button = document.createElement('div');
	button.setAttribute("class", "button");
	button.textContent = 'Roll Die';
	document.querySelector('.input-form').appendChild(button);

	// what does the button do?
	button.addEventListener('click', bonusy = function(event) {
		var randomNum = Math.floor((Math.random() * 6) + 1);
		console.log(randomNum);

		if (randomNum > 3){
			button.removeEventListener('click', bonusy);
			win();
			
		} else if (randomNum <= 3){
			var randomNum = '4 and more';
			button.removeEventListener('click', bonusy);
			lose(randomNum);
		}
		
		// So that can remove again
		if (questions.length !== 0) {
			document.querySelector('.input-form').removeChild(button);
			document.querySelector('.input-form').appendChild(inputForm);
		}
	});
}
,
function l4() {

	bonusQns.innerHTML = '<b>Bonus Round!</b> Type this in 5 seconds!<br>\"E N V I R O N M E N T A L I S M\"';
	var checkWord = "environmentalism"

	// MAKE SURE THE INPUT ONLY RUNS ONCE, CLEARS STACKED VALUE!!
	var inputForm = document.querySelector('#form');
	var inputClone = inputForm.cloneNode(true);

	document.querySelector('.input-form').removeChild(inputForm);
	document.querySelector('.input-form').appendChild(inputClone);
	inputClone.style.width = "250px"

	// set timer; 10 seconds
	// upon reaching timer, the 'lose' function will play
	// if enter then check if word is same
		// if word not the same then 'lose' function

	var funct = function() {lose(checkWord)};

	inputClone.addEventListener('click', function() {
		var fiveSecTimeout = setTimeout(funct, 5000)

		inputClone.addEventListener('keyup', bonusy = function(event) {
			if (event.which === 13) {

			clearTimeout(fiveSecTimeout);
			
			var val = inputClone.value.toLowerCase();
			console.log('the value input is ' + val); // just to check

				if (checkWord === val) {
					inputClone.removeEventListener('keyup', bonusy);
					win();
				} else if (checkWord !== val) {
					lose(checkWord);
					inputClone.removeEventListener('keyup', bonusy);
					
				}
			}
		});
	})

	inputClone.addEventListener('blur', function() {
		inputClone.value = ''
	});
}
,
function l5() {

	bonusQns.innerHTML = '<b>Bonus Round!</b> Type this in 5 seconds!<br>\"S U S T A I N A B I L I T Y\"';
	var checkWord = "sustainability"

	// MAKE SURE THE INPUT ONLY RUNS ONCE, CLEARS STACKED VALUE!!
	var inputForm = document.querySelector('#form');
	var inputClone = inputForm.cloneNode(true);

	document.querySelector('.input-form').removeChild(inputForm);
	document.querySelector('.input-form').appendChild(inputClone);
	inputClone.style.width = "250px"

	// set timer; 10 seconds
	// upon reaching timer, the 'lose' function will play
	// if enter then check if word is same
		// if word not the same then 'lose' function

	var funct = function() {lose(checkWord)};

	inputClone.addEventListener('click', function() {
		var fiveSecTimeout = setTimeout(funct, 5000)

		inputClone.addEventListener('keyup', bonusy = function(event) {
			if (event.which === 13) {

			clearTimeout(fiveSecTimeout);
			
			var val = inputClone.value.toLowerCase();
			console.log('the value input is ' + val); // just to check

				if (checkWord === val) {
					inputClone.removeEventListener('keyup', bonusy);
					win();
				} else if (checkWord !== val) {
					lose(checkWord);
					inputClone.removeEventListener('keyup', bonusy);
					
				}
			}
		});
	})

	inputClone.addEventListener('blur', function() {
		inputClone.value = ''
	});

}

];













// console.log(questions.length)
// console.log(bonusQuestions.length)