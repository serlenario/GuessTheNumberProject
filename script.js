'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
	const guessingNumber = Number(document.querySelector('.number-input').value);

	if (!guessingNumber) {
		document.querySelector('.guess-message').textContent =
			'Введите число от 1 до 20';
	} else if (guessingNumber == secretNumber) {
		document.querySelector('.guess-message').textContent = 'Правильно!';
		document.querySelector('.question').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = 'rgb(9, 250,21)';
		document.querySelector('.question').style.width = '50rem';
		document.querySelector('h1').textContent = 'Congratulation!';

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = score;
		}
	} else if (guessingNumber !== secretNumber) {
		document.querySelector('.guess-message').textContent =
			guessingNumber > secretNumber ? 'Меньше' : 'Больше';

		if (score > 1) {
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('h1').textContent = 'Game over...';
			document.querySelector('.score').textContent = score - 1;
			document.querySelector('.question').textContent = secretNumber;
			document.querySelector('body').style.backgroundColor = 'red';
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;

	document.querySelector('.question').textContent = '???';
	document.querySelector('.guess-message').textContent = 'Начни угадывать!';
	document.querySelector('.score').textContent = score;
	document.querySelector('body').style.backgroundColor = 'black';
	document.querySelector('.question').style.width = '25rem';
	document.querySelector('.number-input').value = '';
	document.querySelector('h1').textContent = 'Угадай число!';
});
