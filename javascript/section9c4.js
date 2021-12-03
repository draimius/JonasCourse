'use strict';
console.log('hihi');
//Write a prograam recieves list of varibel names in lowerCase and under_scored ---
// - and coverts them to CamelCase
//  The text will come from an input in DOM textares 
//   - and covertion will happend when button is pressed 
//  (for this sounde like will need an event listener and capture the summitted text, probably use a form submit listener---
//      - )
//code he gives for it - wanna practivce and make my own
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;


//Test Data - 
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

//Expected results - camel case and _ removed
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅


//of the bat thinking first lowjer case everything then one way another want to splite them 
//replace the index [0] of each the upper case veriosn push all that to an array 
//then join those back with nothing so thier sid eby side 
//thnking only issue be how do we creat the sepereate logs for each one 
//how do we grab and seperate by the new line 
//well some how need to identify that thats 5 seperate grab them 
//plug them in to the camelcasing funtion then done that should log each one by then
//jsut have the funtion run for each instance value / or maybe something with number of values from somewhere if able to do that 

//hints - 
//remember which cahracter defined a nre line 
//the solution nned to work with obnly those in format a_b
// start firts with the camel casing then later focus on the checks
//test your own data at the end

//SOLUTION - 
//what do we tackle first lets work from top bottom 
//1st the dom element 
//grabbing dom element 
//grabbing dom elements Value
//test grabbing several test data from dom insure working
//now logic - 
//work on cfunction that 1st turs all input in lowercase and trim any whiter space
//split it into array with \n it worked
//next camelcase it by looping over replace [0] with uppercase version 
//push that version to a new array 
//now replace the _ with '' (if cant replace with niothing we simply use the join somewhere previsuoly if neede to remove the under score)
//now that we got logic and dom - working for the one input line
//figure out how to get it working on multiple when we input multiple lines 
//says about the character for new line 99% sure that ' \n '  same in python
//if its that must be somewhere in fucntion we can input to resolve issue 
//--mayvbe somewerh in the capture of value / /maybe some prour destructuring before input to function
//--
//2 2-3x check everything use own test data, then look for ways to inprove it
// ------------------------------------------------------------------------

//MY SOLUTION V.1
// const button = document.querySelector('button');
// const textarea = document.querySelector('textarea');

// // console.log(textInput);

// button.addEventListener('click', function () {
//     let textInput = document.querySelector('textarea').value;
//     console.log(textInput);
//     const textSplit = textInput.split('\n');    //its an array not 
//     // const textTrim = textSplit.trim();
//     // console.log(textSplit); //from input into array to work with (original)
//     camelCase(textSplit);   //produces end result takes array and return array of camel case

//     textarea.value = ' ';


// })

// // --------------------------------------------------------------------------
// //fucntion to run and conver to camelcase
// //trim -  lowercase - loop - replace{_} - replace (a-A) - push to new array - join - print eachone
// // let testArr = ["underscore_case", " first_name", "Some_Variable", "  calculate_AGE", "delayed_departure"]
// const camelCase = function (arr) {
//     //working with array og f the bat
//     let newArr = [];
//     for (let userName of arr) {
//         let trimNlow = userName.trim().toLowerCase();   //all trimed and lower case
//         let [firstName, lastName] = trimNlow.split('_') //split to first and last name / also removed _
//         // let upName = firstName.replace(firstName[0], firstName[0].toUpperCase()) + lastName.replace(lastName[0], lastName[0].toUpperCase());
//         // newArr.push(upName);    //removed becuased relized needed return seperate logs and not simply the array
//         let upName = firstName.replace(firstName[0], firstName[0].toUpperCase()) + lastName.replace(lastName[0], lastName[0].toUpperCase());
//         console.log(upName);


//         // console.log(trimNlow);
//         // console.log(firstName, lastName);
//         // console.log(upName);
//     }
//     console.log(newArr);
// }


// // camelCase(testArr);

// // newName.push(nam.replace(nam[0], nam[0].toUpperCase()));
// //freakin killed this challenge [DONZO!!!!!!!!!!!!!!!!!!]

//------------------------------------------------------------------------------------

// //JONAS SOLUTION - his much more consice right
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (let [i, row] of rows.entries()) {
        let [first, second] = row.toLowerCase().trim().split('_');

        let output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
    }
})
//notice he did alot o fsteps in one like case trim split satcked what he could then worked on rest
//the temp literal and destructuring with the entries is really clever / destructure allow to get useful data all at once really coll
//the temp lit and stacking the pad and repeat /  really jknowing whre can stack and when to do seperate


// ---------------------------------------------------------------------------------------------
//MY SOLUTION V.2 - 
//redoing some as a capatilized all names instead of just the last  / so we change that no biggie
// [DONZO] 
//then also add the ✅ increasing by each loop and have them start at the same position
// [DONZO]
//--thinking add variable starting at 1 increase every loop thats will be how many check get adfded to string 
//  --for the positionning seems padding may eb the soulution jsut havent decided how exactly
//  ---- we repeat the checkmarks bam increment the digit

// //event listener - 
// const button = document.querySelector('button');
// const textarea = document.querySelector('textarea');


// button.addEventListener('click', function () {
//     let textInput = document.querySelector('textarea').value;
//     console.log(textInput);
//     const textSplit = textInput.split('\n');    //its an array not 
//     // const textTrim = textSplit.trim();
//     // console.log(textSplit); //from input into array to work with (original)
//     camelCase(textSplit);   //produces end result takes array and return array of camel case

//     // console.log(textSplit);
//     textarea.value = ' ';


// })

// //camel case function - 
// const camelCase = function (arr) {
//     //working with array og f the bat
//     let newArr = [];
//     let i = 1;
//     for (let userName of arr) {
//         let trimNlow = userName.trim().toLowerCase();   //all trimed and lower case
//         let [firstName, lastName] = trimNlow.split('_') //split to first and last name / also removed _
//         let upName = firstName + lastName.replace(lastName[0], lastName[0].toUpperCase());  //names in camelCase / err here 

//         let textpad = upName.padEnd(20, ' ');
//         let test = (`${textpad + '✅'.repeat(i)}`);
//         i++;    //increment for checkmarks
//         //now how do we do the positioning
//         console.log(test);
//     }   //now to just add checks and padding
//     // console.log(newArr);

// }

//finished fixed all previuos issue [DONZO]

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure





















