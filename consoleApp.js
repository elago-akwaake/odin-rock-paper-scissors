let userScore;
let computerScore;
let userChoice;
let computerChoice;
let choices = ['rock', 'paper', 'scissors'];

//  Generate a random number from 0 to choices.length
//  Using randNumber to randomly pick a hand and set computerChoice
function computerConsolePlay() {
	let randomNumber = Math.floor(Math.random() * choices.length);
	computerChoice = choices[randomNumber];
	console.log(`Computer choice: ${computerChoice}`);
}

function userConsolePlay() {
	let userPromptValue = prompt('Pick a hand. (0-2)', 0);
	userChoice = choices[userPromptValue];
	console.log(`User choice: ${userChoice} `);
}

function userConsolePlayText() {
	let userPromptValue = prompt(
		'Pick a hand (rock | paper | scissors)',
		'paper'
	);
	userChoice = userPromptValue.toLowerCase();
	console.log(`User choice: ${userChoice} `);
}

function printConsoleResults() {
	console.log(`User score: ${userScore}`);
	console.log(`Computer score: ${computerScore}`);
}

function playConsoleRound() {
	userConsolePlayText();
	computerConsolePlay();

	switch (userChoice + computerChoice) {
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			userScore++;
			console.log(`${userChoice} beats ${computerChoice}.You WIN!`);
			printConsoleResults();
			break;
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			computerScore++;
			console.log(`${userChoice} loses to ${computerChoice}.You LOSE!`);
			printConsoleResults();
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

function playConsoleGame() {
	userScore = 0;
	computerScore = 0;
	for (let i = 0; i < 5; i++) {
		console.log(`Round ${i + 1}:`);
		playConsoleRound();
	}
	printConsoleResults();
	if (userScore > computerScore) console.log('Congrats. You WON!');
	if (userScore < computerScore) console.log('Tough luck. You LOST!');
	if (userScore == computerScore) console.log('Its a draw. You TIED!');
}

playConsoleGame();

// window.location.reload();
