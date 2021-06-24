// +++++++ DOM Objects +++++++
// Add and event listener to the buttons
const buttons = document.querySelectorAll('.button');
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const handsPicked_span = document.getElementById('hands-picked');
const conclusion_span = document.getElementById('conclusion');

// +++++++ Game Logic +++++++
let round = 1;
let userScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;
let choices = ['rock', 'paper', 'scissors'];
let choicesEmojis = ['✊🏿', '✋🏿', '✌🏿'];
let winVerbs = ['crushes', 'covers', 'cuts'];
let loseVerbs = ['covered by', 'cut by', 'crushed by'];

//  Generate a random number from 0 to choices.length
//  Using randNumber to randomly pick a hand and set computerChoice
function computerPlay() {
	let randomNumber = Math.floor(Math.random() * choices.length);
	computerChoice = choices[randomNumber];
	console.log(`Computer choice: ${computerChoice}`);
}

function userPlay(e) {
	userChoice = e.target.id;
	console.log(`User choice: ${userChoice} `);
}

function printScores() {
	userScore_span.textContent = userScore;
	console.log(`User score: ${userScore}`);

	computerScore_span.textContent = computerScore;
	console.log(`Computer score: ${computerScore}`);
}

function playRound(e) {
	console.log(`Round ${round++}: `);
	userPlay(e);
	computerPlay();
	let verb;

	switch (userChoice + computerChoice) {
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			userScore++;
			if (userChoice === 'rock') {
				verb = winVerbs[0];
				userChoice = choicesEmojis[0];
				computerChoice = choicesEmojis[2];
			}
			if (userChoice === 'paper') {
				verb = winVerbs[1];
				userChoice = choicesEmojis[1];
				computerChoice = choicesEmojis[0];
			}
			if (userChoice === 'scissors') {
				verb = winVerbs[2];
				userChoice = choicesEmojis[2];
				computerChoice = choicesEmojis[1];
			}

			handsPicked_span.textContent = `${userChoice} ${verb} ${computerChoice}`;
			conclusion_span.textContent = 'You WIN!';
			printScores();
			break;
		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			computerScore++;
			if (userChoice === 'rock') {
				verb = loseVerbs[0];
				userChoice = choicesEmojis[0];
				computerChoice = choicesEmojis[1];
			}
			if (userChoice === 'paper') {
				verb = loseVerbs[1];
				userChoice = choicesEmojis[1];
				computerChoice = choicesEmojis[2];
			}
			if (userChoice === 'scissors') {
				verb = loseVerbs[2];
				userChoice = choicesEmojis[2];
				computerChoice = choicesEmojis[0];
			}
			handsPicked_span.textContent = `${userChoice} ${verb} ${computerChoice}`;
			conclusion_span.textContent = 'You LOSE!';
			printScores();
			break;
		case 'rockrock':
		case 'paperpaper':
		case 'scissorsscissors':
			if (userChoice === 'rock') {
				userChoice = choicesEmojis[0];
				computerChoice = choicesEmojis[0];
			}
			if (userChoice === 'paper') {
				userChoice = choicesEmojis[1];
				computerChoice = choicesEmojis[1];
			}
			if (userChoice === 'scissors') {
				userChoice = choicesEmojis[2];
				computerChoice = choicesEmojis[2];
			}
			handsPicked_span.textContent = `${userChoice} ties ${computerChoice}`;
			conclusion_span.textContent = 'You DRAW!';
			break;
		default:
			console.log(`${userChoice} is invalid.\nTry Again`);
			break;
	}
}

function compareScores() {
	if (userScore === 5 || computerScore === 5) {
		if (userScore > computerScore) {
			console.log('Congrats. You WON!');
			alert('Congrats. You WON!');
			window.location.reload();
		}
		if (userScore < computerScore) {
			console.log('Tough luck. You LOST!');
			alert('Tough luck. You LOST!');
			window.location.reload();
		}
		if (userScore == computerScore) {
			console.log('Its a draw. You TIED!');
			alert('Its a draw. You TIED!');
			window.location.reload();
		}
	}
}

function addGlow(button) {
	if (conclusion_span.textContent === 'You WIN!') {
		button.classList.add('green-glow');
		setTimeout(() => {
			button.classList.remove('green-glow');
		}, 300);
	} else if (conclusion_span.textContent == 'You LOSE!') {
		button.classList.add('red-glow');
		setTimeout(() => {
			button.classList.remove('red-glow');
		}, 300);
	} else {
		button.classList.add('grey-glow');
		setTimeout(() => {
			button.classList.remove('grey-glow');
		}, 300);
	}
}

// +++++++ Button Eventlistners +++++++
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		playRound(e);
		addGlow(button);
		setTimeout(() => {
			compareScores();
		}, 150);
	});
});
