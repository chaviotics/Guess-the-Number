'use strict';

let numberToBeGuessed = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const again = document.querySelector('.again');
const scoreIndicator = document.querySelector('.score');
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const message = document.querySelector('.message');

number.textContent = numberToBeGuessed;

function displayMessage(_message) {
  message.textContent = _message;
}

check.addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // when no input
  if (!guessNumber) {
    // message.textContent = 'No Number!';
    displayMessage('Enter a number!');
  } 

  // when guess number is correct
  else if (guessNumber === numberToBeGuessed) {
    displayMessage('Correct!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30';
    check.disabled = true;
    
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when guess number is lower or higher
  else if (guessNumber !== numberToBeGuessed) {
    if (score > 1) {
      displayMessage(guessNumber > numberToBeGuessed ? 'The number is smaller.' : 'The number is higher.'); // checks if guess number is higher or smaller
      score--;
      scoreIndicator.textContent = score;
    } else {
      score--;
      displayMessage('You lose!');
      scoreIndicator.textContent = score;
      document.querySelector('body').style.backgroundColor = '#be0000';
      check.disabled = true;
    }
  } 
});

// resetting the game
again.addEventListener('click', function () {
  numberToBeGuessed = Math.trunc(Math.random() * 20) + 1;
  number.textContent = numberToBeGuessed;

  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222'
  check.disabled = false;
});
