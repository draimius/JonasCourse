console.log(`hihi`)
// VARIABLES
const country = `united states`;
const continent = `north america`;
const population = 54;
const isIsland = false;
const language = `english`;
console.log(isIsland, population, country, language);
//let: use with varieble need to be changed later (ok with change)(block scoped)
//const: use for variablew you do not want to be changed (no change ever)
//var: old way of declaring varibles similar to let(do not use this)(function scoped)
//defult to const unless you absolutly sure a varible must change later

//OPERATORS (most move left to right)[there are few that move right to left]
// types of operators: logical, mathmatical, comperison, assingment and more ect..
const now = 2021;
const myAge = now - 1996;
console.log(myAge * 2, myAge / 2, myAge ** 2)
const firstName = `jose `;
const lastName = `ramirez`;
console.log(firstName + lastName)//concatonate with +
console.log(typeof true);
let x = 5;
x += 10;
console.log(x);
//update value with math operator
//do operator +-*%/ then `=`
//comparison
// < or > less than greater than also 
// <= >= less than or equsl to ect..
// == or === same value  and other smae value and type
// != or !== not same value and  not same value and type
console.log(6 < population);
//PEMDAS - OPERATOR PROCEDENSE
//operations before comparison
//EXERCISE --
const john = {
    name: `john`,
    weight: 78,
    height: 1.69,
}
const mark = {
    name: `mark`,
    weight: 92,
    height: 1.95,
}
const john2 = {
    name: `john2`,
    weight: 95,
    height: 1.88,
}
const mark2 = {
    name: `mark2`,
    weight: 85,
    height: 1.76,
}

function bmi(objName) {
    let bmi = objName.weight / objName.height ** 2;
    // console.log(`${objName.name} your BMI is: ${bmi}`)
    return Math.round(bmi, 2).toFixed(1);
    return bmi;
}
// bmi(john);
// bmi(mark);
// bmi(john2);
// bmi(mark2);
const markHigherBmi = (bmi(mark) > bmi(john));
const markHigherBmi2 = (bmi(mark2) > bmi(john2));//comparison will always return a boolean : true 9or false
console.log(markHigherBmi) //false ==right
console.log(markHigherBmi2)//true ==right
//STRING TEMPLATE LITERALS
console.log(`${country} is in ${continent} where they speak ${language}`)
const birthYear = 1996;
const job = `programmer`
const jose = `i'm ${firstName}a ${now - birthYear} years old ${job}`;
console.log(jose);
//DECITIONS
// if and else 
// pull boolen to make decitions 
const isOldEnough = myAge >= 18;//interesting put comparison in the variable itelf hmm
if (isOldEnough) {//code will only run if boolean true
    console.log(`can start diving test`);
} else {
    const yearsLeft = 18 - myAge;
    console.log(`${yearsLeft} left before can take driving test`)
}//block together is called a control structure

let centry;//basiclly set to undefined
if (birthYear <= 2000) {//if (then our condition: wnat a boolean to be result)
    centry = 20;
    console.log(`${centry}th centry`);
} else {
    centry = 21;
    console.log(`${centry}th centry`);
}
//EXERCISE --
if (bmi(john) > bmi(mark)) {
    console.log(`${john.name}'s bmi is ${bmi(john)} and is higher then ${mark.name}'s bmi at ${bmi(mark)}`)
} else {
    console.log(`${mark.name}'s bmi is ${bmi(mark)} and is higher then ${john.name}'s bmi at ${bmi(john)}`)
}
//test 2
if (bmi(john2) > bmi(mark2)) {
    console.log(`${john2.name}'s bmi is ${bmi(john2)} and is higher then ${mark2.name}'s bmi at ${bmi(mark2)}`)
} else {
    console.log(`${mark2.name}'s bmi is ${bmi(mark2)} and is higher then ${john2.name}'s bmi at ${bmi(john2)}`)
}


//COVERTING TYPES
//type conversion

// Number(whatWantToCoverToNumber)  the varible it slef is still original datatype only the converted aka result of this will be Number
// Number(charactersAndNoNumbers) - will result in NaN `not a number
// String()
// Boolean() 
//in boolean all below values will returm: false
//we have falsy value: null, undefines, NaN, ` `, 0, false

//type coertion - javscriopntdoes on its out behind the scense
//dealing with two values of differnt types 
// ex  string + number = out them together and returns to string 
// ex string(of numbers) - number - number =  returns number data type 
// with plus + reades as concatanating and will always creat a: string data type even if only numbers involed
// now with any other operator < - / * with string of numbers and numbers will result in:  numeber data type

//EQULITY OPERATORS
//check if equal
// loose ==  value same (ignoring data type)(does type coercion)
// strict === must be exactly the same  
// check for several things 
// if (){ *check

// } else if () { *check

// } else { *if nothing meets params

// }
//checks if different
// loose !=  value different (ignoring data type)(does type coercion)
// strict !== must be different 

//LOGICAL OPERATORS
//and && 
//all params must be met for code to execute
//or || 
//one of params must be met for code to exacute
//invert value ! (has presedence over other operators)
//aka if the result is false - then it returns true

//EXSERCISE
let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];
let dolphins1 = [97, 112, 101];
let koalas1 = [109, 95, 123];
let dolphins2 = [97, 112, 101];
let koalas2 = [109, 95, 106];
let name1 = `dolphins`;//fix issue wehre if we pass in in defferent order wouldnt make sense in function thats no bueno
let name2 = `koalas`;

function avg(team) {
    let avg = 0;
    for (let i = 0; i < team.length; i++) {
        avg += team[i];
    }
    return avg / team.length;
}
function comp(team1, team2) {
    if (avg(team1) > team2 && avg(team1) > 99) {
        console.log(`${name1} wins`)
    }
    else if (avg(team2) > avg(team1) && avg(team2) > 99) {
        console.log(`${name2} wins`)
    }
    else if (avg(team1) == avg(team2) && avg(team1) > 99) {
        console.log(`its a draw`)
    }
    else {
        console.log(`no winner`)
    }
}
comp(dolphins, koalas);
comp(dolphins1, koalas1);
comp(dolphins2, koalas2);

//Switch - use when want equality (LOOKING FOR MATCH not so much about comparing)

const day = `wednesday`;
switch (day) {
    case `monday`:
        console.log(`Plan course structor`);
        console.log(`another one`);
        break;//need breaks so only wanted block of code runs otherwise all code will be ecxecuted at once
    case `tuesday`:
        console.log(`buy kayak`);
        break;
    case `wednesday`://here have 2 case same code ran for each no breaks inbetween
    case `thursday`://when wednesday and thurday are called just go down the line to run said code if wed goes doan till execute same for thur
        console.log(`strudy programming`);
        break;
    case `friday`:
        console.log(`accountting and laundry`);
        break;
    default://defulat basicly acts as the else where if nothing above meets this code will be executed
        console.log(`not a valid day`)
}
    //same thing as above but writeen with if statments (lot of repetative code specific in comparoson)
// if (day ==`monday`){
//     console.log(`Plan course structor`);
//     console.log(`another one`);
// }
// else if( day == `tuesday`) {
//     console.log(`buy kayak`);
// }
// else if ( day == `wednesday` || day == `thursday`) {
//     console.log(`strudy programming`);
// }
// else if ( day == `friday`) {
//     console.log(`accountting and laundry`);
// } else {
//     console.log(`not a valid day`);
// }

//STATMENT VS. EXPRESSIONS
// statements: preformence an action (not prodsing a value ) [Ex. switch, if statement ect..(the santences)
    //statemtnet will contain expressions that how their are made but its the expression that produces value not the statment

// expressions: piece of code that produces value [Ex. 3 + 4](the word)
    //also numbers 1223 will still produce that value itselft
    //as well as say [true == false] also becuase it will produce a value 
    //anything that produces a value wether number or boolean, string

//CONDITINAL OPERATOR (if this then that) is an expression therfore can assign it to a variable
//does not replace if staement but is very useful to use in expressiona place and make quick decitions
const age = 24;
//basicly a else if statment all in one line
//written as [the condition, the if part(aka if true), then the elsepart (aka if false)]
// age >= 18 ? console.log(`i like me some gin`) ://this will run if condition id TRUE
// console.log(`i like to drink water`);//this willrun if condition is FALSE
const drink = age >= 18 ? `gin` : `water`;// set to variable will give us result as to what drink based on the condition
console.log(drink);//disply drink

//same thing as above differnt way to do it above looks nices and consise
let drink2;
if (age >= 18) {
    drink2 = `gin`;
} else {
    drink2 = `water`;
}
console.log(drink2);//if stament can be inserted as variale like in a string temp literal / however consitinal can

console.log(`i like to drink ${age >= 18 ? `gin` : `water`}`)// cnosditinal withing temp literal works becuse it produces a value, very usefull

//EXSRCISE 
// no using if staments
//NOTES:
    //if biil is between 50 and 300 TIP = 15%
    //if the bill is below 0 or greater than 300 TIP = 20%
    //print the bill, tip and final total
    //
//final
let test = [275, 40, 430]
let bill = test[2];
let tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;//remeber dont have to return just one number can use expression in place aswell to get desired values out
let tBill = tip + bill;
console.log(`the bill was $${bill}`);
console.log(`the bill was $${tip}`);//previsuoly was doing tip math within the var remember can add expresion in condition 
console.log(`the bill was $${tBill}`);//did same thing as above just diffrent math basicly broke it down differently indif variables

//rought
// if (bill <= 300 && bill >= 30) {
//     tip = 15;
//     tBill = ((tip / 100 ) * bill) + bill;
//     console.log(`bill is $${bill}`);
//     console.log(`tip is ${tip}% or $${((tip / 100 ) * bill)}`);
//     console.log(`total bill of $${tBill}`);
// } else {
//     tip = 20;
//     tBill = ((tip / 100 ) * bill) + bill;
//     console.log(`bill is $${bill}`);
//     console.log(`tip is ${tip}% or $${((tip / 100 ) * bill)}`);
//     console.log(`total bill of $${tBill}`);
// }

//JAVASCRIPT RELESES -
    //HISTORY - bosicly wanted to standerdize programming lauguage used in web browers
        //es5 then june 2015 es6 newest version tons of updates (ecma script- ecmaparty that standedizes relese of languge used in brower)
        //all javascript code regardless of version is backwords compatibility
        // nothing is ever removed from the languge only periodic updates every year
        // javascript is not forward compatible (meaning if someone is running on old 'version' may not funcitons same if the site was written in newer version)
            //new version can run all old no issue but old versions cant run all fucntion of the new version
    //we cant control what browser the user will use so e need a way to have in a sense same code written in both version new and old 
        //aka transpieling back to es5 from 6
        //for this we use tools the convert the code both ways like "BABEL" for example
    // es5 is supported on all browers today (aka ewhy it s the target for traspiling)
    // newwer releses es6 and es7 wellsuported in all morder browers
    // but not supported by the older browers not safe to assume user will support newer versions
        //we also have the future relese like es2020 es2021 that added feturn and updates
            //that maty not be supprted 1.by all browers 2.by older browers
//importatnt to know how thing are done today but also how it was previsuoly done (as can help understand the languge working better 
    //and wont be completly lost if you come across it in future)
        // like how maany solution and example we find on line are written in say es5 for exampole so nice to be able to read and understand them
    //In REAL World working job we may need to work with older code base





















