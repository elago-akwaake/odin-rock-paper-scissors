let userScore;
let computerScore;
let userChoice;
let computerChoice;
let choices = ['rock', 'paper', 'scissors'];

//  Generate a random number from 0 to choices.length
//  Using randNumber to randomly pick a hand and set computerChoice
function computerPlay() {
	let randomNumber = Math.floor(Math.random() * choices.length);
	computerChoice = choices[randomNumber];
	console.log(`Computer choice: ${computerChoice}`);
}

function userPlay() {
	let userPromptValue = prompt('Pick a hand. (0-2)', 0);
	userChoice = choices[userPromptValue];
	console.log(`User choice: ${userChoice} `);
}

function userPlayText() {
	let userPromptValue = prompt(
		'Pick a hand (rock | paper | scissors)',
		'paper'
	);
	userChoice = userPromptValue.toLowerCase();
	console.log(`User choice: ${userChoice} `);
}

function printResults() {
	console.log(`User score: ${userScore}`);
	console.log(`Computer score: ${computerScore}`);
}

function playRound() {
	userPlayText();
	computerPlay();

	switch (userChoice + computerChoice) {
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			userScore++;
			console.log(`${userChoice} beats ${computerChoice}.You WIN!`);
			printResults();
			break;
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			computerScore++;
			console.log(`${userChoice} loses to ${computerChoice}.You LOSE!`);
			printResults();
			break;
		case 'rockrock':
		case 'paperpaper':
		case 'scissorsscissors':
			console.log(`${userChoice} ties ${computerChoice}.\nYou DRAW!`);
			break;
		default:
			console.log(`${userChoice} is invalid.\nTry Again`);
			break;
	}
}

function game() {
	userScore = 0;
	computerScore = 0;
	for (let i = 0; i < 5; i++) {
		console.log(`Round ${i + 1}:`);
		playRound();
	}
	printResults();
	if (userScore > computerScore) console.log('Congrats. You WON!');
	if (userScore < computerScore) console.log('Tough luck. You LOST!');
	if (userScore == computerScore) console.log('Its a draw. You TIED!');
}

game();
// playRound();
// playRound();
// playRound();

// window.location.reload();
