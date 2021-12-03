'use strict';
console.log('hihi');



const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


// get datat about a football game
// 7 task
// creat an array for each team called player1 and player2
// const player1 = game.players[0];
// const player2 = game.players[1];
// console.log(player1);
// console.log(player2);
const [player1, player2] = game.players;
console.log(player1, player2)
// first player in array will be goal keeper then rest are filed players (creat varible  GK and array for remianding filed players)
const [gk1, ...fieldPlyaers1] = player1;
const [gk2, ...fieldPlyaers2] = player2;
console.log(gk1, fieldPlyaers1);
console.log(gk2, fieldPlyaers2);
// create an array called allPlayers that contain all players from both teams
const allPlayers = [...player1, ...player2]
console.log(allPlayers);
// munich used subplayers so create new array player1final containig all origial players + thiago, coutinin, perisic
const player1final = [...player1, 'tHiago', 'cOutinin', 'pErisic'];
console.log(player1final);
// then take game.odds object and create one varible for eavh odd( team1, draw, team2)
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1);
// console.log(draw);
// console.log(team2);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// ctreate function called printGoals that recieves whatever num of player (not an array) names and prints each of them in the console/ along with the number of goal scored in total
//not an array 
//print each player to the console
//print string of total ogals scored
const printGoals = function (...numPlayers) {
    console.log(numPlayers);
    console.log(numPlayers.length);
    // console.log(game.score);
    // console.log(numPlayers);
}
// const namees = [1, 2, 3, 4, 5, 6]
// printGoals("Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich");
printGoals(...game.scored);
// test data for task 6: use players davie, muller, lwedoski, kimichi. then call funciton again with the players form game.scorecard

// then log the team with the lowes odd withoput using a if stament or ternary operrator aka ?:; thingy believe
// (console.log(game.team1) && console.log(game.team2));
team1 < team2 && console.log('team 1 ids more likely to win');// if 1st evaluation is true then contuinues to run the next
team1 > team2 && console.log('team 2 ids more likely to win');//if 1st is false short circuts and nothing runs only if true will it cuntinue to next 

//JONAS SOLUTION



