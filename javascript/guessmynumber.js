'strict';

const resetButton = document.getElementById('reset');
const submitForm = document.querySelector('form');
const hint = document.getElementById('hint');
const revealText = document.getElementById('revealText');
const scoreText = document.getElementById('score');
const highScoreText = document.getElementById('highScore');
const input = document.querySelector('input[type=number]');

//must be defined prior to being called in the setting of solution
const randomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};
//let - need them to be editable
let solution = randomNumber();
let formValue = submitForm.value;
let inputValue = document.querySelector('input[type=number').value;
let score = 20;
let highScore = 0;

// function tools
const keepScore = function () {
  score -= 1;
  scoreText.innerHTML = score;
}

const highScoreCompare = function () {
  if (highScore < score) {
    highScore = score;
    highScoreText.innerHTML = highScore;//this only need to be here as starting is 0 so only need to chagne if its above that aka the parameters purpose
  }
  // else {highScore = highScore;}//so we dont even need this code here as it stays at 0 till changed then changes from there bypassing this code from the very start
}           //ehre unless the score is higher than highscore then we do changes otherwise no change needed

const solutionReveal = function () {
  document.body.style.backgroundColor = 'green';
  input.style.backgroundColor = 'green';
  revealText.innerHTML = solution;
  hint.innerHTML = 'Correct number'
  revealText.classList.add('class', 'revealWide');
}

const reset = function () {
  revealText.innerHTML = '&quest;'
  document.body.style.backgroundColor = 'rgb(34, 34, 34)';
  input.style.backgroundColor = 'rgb(34, 34, 34)';
  score = 20;
  scoreText.innerHTML = score;
  hint.innerHTML = 'Start Guessing...';
  revealText.classList.remove('class', 'revealWide');
}

const gameOver = function () {
  if (score === 0) {
    hint.innerHTML = 'Game over';
    document.body.style.backgroundColor = 'rgb(101, 0, 0';
    input.style.backgroundColor = 'rgb(101, 0, 0';
    revealText.innerHTML = '&#9785;'
  }
}


const scoreTracking = function () {
  if (score > 0) {
    hint.innerHTML = inputValue < solution ? 'Too low!' : 'Too high!';//when doing this thingy forgot wahat its called but has to equal to something
    keepScore();
    gameOver();
  }
}
//nested function
const guessCheck = function () {
  if (!inputValue) { //added after if no value in input then boolean if true and below coe runs, this way check if there was anything submitted in the first place
    hint.textContent = 'No number'
  }
  else if (inputValue === solution) {
    solutionReveal();
    highScoreCompare();
  } else {
    scoreTracking();//added this way game ends at zore and cant go into negatives score decrease is only enabled when score is above 0 anything below no onger ticks down
  }
}

//events
submitForm.addEventListener('submit', function (e) {
  e.preventDefault();
  inputValue = Number(document.querySelector('input[type=number').value);
  guessCheck();
  document.querySelector('input[type=number').value = '';
})

resetButton.addEventListener('click', function () {
  solution = randomNumber();
  reset();
})



//---------------------------------------------------------jonas solution

//NOTE dont have to use get elemnet by id can use query selector then jsut add the css targeting ex #hint/.scores/h1
//textContent property
//when a function does not have a name like inside of an eventlistener its called and anounomous function
//anyh input from webpage is almost always generated as a string

//refactering - cleaning up code getting rid of repetitive code
  //check for repetition 





// const gameOver = function () {
//   if (score === 0) {
//     hint.innerHTML = 'Game over';    //here instead of wirting that out everytime can have funtion do it and jdut pass in the meessage ai want as the parameter
//     document.body.style.backgroundColor = 'rgb(101, 0, 0';
//     input.style.backgroundColor = 'rgb(101, 0, 0';
//     revealText.innerHTML = '&#9785;'
//   }
// }

// const chageHintText = function (messeageIWantDisplayed) {
//   hint.innerHTML = 'Game over'
// }

// then written in funtion above like --

// / const gameOver = function () {
  //   if (score === 0) {
  //     chageHintText('Game over');
  //     document.body.style.backgroundColor = 'rgb(101, 0, 0';
  //     input.style.backgroundColor = 'rgb(101, 0, 0';
  //     revealText.innerHTML = '&#9785;'
  //   }
  // } //then can do that for each dif element seleted change text