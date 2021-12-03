'strict'
console.log('hihi');
// game is a sort of roll dice add all nums up want to roll to largest number without busting / bust happensds if you roll a 1
// can maybe remove all cleaases the nonly apply one want ed for dice display/  selecting the class atribute and set it to '' empty string clearing it removesAll not sure if thats a thing



// let
// //bog number dislay
// let player1Score = 0;
// let player2Score = 0;
// //small changin g number display
// let player1Current = 0;
// let player2Current = 0;

// let diceRoll = 0;
// let currentPlayer = 1;
// const
// const resetButton = document.querySelector('#reset');
// const rollDiceButton = document.querySelector('#roll');
// const holdButton = document.querySelector('#hold');
// const player1ScoreText = document.querySelectorAll('h2')[0];
// const player2ScoreText = document.querySelectorAll('h2')[1];
// const player1CurrentText = document.querySelectorAll('.current')[0];
// const player2CurrentText = document.querySelectorAll('.current')[1];
// const allDiceDisplay = document.querySelectorAll('i');//all dice display html elements

// //tool function
// const randomNumber = function () {
//     return Math.floor(Math.random() * 6) + 1;
// };
//nested function
//events
//test
// console.log(randomNumber());
// console.log(resetButton);
// console.log(rollDiceButton);
// console.log(holdButton);
// console.log(player1ScoreText);
// console.log(player2ScoreText);
// console.log(player1CurrentText);
// console.log(player2CurrentText);
//plan
// holdButton.addEventListener('click', function () {
//     displayScore1(); //this would be for both palyes / can maybe switch by using modules check when bust and hold they can ony one of them a turn so we just look for the even and odd 
//     //the run same funciton but eith different pararmeter in () one for p1 then other for p2
// })
//now we defult to player one and only change to player 2 once
//either they bust (roll a 1one or the click the hold button)
// if (diceRollValue === 1 || holdButton == Clicked) {
//     'next palyers turn'
//     'lock player out from continuing to roll/ maybe dont need to sense assuming switch back and forth'
//     'once click will also return the diceRoll vlaue back to  0 zero starting for the next palyer'
// }
//have to lock out player one from rolling dice once he bust or holds
// rollDiceButton.addEventListener('click', function () {
//     hideDiceDisplay();//hides previus die displayed so only current die value is displayed
//     diceRoll = randomNumber();//this will add every result dice rool to the next nad next all together giving us the total of all rolls
//     dieDisplay(diceRoll);
//     currentBustCheck();
//     console.log(diceRoll);
// })

// displaying corresponding die 
//here thinking do the cases or lots if same function
// const dieDisplay = function (diceRoll) {
//     switch (diceRoll) {
//         case 1:
//             document.querySelector('.gg-dice-1').classList.remove('hidden');
//             break;
//         case 2:
//             document.querySelector('.gg-dice-2').classList.remove('hidden')
//             break;
//         case 3:
//             document.querySelector('.gg-dice-3').classList.remove('hidden')
//             break;
//         case 4:
//             document.querySelector('.gg-dice-4').classList.remove('hidden')
//             break;
//         case 5:
//             document.querySelector('.gg-dice-5').classList.remove('hidden')
//             break;
//         case 6:
//             document.querySelector('.gg-dice-6').classList.remove('hidden')
//             break;
//     }
// }
// if (diceRoll === 1) {//NOPT DONE
//     console.log('switch players');

// }
// //another thing is that this whoel game only continue if any individual score is below 100 otherwise the game end and no functionalyty should be avalible
// if (player1Score < 100 && player2Score < 100) { //OVER ARCHING EVERTYTHING BUT THE 'RESET' not done
//     'game is over'
//     'nothing should function/ only the ability to resart ganme then at that point all going again'
//     'basicly everything withing this if but the "reser" only if statment is true will al other workss'
// } else {
//     'change score of player who won to "WON"'
// }
//aply hidden clas back onto all but will this change do to not it defined prior lets try it
// const hideDiceDisplay = function () {
//     for (let i = 0; i < allDiceDisplay.length; i++) {
//         allDiceDisplay[i].classList.add('hidden');
//     }
// }

// const displayScore1 = function () {//NOT DONE
//     player1Score = player1Current;
//     player1ScoreText.textContent = player1Score;
// }
// const displayCurrent = function () {//NOT DONE havent figured the player switch yet
//     player1CurrentText.textContent = player1Current;
// }
//will have to loop over with regualer query selector ||  .remove('.dieDisplay')

// const currentBustCheck = function () {//need to be track only become the SCORE once hold button if puched not there yet
//     if (diceRoll > 1) {
//         player1Current += diceRoll;
//     }
//     else if (diceRoll === 1) {
//         diceRoll = 0;
//         player1Current = 0;
//     }
//     displayCurrent();

// }
// resetButton.addEventListener('click', function () {
//     zeroOur();
//     displayScore1();
//     displayCurrent();
//     hideDiceDisplay();
// })
// const zeroOur = function () {
//     diceRoll = 0;
//     player1Current = 0;
// }
//  HAVE A CURRENT PLAYER VARIBLE THAT CHANGES ONLY WHEN BUST OR HOLD EVENT LIKE BELOW AS EXAMPLE
// var player_one = 1;
// function display_input(square){ 
//     if ( player_one == 1 ){
//         document.getElementById(square).innerHTML = "X";
//         player_one = 0;
//     } else {
//         document.getElementById(square).innerHTML = "O";    
//         player_one = 1;
//     }   
// }
// then maybe can do all funtinos but only change is the parameter export. function(1) for player 1 / function(2) for player 2 ect.. 
// if (currentPlayer === 1) {//NOT DONE

// }
// clean up work curently for only one player opr just player 1
// let 
let player1Score = 0;
let player2Score = 0;
let player1Current = 0;
let player2Current = 0;
let diceRoll = 0;
let currentPlayer = 1;
// const
const resetButton = document.querySelector('#reset');
const rollDiceButton = document.querySelector('#roll');
const holdButton = document.querySelector('#hold');
const player1ScoreText = document.querySelectorAll('h2')[0];
const player2ScoreText = document.querySelectorAll('h2')[1];
const player1CurrentText = document.querySelectorAll('.current')[0];
const player2CurrentText = document.querySelectorAll('.current')[1];
const allDiceDisplay = document.querySelectorAll('i');
const player1Box = document.querySelectorAll('section')[0]
const player2Box = document.querySelectorAll('section')[1]
// tool function

const randomNumber = function () {
    return Math.floor(Math.random() * 6) + 1;
}
const zeroOur = function () {
    currentPlayer = 1;
    diceRoll = 0;
    player1Current = 0;
    player2Current = 0;
    player1Score = player1Current;
    player2Score = player2Current;
    player1CurrentText.textContent = player1Current;
    player2CurrentText.textContent = player2Current;
    display();

}
const display = function () {
    player1ScoreText.textContent = player1Score;
    player2ScoreText.textContent = player2Score;
    player1CurrentText.textContent = player1Current;
    player2CurrentText.textContent = player2Current;
}
const hideDiceDisplay = function () {
    for (let i = 0; i < allDiceDisplay.length; i++) {
        allDiceDisplay[i].classList.add('hidden');
    }
}
const dieDisplay = function (diceRoll) {
    document.querySelector(`.gg-dice-${diceRoll}`).classList.remove('hidden');
}

const playerSwitch = function () {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    if (currentPlayer === 1) {
        player1Box.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        player2Box.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

    } else {
        player2Box.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        player1Box.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';

    }
    // return result
}
// nested funtion
const currentBustCheck = function () {
    switch (currentPlayer) {
        case 1:
            result = diceRoll === 1 ? (diceRoll = 0, player1Current = 0, playerSwitch()) : player1Current += diceRoll;
            display();
            return result;
        case 2:
            result = diceRoll === 1 ? (diceRoll = 0, player2Current = 0, playerSwitch()) : player2Current += diceRoll;
            display();
            return result;
    }
}

// events
rollDiceButton.addEventListener('click', function () {
    hideDiceDisplay();//hides previus die displayed so only current die value is displayed
    diceRoll = randomNumber();//this will add every result dice rool to the next nad next all together giving us the total of all rolls
    dieDisplay(diceRoll);
    currentBustCheck();
})
holdButton.addEventListener('click', function () {
    // player2Score += player2Current;
    // player1Score += player1Current;

    if (currentPlayer === 1) {
        player1Score += player1Current;
    } else { player2Score += player2Current; }
    player1Current = 0;
    player2Current = 0;
    display();
    playerSwitch();
    console.log(player2Score);
    testingStuff();
})

resetButton.addEventListener('click', function () {
    display();
    hideDiceDisplay();
    zeroOur();
})
// const testingStuff = function () {
//     if (player2Score > 10) {
//         player2Box.style.backgroundColor = 'gray';
//     }
// }

// WE GOT WEVERYTHING WORKING BUT THE 100POINT CHECK NOT SURE WHAT THAT SHOULD INCOMPASS
// tryed all the events but reset but had no effect on button function os functions runnig at all

// JONAS SOLUTION
//NOTE - he uses cureent player = 0 and one becuase if used as boolean 1 if false and ther true pretty genius
// this way can use one varible to hold score will differntialt by the positioning and index cxan swtich between them
//for the css dice used img and simply changers img src accoindingly based on the dice value
//i could have achieve something similar with classes i just change the class applyed to element then remove and apply next one for display / this way not hidding all classes already spplyed 
//have one class that gives structure to element / then the interchangeble one contaning the style for each dice / may still ned to change the displays thoses or add or remove hiffen class
// CLASSLIST. TOGGLE   can toggle classes if not there it adds it if it is there it removes it thats genius toggle sthe class on and off
//also instead as mass removeing or adding a class we can also check for it then take appropriate action by using the [classList.contains ] result in a boolean to work with 
//we ant to take into account how page should look from start initiate to clear everything from the bat / this servse to yes clear everything but also gives you tool to do that when you please
//games use lots use commonly used logic 
//having the is game over valriable good to lock stuff out working while value is true but when score hit triggers its to flase and now the functinoality no long work till reset value to true

//he uses an array to hold player scores both of the ex. [0, 0]
// if (dice !== 1) {
//     currentScore += dice;
//     documnet.getElementById(`current--${activePlayer}`).textContent = currentScore   //this way can select based on whats passed in and dont need to duplicete one for each player
//     currentScoreElemment.textContent = currentScore; //better version written just above
// } else {
//     documnet.getElementById(`current--${activePlayer}`).textContent = 0;     //zeros out for next player this way score isint carried over from one to the other
//     activePlayer = activePlayer === 0 ? 1 : 0;   //if 0 switches to 1
//     currentScore = 0;
// }

//JONAS CODE 
// 'use strict';

// // Selecting elements
// const player0El = document.querySelector('.player--0');//selects the section for the color change show witch current player
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');//displays player 1 score
// const score1El = document.getElementById('score--1');//displays player 2 score
// const current0El = document.getElementById('current--0');//dispplay tracking accumilative score for player1 
// const current1El = document.getElementById('current--1');//dispplay tracking accumilative score for player2 

// const diceEl = document.querySelector('.dice');//displays the dice
// const btnNew = document.querySelector('.btn--new');//new game / reset button
// const btnRoll = document.querySelector('.btn--roll');//dice roll button
// const btnHold = document.querySelector('.btn--hold');//hold button

// let scores, currentScore, activePlayer, playing;  //this creates the variables (declares) but dosent assing them value that comes later

// // Starting conditions
// const init = function () {
//     scores = [0, 0];//both the palyers score
//     currentScore = 0;//trackign the current score dicerools accumnilated when not a 1
//     activePlayer = 0;//
//     playing = true;//tells us wether the game is still going or over 

//     score0El.textContent = 0;    //set all displays to 0
//     score1El.textContent = 0;
//     current0El.textContent = 0;
//     current1El.textContent = 0;

//     diceEl.classList.add('hidden');//hides dice display
//     player0El.classList.remove('player--winner');//remove color class showing who won the game
//     player1El.classList.remove('player--winner');
//     player0El.classList.add('player--active');//togles the class that chnges color to show which player is the active player
//     player1El.classList.remove('player--active');
// };
// init();   //initial to clear all displays and preovide values to variables

// const switchPlayer = function () {
//     document.getElementById(`current--${activePlayer}`).textContent = 0;     //use template litteral this way the active player determions the display 
//     currentScore = 0;  //clears current score back to zore for each active player to start at
//     activePlayer = activePlayer === 0 ? 1 : 0;       // actuial player switch done by the value change not to different index positioning but also elements and boolean switch
//     player0El.classList.toggle('player--active');    //togles the class that chnges color to show which player is the active player
//     player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//     if (playing) {
//         // 1. Generating a random dice roll
//         const dice = Math.trunc(Math.random() * 6) + 1;

//         // 2. Display dice
//         diceEl.classList.remove('hidden');
//         diceEl.src = `dice-${dice}.png`;

//         // 3. Check for rolled 1
//         if (dice !== 1) {
//             // Add dice to current score
//             currentScore += dice;
//             document.getElementById(
//                 `current--${activePlayer}`
//             ).textContent = currentScore;
//         } else {
//             // Switch to next player
//             switchPlayer();
//         }
//     }
// });

// btnHold.addEventListener('click', function () {
//     if (playing) {
//         // 1. Add current score to active player's score
//         scores[activePlayer] += currentScore;
//         // scores[1] = scores[1] + currentScore

//         document.getElementById(`score--${activePlayer}`).textContent =
//             scores[activePlayer];

//         // 2. Check if player's score is >= 100
//         if (scores[activePlayer] >= 100) {
//             // Finish the game
//             playing = false;
//             diceEl.classList.add('hidden');

//             document
//                 .querySelector(`.player--${activePlayer}`)
//                 .classList.add('player--winner');
//             document
//                 .querySelector(`.player--${activePlayer}`)
//                 .classList.remove('player--active');
//         } else {
//             // Switch to the next player
//             switchPlayer();
//         }
//     }
// });

// btnNew.addEventListener('click', init);