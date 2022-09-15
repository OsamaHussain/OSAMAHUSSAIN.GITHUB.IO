// Variables
const btn = ['scissor', 'paper', 'rock'];
const winner = document.querySelector('#winner');
const userOut = document.querySelector('#user-input');
const compOut = document.querySelector('#computer-input');
const userScoreOut = document.querySelector('#userScore');
const compScoreOut = document.querySelector('#computerScore');
let userScore = 0;
let computerScore = 0;
let userName;

function startGame() {
	userName = document.querySelector('#username').value;
	userName = userName === '' ? 'User' : userName;
	let screen01 = document.querySelector('#screen-01');
	let screen02 = document.querySelector('#screen-02');

	screen01.style.display = 'none';
	screen02.style.display = 'flex';
}

function userInput(input) {
	let result = ['Draw', userName + ' Win', 'Computer Win'];
	let comp = computerInput();
	let decide;
	if (input === btn[0]) {
		decide = input === btn[comp] ? 0 : btn[comp] === btn[1] ? 1 : 2;
	} else if (input === btn[1]) {
		decide = input === btn[comp] ? 0 : btn[comp] === btn[2] ? 1 : 2;
	} else if (input === btn[2]) {
		decide = input === btn[comp] ? 0 : btn[comp] === btn[0] ? 1 : 2;
	} else {
		console.log('Wrong input');
	}

	if (decide === 1) {
		userScore++;
	} else if (decide === 2) {
		computerScore++;
	}

	winner.innerText = result[decide];
	userOut.innerText = input;
	compOut.innerText = btn[comp];
	userScoreOut.innerText = userScore;
	compScoreOut.innerText = computerScore;
}
function computerInput() {
	return Math.floor(Math.random() * btn.length);
}
