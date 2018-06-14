function q0() {
	question.textContent = 'Where does more than half the breathable oxygen in the world come from?'

	choice1.textContent = 'Ocean!';
	choice2.textContent = 'Forest';
	choice3.textContent = 'Flowering Plants';
	choice4.textContent = 'Clouds';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
	
}

function q1() {

	question.textContent = 'How much oxygen does an average 50-year-old tree provide?'

	choice1.textContent = '1 person per year';
	choice2.textContent = '4 person per year!';
	choice3.textContent = '8 person per year';
	choice4.textContent = '10 person per year';
	
	var answer = choice2.textContent;
	
	removeOptionIfEmpty();
	choiceTwoIsRight(answer);
}

function q2() {

	question.textContent = 'When was the first Earth Day?'

	choice1.textContent = '1970!';
	choice2.textContent = '1982';
	choice3.textContent = '1999';
	choice4.textContent = '2003';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q3() {
	question.textContent = 'Which land-based ecosystem holds the most biodiversity, i.e. concentration of plants and animals?'

	choice1.textContent = 'Tropical rainforest';
	choice2.textContent = 'African Savannah';
	choice3.textContent = 'South Pacific islands';
	choice4.textContent = 'Coral reefs';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q4() {
	question.textContent = 'Where does more than half the breathable oxygen in the world come from?'

	choice1.textContent = 'Ocean!';
	choice2.textContent = 'Forest';
	choice3.textContent = 'Flowering Plants';
	choice4.textContent = 'Clouds';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q5() {

	question.textContent = 'How much oxygen does an average 50-year-old tree provide?'

	choice1.textContent = '1 person per year';
	choice2.textContent = '4 person per year!';
	choice3.textContent = '8 person per year';
	choice4.textContent = '10 person per year';
	
	var answer = choice2.textContent;
	
	removeOptionIfEmpty();
	choiceTwoIsRight(answer);
}

function q6() {

	question.textContent = 'When was the first Earth Day?'

	choice1.textContent = '1970!';
	choice2.textContent = '1982';
	choice3.textContent = '1999';
	choice4.textContent = '2003';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q7() {
	question.textContent = 'Which land-based ecosystem holds the most biodiversity, i.e. concentration of plants and animals?'

	choice1.textContent = 'Tropical rainforest';
	choice2.textContent = 'African Savannah';
	choice3.textContent = 'South Pacific islands';
	choice4.textContent = 'Coral reefs';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q8() {
	question.textContent = 'Which land-based ecosystem holds the most biodiversity, i.e. concentration of plants and animals?'

	choice1.textContent = 'Tropical rainforest';
	choice2.textContent = 'African Savannah';
	choice3.textContent = 'South Pacific islands';
	choice4.textContent = 'Coral reefs';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q9() {

	var randomNum = Math.floor(Math.random() * 3) + 1;
	question.textContent = 'Choose a random number from 1 to 3, if our numbers match, then affected -100 points';
	document.querySelector('.input').setAttribute("style", "display: block");
	choice1.setAttribute("style", "display: none");
	choice2.setAttribute("style", "display: none");
	choice3.setAttribute("style", "display: none");
	choice4.setAttribute("style", "display: none");

	document.getElementById('fname').addEventListener('keyup', function (event) {
		if (event.which === 13) {

			var num = document.getElementById('fname').value;
			num = parseInt(num);

			if (randomNum === num) {
				console.log('yay');
			} else {
				console.log('oh no');
				affected += 600;
			}

			document.querySelector('.input').setAttribute("style", "display: none");
			choice1.setAttribute("style", "display: inline-block");
			choice2.setAttribute("style", "display: inline-block");
			choice3.setAttribute("style", "display: inline-block");
			choice4.setAttribute("style", "display: inline-block");

			play();
		} 
	});			// luck-based
}

function q10() {
	question.textContent = 'Where does more than half the breathable oxygen in the world come from?'

	choice1.textContent = 'Ocean!';
	choice2.textContent = 'Forest';
	choice3.textContent = 'Flowering Plants';
	choice4.textContent = 'Clouds';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q11() {

	question.textContent = 'How much oxygen does an average 50-year-old tree provide?'

	choice1.textContent = '1 person per year';
	choice2.textContent = '4 person per year!';
	choice3.textContent = '8 person per year';
	choice4.textContent = '10 person per year';
	
	var answer = choice2.textContent;
	
	removeOptionIfEmpty();
	choiceTwoIsRight(answer);
}

function q12() {

	question.textContent = 'When was the first Earth Day?'

	choice1.textContent = '1970!';
	choice2.textContent = '1982';
	choice3.textContent = '1999';
	choice4.textContent = '2003';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q13() {
	question.textContent = 'Which land-based ecosystem holds the most biodiversity, i.e. concentration of plants and animals?'

	choice1.textContent = 'Tropical rainforest';
	choice2.textContent = 'African Savannah';
	choice3.textContent = 'South Pacific islands';
	choice4.textContent = 'Coral reefs';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q14() {
	question.textContent = 'Where does more than half the breathable oxygen in the world come from?'

	choice1.textContent = 'Ocean!';
	choice2.textContent = 'Forest';
	choice3.textContent = 'Flowering Plants';
	choice4.textContent = 'Clouds';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q15() {

	question.textContent = 'How much oxygen does an average 50-year-old tree provide?'

	choice1.textContent = '1 person per year';
	choice2.textContent = '4 person per year!';
	choice3.textContent = '8 person per year';
	choice4.textContent = '10 person per year';
	
	var answer = choice2.textContent;
	
	removeOptionIfEmpty();
	choiceTwoIsRight(answer);
}

function q16() {

	question.textContent = 'When was the first Earth Day?'

	choice1.textContent = '1970!';
	choice2.textContent = '1982';
	choice3.textContent = '1999';
	choice4.textContent = '2003';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q17() {
	question.textContent = 'Which land-based ecosystem holds the most biodiversity, i.e. concentration of plants and animals?'

	choice1.textContent = 'Tropical rainforest';
	choice2.textContent = 'African Savannah';
	choice3.textContent = 'South Pacific islands';
	choice4.textContent = 'Coral reefs';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}

function q18() {
	question.textContent = 'Which land-based ecosystem holds the most biodiversity, i.e. concentration of plants and animals?'

	choice1.textContent = 'Tropical rainforest';
	choice2.textContent = 'African Savannah';
	choice3.textContent = 'South Pacific islands';
	choice4.textContent = 'Coral reefs';
	
	var answer = choice1.textContent;
	
	removeOptionIfEmpty();
	choiceOneIsRight(answer);
}




// console.log(questionFunctArr);
// var questionFunctArr = [q1, q2]



















