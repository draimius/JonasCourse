'use strict'; //strict mode makes funciton blocked scoped meaning can only be accesed within same block / if strict off can accesses function s defined within functins even if not in same block of code
//jonas recommends to always use strict mode/ umm but why (prevent bugs maybe what real benefits)
console.log('scope practice')

//SCOPE PARCTICE
function calcAge(birthyear) {
    const age = 2037 - birthyear;
    console.log(firstName);//looked uop the scope for value 

    function printAge() {
        let output = `${firstName} you are ${age}, born in ${birthyear}`; //finds bnoth variable values in the parents scopes looking up the scope chain
        console.log(output);

        if (birthyear >= 1981 && birthyear <= 1996) {
            var millenial = true;//only funciton scoped and not block so abl to be accesed by everything within the pareant function
            const firstName = 'steven'; //when 2 varible with same name but differnt scope the closest one to where being called wins
            const str = `oh, and your a millenial, ${firstName}`;//only avalible within this blck where its declared
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            output = 'NEW OUTPUT'; //redifine varible value outside of its current scope what happends????  closest to where calls wins again 
            //new value is not applied 
        }
        console.log(millenial);
        // console.log(add(2, 3));//while in strict mode fucntino cant be pulled as it was defined within above block aka only exist within that block of code
    }
    printAge();

    return age;
}
const firstName = 'draimius';//found in global scope
calcAge(1996);

// -----------------------------------------------------------------------------------------------------------
//HOISTING AND THE TDZ
//varible enviroment - closer look 
//hoisting - make varible value avalkible for use before declaration line of code is read (dosent work for let and const regardless of value type if function or not)
//TDZ - tempereal dead zone. when attempt to use varible before declaration lineof code(from begining of scope till line of code where varible delclared)
// exist to in event of bug provides a error and not simply undefined value
//HOISTING AND THE TDZ PRACTICE  
console.log(me);//undefined (dosent really provide info as to what went wrong)
console.log('job');//cannot access error (provides reason as to why the error) [in the temperal dead zone]
console.log('year');

console.log(addDec(2, 3));//return 5 (function declaration was able to be called but not others) [becuase defined with const and let will have that TDZ]
// console.log(addExp(2, 3));//cannnot access before initialization
// console.log(addArr(2, 3));//error not a function becuase reading as undefined(2, 3) with make sense that return is not a function


var me = 'draimius';
let job = 'investor';
const year = 1996;

function addDec(a, b) {
    return a + b;
}
const addExp = function (a, b) {
    return a + b;
}
const addArr = (a, b) => a + b;



if (!products) {
    deleteShoppingCart();//return all products deleted but why if products = 10??
}
var products = 10;//becuase of hoisting the value actually passed through above if stament is undifined and not 10

function deleteShoppingCart() {
    console.log('all products deleted!');//this is why in modern javascript it is recomended to never use var only let and const and declare your varibles at the start of file
}

//note var declared will also be declared on the window property itslef potential caasing issues later on

// -----------------------------------------------------------------------------------------------------------
//THIS KEY WORD
//this - is a special varible created for every execution context aka every function points to owner of where this keyword is used
//value is not defined it changes dependednt on way functions is called where it is being used on how it will behave
//when called via method the 'this' points to the object being utilized/ object calling the method(kinda like saying this object .key of whatever value want pulled)
//when called as normal function aka not attached to any object/ the this will return undefined (if not in strict mode this will then point to the window object - brower creting issues)
//arrow function do not get their own this key word when used in arrow this defults to the nearest function(only use array function with one liners otherwise do as usual)
//called as an event listener then this will always point to the DOM element the function sis attatched to 
//this keyword is very powerful and useful (note that it doesnot pint to funtion where being used nor to the varible enviroment)
//ohter ways to call functins is using the keywords (new, call, apply, bind) more on this later


//THIS KEY WORD PRACTICE
console.log(window);
function calcAge1(birthyear) {
    const age = 2037 - birthyear;
    console.log(this);//returns undefined or points to undefined
}
calcAge1(1996);

const calcAgeArr = (birthyear) => {
    const age = 2037 - birthyear;
    console.log(this);//return the window  or points to the window(uses the this keyword of its parent function aka the window or browser itself)
}
calcAgeArr(1996);


const draimius = {
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);//this referce the the onject its becuase of how it was calledin then the key of year so (draimius.year which is : 1996)
    }
}
draimius.calcAge(); //returns the whole object itself

const costa = {
    year: 2017,
}
costa.calcAge = draimius.calcAge;//(this is called maethod borrowing) adigned but not called

console.log(costa);//returns costa object with year and calcAge function as key value pair withing object 
costa.calcAge();//return 20 providint correct result / THIS WILL ALWAYS POINT TO THEN OBJECT THAT IS CALLING THE METHOD**** (in this cal points to costa even though function was defined in previuos object)

const f = draimius.calcAge;
// f();//beacuse draimius uses this keyword in its calculation now called by f it pulls undifined as this in the functino referce to nothing now(no value to refer to)

// -----------------------------------------------------------------------------------------------------------
//REDULAR FUNCTION AND ARROW FUNCTIONS

const draimius1 = {
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);//this referce the the onject its becuase of how it was calledin then the key of year so (draimius.year which is : 1996)
    },
    greet: () => console.log(`hey ${this.name}`)//arrow function does not get its own this keyword it will defualt to the parent this in this case the window /brower itself
}
draimius1.greet()//returns undefined

//NOTE varibles declared with var become properties on the global object - this is no bueno cuases issues (where when instead of undefined its will defualt to whatever was previsuoly declared in global object)

//one ppit fall of the this keyword is when we have a method within a function 
//ex.
//regular function call will ahve the this key word auto set to undifined
const draimius2 = {
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        //solution 2 uses arrow function use arrow becuase of their inheritance property / they dont have a this so they'll use thier parents this refrnces (unlike the greet funtino this is inside the funtion and not out)
        const isMillenial = () => {//very clever siolution used the fact that it would have to inherate parents this refrence
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
            //solution 1 opnlder but still used reasding this to new varuibleto later be called 
            // const self = this;//cheeck work around / set varible for this so now can refrence the same refrence persay in several places
            // const isMillenial = function () {//this is the older way to work around it but still may see today so good to know
            //     console.log(self);
            //     console.log(self.year >= 1981 && self.year <= 1996);
            // const isMillenial = function () {
            //     console.log(this);
            //     console.log(this.year >= 1981 && this.year <= 1996);//return undefined as the this in this function does not refer to object but function above where is no reference so retunr undefined (refrence here is not the same as above function)
        };
        isMillenial();
    },
    greet: () => console.log(`hey ${this.name}`)
}
draimius2.greet();//return string hey and nothing else do to arrow funtion having no this key word funcitonality
draimius2.calcAge()//return whole object and true for millenial now it was able to refrence same this as above and pull value and function properly (same result with the arrow function)
//note to self use arrow functino when doing one liners or writting method/functions within the object funtion ( basicly nesting and utilizing this keyword refrence)

//ARGUMENTS KEY WORD -  only avalible withing a funciton
//not super important in modern javascript now that we have more modern way to deal with the parameters
const addExp1 = function (a, b) {
    console.log(arguments);//this is useful when we need a function to accept more parameters then specifieds (provides an array with value passed in)
    return a + b;
};

addExp1(2, 5);
addExp1(2, 5, 8, 12);



const addArr1 = (a, b) => {
    console.log(arguments);//return error argument is not defined
    return a + b;//arrow funcitno like the this keyword dosenot  ahve a argument skeyword aswell
}
// addArr1(2, 5);
// addArr1(2, 5, 8, 12);

// -----------------------------------------------------------------------------------------------------------
// PRIMITIVES Vs. OBJECTS REFRENCES - how they are stired in memory
//this is an example as to how the primitive tyope work work like expected -------- points to adress then value
let age = 31;
let oldAge = age;
age = 33;
console.log(age); //returns 33 the newly reassigned value to age 
console.log(oldAge);//retuns the original value of age boiegn 31 / why is that ????? beacuse of order in execution?
//when oldAge declare value had not yet changed so store the value prior to its change of value

//this exemple of how refrence types work --bahaved bit odd --  points to addres then value THEN to adress and value in the HEAP
const yo = {
    name: 'draimius',
    age: 33,
}
const friend = yo;//so we want same structure friend has smae name but a differnt age 
friend.age = 22;//change age on friend
console.log(friend);//reutnrn object with same name but diff age
console.log(yo);//seems it also change my age to 22 / but why we didnt target that wwe targete friend
//so when we made them equal eachother they pointed to same place in the call stack that then pointed to --
//  -- same place and value in the HEAP no differentiation (so when cahnged value they point at well they --
//  -- both pint at same thing so those value became it for both refrnces 'yo' and 'friend')


//to refresh PRIMITIVE are (these are primitive type) - these are stored in the call stack 
// numbers, strings, booleans, undefined, null, sybols, bigint


// and objects are (these are refrence type) - these are stored in the HEAP
//object literals, arrays, functions, etc..

//NOTE - with const primitive cant be change but refrnce types can be change thing like values within a object array ect..

// other important topic to learn about on own and later are: 
//prototype inheritance -  need to know for object oriantated programming
//event loop - asynchronous javascript: async/await and ajax (fundemental)
//advvance DOM interworkings - 
// -----------------------------------------------------------------------------------------------------------
// PRIMITIVES Vs. OBJECTS PRACTICE 
let lastName = 'ramirez';
let oldLastName = 'ramirez'
lastName = 'acosta';
console.log(lastName, oldLastName);


const jessica = {
    firstName: 'jessica',
    lastName: 'smith',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';//like its dimply 2 different names for the same values
console.log('before marriage', jessica);//both return last name as Davis becuase pointing tioos some value when change was made there for that beciomes value for all pointing to it
console.log('after marriage', marriedJessica);//both to the same memmory adrees in the HEAP
//but if we asiign it to a new object (which is completly different then just changing one value in object)

//copying objet 
const jessica1 = {
    firstName: 'jessica',
    lastName: 'smith',
    age: 27,
};
const jessicaCopy = Object.assign({}, jessica1);//this joins the twi object but in this case one is empty so so we jsut get copy of the asddition/ creat a new onject
jessicaCopy.lastName = 'marchall';

console.log('before marriage', jessica1);//gives us lastname of smith like originally stqated good 
console.log('after marriage', jessicaCopy);//and here in copy gives us cipy o foriginal but lastbname changed to 'marshall'
    //so basicllly cant reassing value if pinting to same refrence without changing the whole thing
        //-solution is to creat copy with the changes you want (new object created in the HEAP)
            //issue is that obnly works on the 1st level aka a shallow copy so - no bueno
                //issue swhen object within the object those value we would run in to same issue as before cant change value withiout changing the whole/original values
                    //nested becuase change there in value points to one single object pointing at values in HEAP so when cahgne in copy refrnces 1st the original function then the HEAP going to original value and not the copied version











