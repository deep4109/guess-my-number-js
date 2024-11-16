'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉🎉Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let secretNumber = getRandomInt(1, 20);
let highScore = 0;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉🎉Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🫷 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '➿you lost the game';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🫷 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '➿you lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  secretNumber = getRandomInt(1, 20);
  document.querySelector('.number').textContent = secretNumber;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
});
