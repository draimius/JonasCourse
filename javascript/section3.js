// document.body.style.backgroundColor = "gray";
// STRICT MODE - must be the first line of code to work
// appies strict mode to our script writiing
// can also activate stict mode for a specified function or blcok of code(although not common or recomended)
//help you write more secure code aka avoid accidental errors
// its forbids us from doing certain thing and will creat visible errors for use where otherwise would go unoticed
'use strict';
// let hasDriversLicense = false;
// let passTest = true;
// if (passTest) {hasDriverLicense = true};//bug here where simply missing an 's'
// if (hasDriversLicense) console.log(`i can drive`);
//helps prevents us from making those silly mistake and from using reserved words

// FUNCTIONS: block of code that can be reused (help to keep code 'dry' aka dont repeat yourself)
function logger() {//defining function
    console.log(`my name is draimius`)
}
logger();//calling function
logger();//here not set to variebl becuase nothing is returned / just taknig actions

// function blender (apples, oranges) {//function can pass and return data back [function is a machine] apples, orenges like empty sapces (to be filled with data)
//     console.log(apples, oranges);
//     return `Juice with ${apples} apples and ${oranges} oranges`;//value return can be used elsewhere / the result of the funcito(machine actions)
// }
const juice = blender(2, 4)//if we want to use the value that was return by the funciton we need to store it in a variable
console.log(juice);//now i log the result returned by with funciton with the asted in data
const juice2 = blender(6, 2)//can now create several juice combination with the same machine/ we jsut pass in the fruit quantity we want and call function(or run the machine lol)
//NOTE the value in the () when calling a function is the argument while value in () function declration is the parameter


//DECLARATION VS EXPRESSION
//Declaration
function calcAge1(birthYear) {//this is a function decleration
    return 2037 - birthYear;
}
const age1 = calcAge1(1996);
//declaration hae the ability to be CALLED BEFORE aCTUALLY DECLARED/ unlike expressions

//Expression
const calcAge2 = function (birthYear) {//this is a function expression / function withoutname-anonimiuos funciton
    return 2037 - birthYear;//remenber expressions produce value and can be used in temp lits and also like do asigned to variable
}
const age2 = calcAge2(1996);


//NOTE both return same result/ also a function is a value 
//which to use based on 1pesonal preference and 2.how used (jonas prefers to use expression define everything first and have everything stored in variables)
//i lik ethe decleration way 
//important understand both and how they work and differ

// ARROW FUNCTION
const arrow = (birthYear) => {//expresion type 
    return 2037 - birthYear;
}
const calcAge3 = birthYear => 2037 - birthYear;//didnt not have to use () or {} becuse only one parameter and one action/line of code[one liner function(implicit return)
const age3 = calcAge3(1996);

// const yearUntil = (birthYear, firstName) => {
//     const age =  2037 - birthYear;
//     const retire = 65 - age;
//     return `${firstName} retires in ${retire} years`;
// }
// console.log(yearUntil(1996, `yomama`));
// NOTE arrow fucntion dont have ability to use `this` keyword
//also not best to use them when have multiple parameters(arrow best used when quick and simply actions)

//Calling Fucntions Within One Another

function chop(fruit) {
    return fruit * 4;
}

function blender(apples, oranges) {//function can pass and return data back [function is a machine] apples, orenges like empty sapces (to be filled with data)
    const chopApples = chop(apples);// value that we passed through blender then get used in chop to ddo its actions and return value result back and use to execute rest 
    const chopOranges = chop(oranges);//  --of fuantion blender
    return `Juice with ${chopApples} apples slices and ${chopOranges} oranges slices`;//value return can be used elsewhere / the result of the funcito(machine actions)
}
console.log(blender(2, 1));

//NOTE: we want to seperat the functinatlities like the steps this wa we dont repeat ourselves and each individual fucntinality is able to be editted

function calcAge4(birthAno) {
    return 2037 - birthAno;
}
// function retire (ageNow) {
//     65 - ageNow;
// }
const yearUntil = (birthYear, firstName) => {
    const age = calcAge4(birthYear);//instead of doing the math in here decalred seperat funtion that does the math and return the results
    const retire = 65 - age;
    if (retire < 0) {
        console.log(`${firstName} has already retired`)
        return -1;
    }
    return `${firstName} retires in ${retire} years`;//real world example will return number and simple values not strings
}
console.log(yearUntil(1996, `john`))
console.log(yearUntil(1966, `mike`))
//NOTE: nothing willl run after return is executed as the return give result but also exists the block like break


//EXIRCISE
const cake = [44, 23, 71];
const gum = [65, 54, 49];
const cake1 = [85, 54, 41];
const gum1 = [23, 43, 27];

function calcAvg(arr) {
    let col = 0;
    for (let num of arr) {
        col += num;
    }
    return col / 3;
}
// calcAvg(cake);
const calcAvarage = teamScores => calcAvg(teamScores);//if only online return no need for {}or `return`/ mutiple params use ()and, like usu

function checkWin(team1, team2) {
    if (calcAvarage(team1) >= calcAvarage(team2) * 2) {
        console.log(`cake take the win`);
    }
    else if (calcAvarage(team2) >= calcAvarage(team1) * 2) {
        console.log(`gum take the win`);
    }
    else {
        console.log(`no winner`);
    }
}
checkWin(cake, gum);
checkWin(cake1, gum1);

// ARRAYS - data structures
const friends = [`mike`, `peter`, `cole`];
const ranYears = new Array(1234, 1996, 1299, 4434);//making array with array function

// pulling info 
// name of array then its index from 0 - ect..
console.log(friends);
console.log(ranYears[1]);
console.log(friends[friends.length - 1]); //pulll last value in array using its length - 1 (to get index value)
// can get its length with : arrayName.length
console.log(friends.length);
//can also change / update specofied value in array by selecting array and corrsponding index and simply adssing new value
friends[2] = `yo mama`
console.log(friends);// yo mama replaced cole
//NOTE event if the varible is declared with const the whole cant be changed but can sltil change individual values in array aka update it
//only primitive values are immutable
let firstName = `draimius`;
const draimius = [firstName, `ramirez`, 2021 - 1996, `investor`, friends];
console.log(draimius);

function calcAge5(years) {
    return 2037 - years;
}
const age5 = calcAge5(ranYears[1])//can target specified value ad run as argument in functiuon utilizing the arrayName[index]
//you can also place function calls within an array to format result 
const ages = [calcAge5(ranYears[0]), calcAge5(ranYears[1]), calcAge5(ranYears[ranYears.length - 1])];//interesting very cool
console.log(ages);

//ARRAY OPERATIONS or METHODS
//Adding to arrays ----
//PUSH: add to end of array
const newLength = friends.push(`grant`);//when `pushed` it will Return the new Length of array this case `4` / we can also set return length num to variable
console.log(newLength);//usualy just push but incase we need it can ge ahead and grab like this
console.log(friends);//grant get addad to end of array
//UNSHIFT: add to start of array
friends.unshift(`kelly`);//kell is added to start of arrary / also making new length of 5
console.log(friends);
// NOTE : when adding usualy we will pass in a value in the (valueAdding) 
// anytime we add to the array via 2 methods above they will always return the New Length of the array

//Removing from arrays
//POP: will remove from the end of array
const valRemoved = friends.pop();//removed grant aka last value in arrray / can also set to variable to capture return
console.log(friends);
console.log(valRemoved);// we can set the removal to capture removed element to the be use later as needed
//SHIFT: will remove from the start of array
friends.shift();//removed kelly aka 1st value in arrray / can also set to variable to capture return
console.log(friends);
//NOTE: beacuse these methods remove ther is no need to add any parameters in the ()
// anytime we remove via methods above they will always return the value that was removed

//Finding index/location of selected value
console.log(friends.indexOf(`peter`))//returns its index location aka 1 in this case
//if serchaed value dosent exist will auto return -1

//Know wether value exist withing array slected 
console.log(friends.includes(`peter`)) //will return true if it exist and false if it does not
//uses Strinct Equlity Value and Type Must Match
//can use to produce that boolean then run appropriate code if true and if false ect..

//canuse this to wirte conditinals
if (friends.includes(`peter`)) {//if find retunr true and code runs other wise it dosent and else run if youve added one
    console.log(`peter in the his-house`)//nice this is useful
} else {
    console.log(`not found`)
}//includes is a more modern version of indexof ES6 (often used to achieve same thing) but have both to use as needed

//NOTE: anytime we add to array will return the length num of the new array
// anytime we remove from the array it will rteturn the value that was removed
//note that these also edit the original array making a completely changed version aka we no longer have the original (Destructive Methods)
//methods have `u` aka push unshift add if they dont have `u` the dont add but remove
//if have`p` works with the End of array if not `p` the dont work withend but the Start

//EXERCISE:
//will use bill calculater
//write funciton called tip (same code as previously)
//creat array calle bills hold bill values 3x
//creat array called total holding total bill values(bill + tips)
const bills = [125, 555, 44];
const total = []
const tipCalc1 = function (billamount) {
    // if (billamount <= 300 && billamount >= 50) {
    //     total.push(((billamount * .15) + billamount));
    // } else {
    //     total.push(((billamount * .20) + billamount));
    // }
    return billamount <= 300 && billamount >= 50 ? total.push(((billamount * .15) + billamount)) :
        total.push(((billamount * .20) + billamount));
}//interesting you can retunr that whole functyion comparison like that 
tipCalc1(bills[0]);
tipCalc1(bills[1]);
tipCalc1(bills[2]);
console.log(total);


//OBJECTS + 
//in an object you can give values name or 'keys' unlike array where only why to refernce is its order number
//creat key value pair where the 'key' references the value selected
const jose = {
    datatype: `object`,
    firstName: `jose`,
    lastName: `ramirez`,
    username: `draimius`,
    birthyear: 1996,
    something: `gum`,
    addingNumber: 33,
    theKey: 'and Value',
    friends: [`mike`, `draimius`, `cole`, `lennie`]
}; // this is called object literal becuase we are literally wrting out key value pairs
//there is different ways to creat object
//unlike in arrays the order values are place dosent matter as they can be refrence with thioer key unlike array wherre can only call by thier position in structure
//use arrays when order data use, object when order not as important or needed
//can pull info from object with the . =  objectname.key
console.log(jose.myname);
//or can also pull with brackets[] came way objectname[key]
console.log(jose[`theKey`]);
//within the [] can input Expressions like concatanate,  temp literal, and variables themselves
const nameKey = `Name`;
console.log(jose[`first` + nameKey]);
//when to use which = use do tnotattion everytinme usless you need to compute the key then use [brakets]
// const want = prompt(`what do you want to know about?, firstName, lastName, username`);
// console.log(jose[want]); //this case would need to use [] to input expression (dot would only return undefined/ dot looks for the exact keyname supplied )
// if (jose[want]) {
//     console.log(`${want} = ${jose[want]}`);
// } else { console.log(`not valid option, requst: firstName, lastName, username`) };

console.log(`${jose.firstName} has ${jose.friends.length}, and his best friend is named ${jose.friends[1]}`)

///Object Methods -- 

const draimius1 = {
    name: `draimius`,
    dog: true,
    birthyear: 1996,
    job: `investor`,

    // calcAge: function () {
    //     console.log(this)   //thisd referce to whole of draimius1 object as thats what its being called on below
    //     return 2037 - this.birthyear;   //this refece to anythibng on the right of .birthyear aka the selected object ect.. (this case draimius1 also referce to the inside keys within the object) 
    // }   //here whole reason we use the `this` key word is to avoid repeting our selves instead of writng draimius1.key 
    //we simply use the this key word that will refer to the object selected for calling (also makes the function and calling usniversal as there is no specified calling just be the one selected)
    //aka great reusable code (that way anychanges ect fucntion still works)
    //better to refrence then to hard code
    //in event needed that calculated result of the age we can creat new key with said value to be called anytimer later we needed it

    //practice --
    calcAge: function () {
        this.age = 2037 - this.birthyear;   //creates age key value pair to now be recalled later when needed
        return this.age;    //can calc without return right just so have but good practice to do so
    },
    getSummary: function () {
        // let result = this.dog ? `a` : `no`;
        //console.log(result);    //my thought here is that need to into to verable aka expression vs declaretion this way can be inputed into the temp literal aka used as a variable
        return `jose is a ${this.age} year old and ${this.job}, and he has ${this.dog ? `a` : `no`} dog`;
        //insted of iputing result in {} can do evaluation within {} instead of repeating code
        //so learned actually dont have to put into varible can do the evaluation within the temp literal
    }   // can also use calcAge() in place of age in events hsent been caleed aka hasent ran funtion to calc the age
}

console.log(draimius1.calcAge());   //only need to calcage once

console.log(draimius1.age); //calling for age wqould have to be done after we already fcalled for clacage aka produced result that now can be used
console.log(draimius1.getSummary());


// const calcBmi = function() {
//     return this.mass / (this.height**2)
// }
//code challenge--
const mark = {
    name: `mark`,
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = (this.mass / (this.height ** 2)).toFixed(1)
    },
}
const jonas = {
    name: `jonas`,
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        // return (this.mass / (this.height ** 2)).toFixed(1)  -- instewad of simply returning can set to new key valuepair to then be called later
        this.bmi = (this.mass / (this.height ** 2)).toFixed(1)  //creat new property aka new key value pa
    },
}
jonas.calcBmi() //here calling funtion this way the bmi get actually calculated THEN we can call the value later
mark.calcBmi()

// const compBmi = jonas.calcBmi() < mark.calcBmi() ? `${mark.name} bmi ${mark.calcBmi()}`;
if (jonas.calcBmi() < mark.calcBmi()) { //here at somepoint calcBmi need to be called ok to be done here in evaluation but that way the bmi is actually calculated and we have that #
    console.log(`${mark.name}'s bmi (${mark.bmi}) is greater than ${jonas.name} bmi (${jonas.bmi})`)
} else {
    console.log(`${jonas.name}'s bmi (${jonas.bmi}) is greater than ${mark.name} bmi (${mark.bmi})`)
}

//NOTE anyfuntion that is attacted to an object is a method (method is a property that holds a funtion)
//expressing vs declaration function ect.. vs const exmpla = fucntion ect(expressings can be used withing temp loterals aka writien as variables use like so)



//LOOPS -  fundemental in all pragramming languages (essential to follow rule of `dry code` aja dont repeat yourself)
//initial value then; logic/condition; then incrementation' ( for loop we keep running forever as long as the condition is true)
//we use let do to value needing to be updated aka increase or decrease ++ or --
// for let loop (working with arrays)
//example
for (let i = 1; i < 3; i++) {
    console.log(`lift weights ${i}`)
}
//for array must strart from 0 aka thats how index are counted
const lance = [`lance`, 33, `bubbles`//array made for example below
]
const types = []//created empty array to then be filled utilizing the loop below

for (let i = 0; i < lance.length; i++) {
    console.log(lance[i], typeof lance[i]);   //wanted to note the typeof written just like that sapce then thing want type of

    types[i] = typeof lance[i];     //this runs through loop and filles out types previuosly empty array
    types.push(typeof lance[i]);    //another way to do same thing as code directly above all results get oushed into array ;
}
console.log(types);

//more practice
const years = [1991, 2007, 1969, 2020];
const anos = [];
for (let i = 0; i < years.length; i++) {
    anos.push(2037 - years[i])
}
console.log(anos);

//CONTINUE (loops) [what im not looking for is what the contue will out put] (what is evaluated as true will be skipped in sense)
const lake = [`Superior`, `Michigan`, 22, `Huron`, 11, `Erie`, `Ontario`]
for (let i = 0; i < lake.length; i++) {
    if (typeof lake[i] === `string`) continue;  //code below this will only run when evaluation is NOT true 
    console.log(lake[i]);       //if eveluatino is true its simply continues to the next until its NOT true then below code will run aka rest of loop
}   //in this case the only thing printed is the 22, 11 no lake names (wheat im NOT looking for is what will be printed)


//BREAK (loops) [this will completly terminate the whole loop ]
for (let i = 0; i < lake.length; i++) {
    if (typeof lake[i] !== `string`) break;     //loop will run till the evaluation is ture, onve true the loop will stop ruuning and be exited
    console.log(lake[i]);
}//pirnts everything up until it hit something that is NOT a string the exists loop and no longer runs

//runniung through array backwards
for (let i = years.length - 1; i > -1; i--) {      //big difference here is the value of i is equal to the arr.length -1 vs a definied value 
    console.log(i, years[i])               //then condition simply dont want it to go under 0 and we decreas instead of increase
}


//Loop whithin Loop
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------- strating exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`exercise ${exercise} --- rep ${rep}`)
    }

}


//WHILES LOOPS (based simeply on pararmeter and no specified counter o value)
let rep = 1;
while (rep < 10) {      //while the pararmeter is true the code loop will continue to run forever until its not true
    // console.log(`while`)
    rep++;
}

let dice = Math.round(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`you rilled a ${dice}`);
    dice = Math.round(Math.random() * 6) + 1;  //important here that dice is randomized againg to compar new number and not saem value everytime aka forever loop
    if (dice === 6) {
        console.log(`loop is ending now rolled a ${dice}`)  //crated fo rexample sake show that actualy stopping once dice rolles a 6
    };
}
// NOTE: use while loop when we wont know how many loops we'll have to go through
//use for loop whe nknow how many times we'll be looping

//PRACTICE
// let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let tip = []
// let totals = []

// for (let i = 0; i < bill.length; i++) {
//     if (bill[i] <= 300 && bill[i] >= 50) {
//         tip.push(bill[i] * .15);
//         totals.push(tip[i] + bill[i]);
//     } else {
//         tip.push(bill[i] * .30);
//         totals.push(tip[i] + bill[i]);
//         console.log(`working`);
//     }
// }
// console.log(tip);
// console.log(bill);
// console.log(totals);
// //extra credit
// let TbillAvg = 0;
// const billAvg = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         TbillAvg += arr[i];
//     }
//     TbillAvg = TbillAvg/arr.length;
// }
// billAvg(bill);
// console.log(TbillAvg);



//reso to make more effective aka no repetitiion

let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tip = []
let totals = []

const calcTip = function (bill) { //calc tips only
    return bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;
}
// const calcTotal = function (bill) { //calc total bills only
// return bill + calcTip();
// }

for (let i = 0; i < bill.length; i++) { //run array through to produce all values and be pushed into empty array 
    tip.push(calcTip(bill[i]));
    totals.push(calcTip(bill[i]) + (bill[i]));
}




console.log(tip);
console.log(bill);
console.log(totals);




let TbillAvg = 0;
const billAvg = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        TbillAvg += arr[i];
    }
    return TbillAvg/arr.length;
}

console.log(`avarage tips ${billAvg(tip)}`);
console.log(`avarage bill ${billAvg(bill)}`);
console.log(`avarage totals ${billAvg(totals)} noice`);


















2102076000

311






























