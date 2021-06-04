console.log('Hello');

let computerScore;
let playerScore;
function computerWin() {
	computerScore++;
}
function playerWin() {
	playerScore++;
}

// Create a function that randomly returns rock, paper or scissors
function computerPlay() {
	let randomNumber = Math.floor(Math.random() * 3 + 1);

	switch (randomNumber) {
		case 1:
			return 'ROCK';
		case 2:
			return 'PAPER';
		case 3:
			return 'SCISSORS';
	}
}

// Create function that  plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return 'Draw! You both picked ' + computerSelection;
	} else if (playerSelection === 'ROCK') {
		if (computerSelection === 'SCISSORS') {
			playerWin();
			return 'You win! ROCK beats SCISSORS';
		} else {
			computerWin();
			return 'You lose! PAPER beats ROCK';
		}
	} else if (playerSelection === 'PAPER') {
		if (computerSelection === 'ROCK') {
			playerWin();
			return 'You win! PAPER beats ROCK';
		} else {
			computerWin();
			return 'You lose! SCISSORS beats Paper';
		}
	} else if (playerSelection === 'SCISSORS') {
		if (computerSelection === 'PAPER') {
			playerWin();
			return 'You win! SCISSORS beats PAPER';
		} else {
			computerWin();
			return 'You lose! ROCK beats SCISSORS';
		}
	} else {
		return 'Invalid selction. Pick ROCK, PAPER or SCISSORS';
	}
}

// Create a function that plays the game until someone wins 5 times
function game() {
	computerScore = 0;
	playerScore = 0;
	let keepGoing = true;

	while (keepGoing) {
		// Ask and store player and computer selection
		// let playerHand = prompt('Pick a hand:' ).toUpperCase();
		let playerHand = computerPlay();
		let computerHand = computerPlay();

		console.log(playRound(playerHand.toUpperCase(), computerHand));
		if (computerScore == 5 || playerScore == 5) {
			keepGoing = false;
		}
	}

	console.log('Player Score: ' + playerScore);
	console.log('Computer Score: ' + computerScore);
	playerScore > computerScore
		? console.log('You won the game.')
		: console.log('You lost the game.');
}

game();
