'use strict'
console.log('code challenge # 3')

const gameEvent = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow Card'],
])

// CODE CHALLENGE #3 ------------------------------------------------
//TASK #1 - creat an array named 'events' of all the differnt events without any duplicates
// sound like the job for a set (or array to set) only want the unique events / seems like that should be 4 we see
//
const events = [...new Set(gameEvent.values())]
console.log(events);

//[DONZO]


//TASK #2 - yellow on 64 wan unfair so we want to delete this event from the log 
// working with map so thinking we use the delete method then select with the key and done
// wants me to calculate those 9 minutes
// 
gameEvent.delete(64);
console.log(gameEvent);

//[DONZO]


//TASK #3 - print string 'an event happened every 9 minutes (keep in mind game is 90 min total)
// so here not sure what its asking for / does it want me to find the avg time events occured
// want us to calculatee the avg then print string using that calcualed result - 
//  --do by using the number 90 as thats minutes in the game divided by number of events happened aka that maps size 
const timeAvg = 92 / gameEvent.size;
console.log(timeAvg);
console.log(`An event happened, on average, every ${timeAvg} minutes`);

// [DONZO]


//TASK #4 - loop over the event and log all event marking wether they occured in the 1st or 2nd half (2nd beign after 45min of game)
// so sound like regular loop but with a parameter check / time(key) <= 45 1st otherwise 2nd 
// for loop use 
// so log all the event
// for parameter true false can be added to the map for use (the procide coresponding string needed)
// 

//addign true false key to map for later use 

// gameEvent.set(true, '[FIRST HALF]').set(false, '[SENCOND HALF]')
// console.log(gameEvent);
//      --cant use this / created issue when looping through with parameter compare on number but last two in map were now booleans no bueno

//  --1st let loop over map print all entries time and event
for (let [time, event] of gameEvent.entries()) {
    const str = time > 45 ? '[SENCOND HALF]' : '[FIRST HALF]';
    console.log(`${str} ${time}: ${event}`);
    // console.log(`${time}: ${event}`);

}
//  --need another way to apply the parameter then get corresponding string vlaue from it
//  ---and assuming constraint that cant creat seperate data structure for this 
    //----ideas: could use ternery operator thinkits called or a simply if else would sufiese as well
    //-----thing with the if and else is that i would basicly need to write out ssame stuff twice only changing a portion of the string (violate rule of not repeating onself)


// if (typeof (key) === 'number')









































