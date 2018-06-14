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
		"10 years",
		"2 months",
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
	question: "What is the number one cause of worldwide tropical deforestation worldwide",
	choices: [
		"Commercial logging",
		"Wildfire",
		"Building of roads and cities",
		"Clearing of lands for agricultural use"
	],
	answer: "Clearing of lands for agricultural use"
},
{
	question: "What is the number one cause of worldwide tropical deforestation worldwide",
	choices: [
		"Commercial logging",
		"Wildfire",
		"Building of roads and cities",
		"Clearing of lands for agricultural use"
	],
	answer: "Clearing of lands for agricultural use"
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
	question: "Which of the following lightbulb types uses the least energy, and therefore results in fewer greenhouse gas emissions?",
	choices: [
		"Incandescent",
		"Compact flourescent",
		"Halogen",
		""
	],
	answer: "Compact flourescent"
}
]



var l1 = function() {
	var randomNum = Math.floor(Math.random() * 3) + 1;
	luckQns.textContent = 'Let\'s match. Choose a number from 1 to 3.';

	// MAKE SURE THE INPUT ONLY RUNS ONCE, CLEARS STACKED VALUE!!
	var inputForm = document.querySelector('#form');

	var inputClone = inputForm.cloneNode(true);
	
	document.querySelector('.input-form').removeChild(inputForm)

	document.querySelector('.input-form').appendChild(inputClone)
	// console.log(inputForm)
	// console.log(inputClone)
	
	inputClone.addEventListener('keypress', lucky = function(event) {
		if (event.which === 13) {
		
		var num = inputClone.value;
		num = parseInt(num);
			
			if (randomNum === num) {
				win();
			} else {
				lose(randomNum);
			}

		}
	});

	inputClone.addEventListener('blur', function() {
		inputClone.value = ''
	});
}

var l2 = function() {
	var randomNum = Math.floor(Math.random() * 4) + 1;
	luckQns.textContent = 'Let\'s match. Choose a number from 1 to 4.';

	// MAKE SURE THE INPUT ONLY RUNS ONCE, CLEARS STACKED VALUE!!
	var inputForm = document.querySelector('#form');

	var inputClone = inputForm.cloneNode(true);
	document.querySelector('.input-form').removeChild(inputForm)

	document.querySelector('.input-form').appendChild(inputClone)

	// console.log(inputForm)
	// console.log(inputClone)
	
	inputClone.addEventListener('keypress', lucky = function(event) {
		if (event.which === 13) {
		
		var num = inputClone.value;
		num = parseInt(num);
			
			if (randomNum === num) {
				win();
			} else {
				lose(randomNum);
			}

		}
	});

	inputClone.addEventListener('blur', function() {
		inputClone.value = ''
	});
}


var luckQuestions = [];

for (var i = 1; i < 3; i++) {
	luckQuestionNum = 'l' + i;
	luckQuestions.push(eval(luckQuestionNum));
}







// console.log(questions.length)
// console.log(luckQuestions.length)