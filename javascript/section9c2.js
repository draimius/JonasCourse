'use strict'
// console.log('hihi');
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

//code challeedge 'douce'
//TASK
//1 loop over the game.score print each palyer anemt o console along with the goal number (ex. goal 1: lewaski)
//2 use loop to calculate the avg odds to the console (calc avg then log it)
//3 print the 3 odds to the console (ex. odd of team1 vicotry : 1.33, odd of draw: 3.25 ect..)[note oood ansd geame object same property name]
//BONUS creat object callled 'scored' which contains the NAME of player who scored as property, and the number of goals as tha value.(ex. {ganrly: 1, hummels: 1, lweadski: 2)




//1-------------------------------------------------------------------------------------------------------------------------

console.log('   Challege one');
const gameLoop = function () {
    for (let player of Object.entries(game.scored)) {
        // console.log(i);
        let [i, name] = player;
        console.log(`goal ${Number(i) + 1}: ${name}`);
    }
}
// gameLoop();

// ---V2 (solutions are very similar mine)
const gameLoop1 = function () {
    for (let [i, player] of (game.scored.entries())) {

        console.log(`goal ${i + 1}: ${player}`)
    };
}
gameLoop1();
//2---------------------------------------------------------------------------------------------------------------------------

console.log('   Challege two')

const avg = function (objKey) {
    let result = 0;
    for (let odd of Object.values(objKey)) {
        // console.log(odd)
        result += odd;
    }
    console.log(result / Object.values(objKey).length);
}

avg(game.odds);
// ---V2 solution pretty much the same jsut hard coded the datastructure used and no funtion only for of loop and variables

const odds = Object.values(game.odds);
let avarage = 0;
for (const odd of odds) {
    avarage += odd;
};
avarage /= odds.length;
console.log(avarage);

//3---------------------------------------------------------------------------------------------------------------------------

console.log('   Challege three')

const printOdds = function () {
    let [[team1, team1Odd], [x, xOdd], [team2, team2Odd]] = Object.entries(game.odds);
    console.log(`odds of ${game.team1} victory: ${team1Odd}`);
    console.log(`odds of a draw: ${xOdd}`);
    console.log(`odds of ${game.team2} victory: ${team2Odd}`);
}
printOdds()

// ---V2 interesting solution instead of breaking down to multiple able to pull all with jsut 2 destructuring
// --- also only one string templates to produce all three with ternery operator and template
for (const [team, odd] of Object.entries(game.odds)) { //ok this part simply team and odds done pull them thats how they are in the object key and value
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; //ok so if key x does draw if not does victory for team name sentence
    // ----- and sense it loops runs through both the team names and thier corresponding odds at the same time genius
    console.log(`Odd of ${teamStr} ${odd}`) // then simpy priting coresponding name and odds with predetermined string based on wether key is 'x [DONZO]
}



//4------------------------------------------------------------------------------------------------------------------------
// NOT YET COMPLETE???????????????

// BONUS - creat object holding name of plyers who scored and the number of goal they made 
    // ex const scored = {
    //     names: game.scored
    //     gnarly: 1
    //     hummels: 1
    //     lebroski: 2
    // } - produce this without hard coding 
        // pull info from the object and calc from there

// SOLUTION-


// NOTES --  use .entries when pulling from an array but Object.entries(target) when woriking with an object