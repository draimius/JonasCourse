'use strict';
console.log('section 9');
//ARRAY DESTRUCTURING - unpacking value to smaller datastructure
const resturant = {
    name: 'Classico Italiano',
    location: 'via angelo tavanti 23 firenze, italy',
    catagories: ['italian', 'pizzaria', 'vegetarian', 'organic'],
    satarterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    order: function (sideIndex, mainIndex) {
        return [this.satarterMenu[sideIndex], this.mainMenu[mainIndex]];
    },
};

// ex. one choice
const arr = [2, 3, 4];//arr for example 
const a = arr[0];
const b = arr[1];
const c = arr[2];
//can individually pull each value inside of the array
const [x, y, z] = arr;//reasing for example (hmm kinda backwards but its not an array its a destructuring assinment / we chose as to how those values are pulled)
console.log(x, y, z);//note that the original array is not change 
console.log(arr);

//now pulling values from the resturant 
let [first, second] = resturant.catagories;//we dont have to pull all values here only pull 2 but there are 4 total
console.log(first, second);//retunrs italian pizzaria frist 2 in catagories / this is interesting
//now say we want to pull only the 1st and 3rd in catagories
let [main, , secondary] = resturant.catagories;//leave hole in destructure or empty slot , skip it basicly
console.log(main, secondary);//bam and returns italian vegetarian the 1st and 3rd in catagories noice 

//say we wanted to switch the positioning of some
//this is a solution but not the best 
// const temp = main;
// main = secondary;
// secondary = temp;//basicly the liquid being trasnfer from cup to cup till its in the one we want use new varible aka the 3rd cup to achieve this
// console.log(main, secondary);//return same as previuos but flipped italint replaced with vergetarian = 'vegetarian italian'

//solution using destructuring
//start by creating an array with the varibles inverted
[main, secondary] = [secondary, main];//reasing the order not need for extra varible / having it equal a flipped verdion of itsself/notice reasinged values without a let or const changing both at the same time noince
console.log(main, secondary);//returns as expected values flipped 'vegetarian italian'

//this way can creat multiple varible out of one functiuon
console.log(resturant.order(2, 0));//returns garlic bread and pizza
const [side, mainCourse] = resturant.order(2, 0);
console.log(side, mainCourse);

//NESTED DESTRUCTURING
//now how woul dtha twork if there was a nested arrray
const nested = [2, 4, [5, 6]];//nested array
// const [i, , j] = nested;//skipped the 4 inbetween
// console.log(i, j); //reutrns 2 and then the whole nested array [5, 6]
//but what if we wanted all the individual values
//ahh so nested array solutino is nested restructuring simple
const [i, , [j, k]] = nested;//not sue why or what situation would really call for sometihng like this but guess good to know how it all works together
console.log(i, j, k); //now return siply the number all one go no ararrys  =   2 5 6 not retrurned in array jsut written

//SETTING DEFAULT VLAUES
// const [p, q, r] = [8, 9];
// console.log(p, q, r);//like this r reutnrs indefined as called for more varibles then were actully defined = 

const [p = 1, q = 1, r = 1] = [8, 9];//now becuase all set to 1 thats the defualt value thats what gets passed thirugh if no other value is assigned
console.log(p, q, r);//now all return a value = 8 9 1 

//DESTRUICTURING OBJECTS


const resturant1 = {
    name: 'Classico Italiano',
    location: 'via angelo tavanti 23 firenze, italy',
    catagories: ['italian', 'pizzaria', 'vegetarian', 'organic'],
    satarterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    }
};

const { name, openingHours, catagories } = resturant1;//very interesting can basicly lay out oubject then later decide how you would like the data to be structure in retrival 
console.log(name, openingHours, catagories);//returns 3 arrays with all info from object

//what if we want the varible names to be different from the property names?
const {
    name: returantName,
    openingHours: hours,//rename object keys with another : colon set dfefualt value with the = equal sign
    catagories: tags,
} = resturant1;//reasinged the values pulled to ne names or key's
console.log(returantName, hours, tags);//produces same returned value but utilized different key's/names

const { menu = [], satarterMenu: starters = [] } = resturant1;//added menu key and defulted value to empty array same for starter where changed name also but this did exist so [] overwitred by the real values
console.log(menu, starters);

//mutationg valibles while destructuring objects
let a1 = 111;
let b1 = 222;
const object1 = {
    a1: 23,
    b1: 7,
    c1: 14,
}
// { a1, b1 } = obj;//unexpecteed token error / becuse javascript expects a block when suing curly brances{} beacuse nothincan be assign to a code bklock we get error
//simple work around to avoid that eerror is to wrap it all i a (parantesis)

console.log(a1, b1);//for some reasoan requires me to log original value 1st before allowing reasingment below
({ a1, b1 } = object1);//reassis a1 and b1 values
console.log(a1, b1);

//now for nested objects - liek the open hours fro resturant
const { fri: { open: o, close: cl } } = openingHours;//selecting the key day then 2 nested keys o fopen and closed/ plus gave it new name for calling
console.log(o, cl);//we want to pull the open time aswell as the closed time

//many time javascript have funtions with multiple differnt parameters - so instead of defining parameters manually 
//we can set it up to simply pass an object and have it destructure however we please

const resturant2 = {
    name: 'Classico Italiano',
    location: 'via angelo tavanti 23 firenze, italy',
    catagories: ['italian', 'pizzaria', 'vegetarian', 'organic'],
    satarterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (sideIndex, mainIndex) {
        return [this.satarterMenu[sideIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ mainIndex = 0, sideIndex = 0, time = '20:00', address = 0 }) {//object paramenters can be in what ever order / NOTE we didinot pass in 4 arguments we simplyu passed 1 object
        //in the event some could not be destructured or object passed dosent have value for key can defualt to defualt values
        console.log(`order recieved: ${this.satarterMenu[sideIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },//order only matters as to how you would like the data returned
};


resturant2.orderDelivery({//this is the object dat we want to pulll data from/ these key's can be used in funciton argument must match argument in funcoitn
    time: '22:30',
    address: 'via del sole 33',
    mainIndex: 2,
    sideIndex: 0,
});
resturant2.orderDelivery({//similar object passed but no time or side is given 
    address: 'via del sole 44',
    mainIndex: 1,
});//still return as expected but now the defualt values are in place where other were not provided 1 for sideIndex and 20:00 fo rthe time

// ----------------------------------------------------------------------------------------------------------
//THE SPREAD OPERATOR - used previusoly not knowing exactly how it worked written as ...
const arr1 = [7, 8, 9];//array 
const badArr1 = [1, 2, arr1[0], arr1[1], arr1[2]];//adding to the array but asigned to new varible name
console.log(badArr1);//returns as expecpected [1, 2, 7, 8, 9] but bit legthy to do specieally if array much larger
//now same thing but using the spread operator
const newArr1 = [1, 2, ...arr1];//fwe jsut declare then value adding then the array selected
console.log(newArr1);//return same as above but in this case didnt need to manually add vlaues from original array
//spread operator pulles each value out the array and writes them out 1 by  1 as fi we wrote them in individualy
//useful when expandign arrays as well wehfe passing argument into funtions
console.log(...newArr1);//returns simply value written out =  1 2 7 8 9

const newMenu = [...resturant2.mainMenu, 'lasagna'];
console.log(newMenu);// return the mainMenu but now with lasagna newly added to the array  =   ["pizza", "pasta", "risotto", "lasagna"]
//note can chose where that was added im assuming wether before the arraay or after to back (also note we are creating a comoletely new array original is not changes)
//spread operator pulles all value from array and doesnot creat new varibles vs. destructuring (spread operator can only be use where you would write out values seperated by a comma)

//can copy array with spread 
const mainMenuCopy = [...resturant2.mainMenu];//same value of original simply makes copy 
console.log(mainMenuCopy);

// adding arrays with spread
const wholeMenu = [...resturant2.mainMenu, ...resturant2.satarterMenu];//add both arrays into one array
console.log(wholeMenu); //returns combined array  =  ["pizza", "pasta", "risotto", "focaccia", "bruschetta", "garlic bread", "caprese salad"]


//the pread operator work on all iterables
//what is an iterable??
//arrays ,strings, maps, or set but not objects (most all datastructures in javascript except objects)

const aString = 'draimius';
const letters = [...aString, '+', 'S.']; //this expands the string array of the individaul leters plus the  + and S. we added
console.log(letters);//returns  =  ["d", "r", "a", "i", "m", "i", "u", "s", "+", "S."]
console.log(...letters);//this return same as above but not in array written  =  d r a i m i u s + S.
//spread only works where a comma ,, is expected



const resturant3 = {
    name: 'Classico Italiano',
    location: 'via angelo tavanti 23 firenze, italy',
    catagories: ['italian', 'pizzaria', 'vegetarian', 'organic'],
    satarterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (sideIndex, mainIndex) {
        return [this.satarterMenu[sideIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ mainIndex = 0, sideIndex = 0, time = '20:00', address = 0 }) {
        console.log(`order recieved: ${this.satarterMenu[sideIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here your delicuos pasta with ${ing1}, ${ing2} and ${ing3}`)
    }
};
// const ingredients = [prompt('lets make pasta!. ingredient 1?'), prompt('ingredient 2?'), prompt('ingredient 3?')];
// console.log(ingredients);
// resturant3.orderPasta(...ingredients);//return  =  here your delicuos pasta with meat, cheese and sauce
// console.log(ingredients);

//now on objects since es6 now works with onject as well
const newResturant = { founderIn: 1996, ...resturant1, founder: 'joaw ming' }
console.log(newResturant);//return the new olbejct properties along with the whole resturant object as well

const resturantCopy = { ...newResturant };//creats shallow copy
resturantCopy.name = 'yoo mama';
console.log(resturantCopy.name);//return 'yoo mama'
console.log(newResturant.name);//returns classico italiano / showing that the original object was not effected/changed

//--------------------------------------------------------------------------------------------------
//REST PATTERNS AND PARAMETERS
//the spread is to expand datastructure while the REST OPERATOR is for condencing the into one
//this below is spread becuase its on the right side of the asignment operator aka the = equlas sign
const arr2 = [1, 2, ...[3, 4]];
//now will use rest (written same way as spread but is on the left side of asingment operator aka the =)
const [one, two, ...others] = [1, 2, 3, 4, 5, 6];//collect elments not used in destructuring and put them all in one array declared (this case named others)
console.log(one, two, others)//reruns expected frist to value like regular array then the rest of value in seperate array all together
// 1 2    [3, 4, 5, 6]   like so values then array of values  (called rest because it will take the rest/ramining elements and put them into a new array)
//it collect the value not used in the destructoring assignment

const [pizza, , risotto, ...otherFood] = [...resturant3.mainMenu, ...resturant3.satarterMenu];//will not include any skipped element or values
console.log(pizza, risotto, otherFood);//  =   pizza risotto  ["focaccia", "bruschetta", "garlic bread", "caprese salad"]
//returns first 2 as a string then rest in an array (rest element must be the last element / and can only be one per any destructuring assingment )
//NOTE -  rest only works at the end of the datastructure / end of array this way javascript knows when to collect the remainder aka nothing can go after it 

//now rest for objects
const { sat, ...weekdays } = resturant3.openingHours;//what pulling in left side of = key has to match whats in the object
console.log(weekdays);//dont have to print sat we simply wanted to seperate it form the other thisway we only print the info wanted aka the weekdays
//returns ==  {thu: {…}, fri: {…}} object

//now like the sprea can do pass in mutiple parameter rest can do the oppisite (so im assuming condenses the parameters passed through)
//how can we call functino in a way where there is no need to specifiy number of argument or at all
const addObjs = function (...numbers) {//we didnot use rest ... its would only return 1digit the very first one and nothing else
    // console.log(numbers);//but becuse we use rest ... it print all numbers just like shown in arrays below
    let sum = 0;
    console.log(numbers);//number is an array remember usig the rest operator compresses into array this case/ not specied to be anything else like a object
    for (let i = 0; i < numbers.length; i++) {//dont need rest ... becuse its now an array and can work with it as such
        sum += (numbers[i]);
    }
    console.log(sum);//structuring funtion qith rest and not simply for function mean its can take both arrays and written value plus any number of them 
    //functino becomes more flexible and changing
}
addObjs(2, 3);//somewthing like this where funtino no specified parameter but we can pass in as many needed
addObjs(2, 3, 4, 5);
addObjs(2, 3, 4, 5, 6, 7, 8);

//NOTE rest - compress(varibles side) | spread - express.expand(values side)

const arr3 = [23, 44];
addObjs(...arr3);//use the spread ...operator to 'write it out' then pass in like regular number parameters
//if dint spread th arrays would not function properly and would return   =   023,44  not what we expected

const resturant4 = {
    name: 'Classico Italiano',
    location: 'via angelo tavanti 23 firenze, italy',
    catagories: ['italian', 'pizzaria', 'vegetarian', 'organic'],
    satarterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (sideIndex, mainIndex) {
        return [this.satarterMenu[sideIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ mainIndex = 0, sideIndex = 0, time = '20:00', address = 0 }) {
        console.log(`order recieved: ${this.satarterMenu[sideIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here your delicuos pasta with ${ing1}, ${ing2} and ${ing3}`)
    },
    orderPizza: function (mainIng, ...otherings) {
        console.log(`mainIng: ${mainIng}`);
        console.log(`otherings: ${otherings}`);
    }
};


resturant4.orderPizza('pinnapple', 'ham', 'meat', 'extra cheese');
//return main as pinnaaple on its own line the all ohter ingridients below together as string aswell(only the first ing was sepereated as specified)
//could make some logic based on some ingridient aka like a soecied pizza order or special

//--------------------------------------------------------------------------------------------------
//SHORT CURCUTING (&& AND ||) \
// - logical operator can return more than a boolean value also can take any datatype and return any datatype
console.log(3 || 'jonas');//returns the value of 3
//if first value is a truthy value it will automaticly return that value and not even evaluate the second value or condition
console.log('' || 'jonas');//the truthly value will always return 
console.log(true || 0);//the auto return of the truthly value is called short curciting
console.log(undefined || null);//iteresting null get returned (if both )

console.log(undefined || 0 || '' || 'hello' || 23 || null);//return hello aka the first truthly value evaluated
//short circult is basiclly looking to be true aka looking for a truthy valuie  and return that result 

const guest1 = resturant4.guest ? resturant4.guest : 10;//here checking if that key in object exist if so return it  if not sefualt return 10
console.log(guest1);//this is one way to do it but can also be acomplish with a short circut

const guest2 = resturant4.guest || 10;//fasly cuase dosent exist so returns 10
console.log(guest2);//return same thing as above but bit shorter utilizing the short circut

resturant4.guest = 23;//set value (if this was 0 then 10 would be return this not great as we want the real number of guest)
const guest3 = resturant4.guest || 10;//now that exist will return first truthy value ow 23
console.log(guest3);//returns 23

//now for the AND operator - work oppisite of the or operator
//this looking for the falsy value once fasly value evaluated it short circuut and return that falsy value
console.log(0 && 'draimius'); //return 0 first falsy value 
console.log(false && 0);//false returned
console.log(true && 'string');//returns last evalutaedd as both are truthy
console.log(true && 22 && null && 'draimius');//returns 1st falsy value aka null

//NOTE - OR shorts on truthy (else last value) ||    AND shorts on falsy && (else last value)
//exxample
if (resturant4.orderPizza) {
    resturant4.orderPizza('mushroom', 'psinach');
}//if siply checking if key exist in object instead of if can use the short circut
resturant4.orderPizza && resturant4.orderPizza('mushroom', 'psinach'); //becuase only run when evaluated as true code below will only run if it exist else it will not 
//note can put anything side of operator like this calling funciton dosent have to be single value
//whats the real differnce between this and a if statment and when use one over other whats the benifit of short circut
//aside from it maybe being a one liner vs 2 or 3 not rel big deal maybe if something inside a function that makes sense othewise dont see real benefit

//--------------------------------------------------------------------------------------------------
//NULLISH COALESCING OPERATOR ?? -- similar to the OR operator || only differnce is that will only short circut with 2 values null and undefined
//0 and ''  emoty string are valid with this operator  [IT WORKS WITH KNOWLEDGE VALUE NOT TRUE OR FALSE]
// nullish : null and undefined (NOT 0 or '')
resturant2.guest = 0;//usually considered a falsy value but in nullish its considered value only null and undefined are falsy aka short circut it
const guest4 = resturant2.guest ?? 10;//if or operator would return 10 but with the nullish operator return 0 (kinda treat it as a truthy value vs other operators)
console.log(guest4);    //in event that varible is not defined it will only then defualt to drfault aka value of 10

//--------------------------------------------------------------------------------------------------
// LOOPING ARRAY: FOR OF LOOP 
const menu1 = [...resturant4.satarterMenu, ...resturant4.mainMenu];
//this will automiticly loop through the whole array
for (let item of menu1) {//can still use the continue and break keywords
    console.log(item);
}//sid enote in place of let can also use const inside the ()
//instead of all this both provide same result somtime simpler to do the above (unless need specified access to the positioning)
// for (let i = 0; i < arr.meni1; i++) {
//     console.log(menu[i]);
// }

for (let item of menu1.entries()) {//if wanting to pull positino (note not really built for that) but would utilize 
    console.log(item);
}//returns the position and value both togother in array  =  [0, "focaccia"]
console.log(...menu.entries());

for (const [il, el] of menu1.entries()) {//can destructor in the for of loop as well (interesting)
    console.log(`${il + 1}: ${el}`);//becuase it returns an array can set the select how that data will be displayed
}

//--------------------------------------------------------------------------------------------------
// ENHANCED OBJECT LITERALS
const weekdays5 = ['mon', 'tue', 'wed', 'thur']

const openingHours5 = {//can also do destruturing inside object seems pretty much anywhere almost
    [weekdays5[3]]: {//also fo rthis can axect expressins like here other var and index in array
        open: 12,
        close: 22,
    },
    fri: {//also nice as can edit this here and it will be applyed to the returant5 onject aswell
        open: 11,
        close: 23,
    },
    [`day-${2 + 4}`]: {//here example of using expressinon within the onject
        open: 0,
        close: 24,//can not only cumpute values but also the property names********
    },
    sat: {//here example of using expressinon within the onject
        open: 0,
        close: 24,//can not only cumpute values but also the property names********
    },
};

const resturant5 = {
    name: 'Classico Italiano',
    location: 'via angelo tavanti 23 firenze, italy',
    catagories: ['italian', 'pizzaria', 'vegetarian', 'organic'],
    satarterMenu: ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],
    //with ES6 dont even have to have it equl new name or diff can just take the outside objects name place in here alone and bam whole object gets added
    openingHours5,//just like that whole outside object has also become part of this one and can be extracted accordingly(name in here must match whats outside)
    // openingHours: openingHours5,//this is way you can add an outside declared object inside anohter onject 
    //another anhancemtn added with ES6 is how funciton can be added
    //this and the commented out below are exactly same simply this is written in newest format (for funtion dont need the : just like declareation name () {} simple)
    order(sideIndex, mainIndex) {//althou will say i like to have continuaty aka how it all formatted same ect but guess work if just for functions
        return [this.satarterMenu[sideIndex], this.mainMenu[mainIndex]];//more about prefrnce no realy differnce in functinality
    },
    // order: function (sideIndex, mainIndex) {
    //     return [this.satarterMenu[sideIndex], this.mainMenu[mainIndex]];
    // },

    orderDelivery: function ({ mainIndex = 0, sideIndex = 0, time = '20:00', address = 0 }) {
        console.log(`order recieved: ${this.satarterMenu[sideIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here your delicuos pasta with ${ing1}, ${ing2} and ${ing3}`)
    },
    orderPizza: function (mainIng, ...otherings) {
        console.log(`mainIng: ${mainIng}`);
        console.log(`otherings: ${otherings}`);
    }
};

//--------------------------------------------------------------------------------------------------
// OPTIONAL CHAINING - way to test if properties exist within data structures ()
//guess big advantage is not havving to check throuhg each key layed of potenial keys or method or anything simply way to check if it exist (and hav ability to also work with it if it dose exist)
if (resturant5.openingHours5.mon && resturant5.openingHours5.mon.open)
    console.log(resturant5.openingHours5.mon.open);//instead how having to check at each step if properaty exist 
//where the ? is used thats where its gonna check if that data exist (? ass if it exist)
console.log(resturant5.openingHours5.mon?.open);//both return undefined as this data key and daata do not exist withing the object targeting
console.log(resturant5.openingHours5?.mon?.open);//both return undefined

//example 
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']//array use as data to pass in used as key extention to acces data further within the object
for (let day of days) {//for of loop 
    let open = resturant5.openingHours5[day]?.open ?? 'closed';//important here in the event desient exist aka return undefinde false its moves to nest action provided aka reuts the string porvided
    //and we use the nullish operator to prevent issue with undefined as sat value is 0 aka falsy value so with nullish can stiill return that value with mo issue
    //recall that if we want to use a varible name here instead of name within the data structure must use the [brackets]
    console.log(`on ${day}, we open at ${open}`)//note returns as expected except for the day that dontexist within the onject returns undefined
}//we doint watn the undefined value return so to aviod that (wee again add that defualt value if nothing assigned stay at defulat)


//NOTE all these things are genuins but i want to get to place where i know whern to use the all together and how to creat clever things like this and beyond


//METHOD
console.log(resturant5.order?.(0, 1) ?? 'me');//note how its written jsut like regular targeting object key method ect but ?. before next key or calling ()
//so waths exaclty going on here above ?? so off the bat similar to when checking if data exist or key in object above
//but not we or still doing that but checkking a funciton or method within the object 
//and calling this funciton method with values if it exist go ahed and run that otherwise will return undefined and next actin will run
console.log(resturant5.orderRisotto?.(0, 1) ?? 'method does not exsist')//in this caese this method does not exist and reutnrun undefined and next action is ran aka the string

//ARRAYS
const users = [{ name: 'draimius', email: 'draimius15@gmail.com' }];//array filled with object interesting 
console.log(users[0]?.name ?? 'user not found');//here locate user index position 0 so first targets object then within that check if name key exist within 
//in this case it doese so it goes ahead and returns its value / in event it didnt it wou dmove to nest line of code aka return string
//above is beter and shorter thatn achiving same fucntionality bith longer code 
// if (users.length < 0) {
//     console.log(users[0].name);
// } else {
//     console.log('user not found');
// }

//--------------------------------------------------------------------------------------------------
//LOOPING OBJECTS: KEY, VALUES AND ENTRIES
//OBJECT.KEYS - will return the keys of the slected object
for (let day of Object.keys(openingHours5)) {//
    console.log(day)
}//return the onject days aka value/key in the openinghours object (thur fri sat day-6)

const properties = Object.keys(openingHours5);
console.log(properties)//return an array of the keys of selected on=bject  ==  ["thur", "fri", "day-6", "sat"]
//how many days returant is open
console.log(`returant is open ${Object.keys(openingHours5).length} day a week`)//or could have use properties in place of objectkeys ect..

//OBJECT.VALUES
const values = Object.values(openingHours5);
console.log(values);//reutrn all value of keys within aka the open and close keys and value/times

//OBJECT.ENTRIES / ENTIRE OBJECT- kinda like key plus values together
const entries = Object.entries(openingHours5);
console.log(entries);//return that portion of the object this case the day with open close plus thier times within (basicly like said that portion of the object)
//withi this now we can loop over the object
for (let section of entries) {
    console.log(section);//retunred the whole portion / then also each child portion as well 
}
for (let [keying, { opening, closing }] of entries) {//inthis way we can use the whole object components (destructured to pull all values accordingly)
    // console.log(key, open, close);
    console.log(`on ${keying}, we are open from ${opening} and close at ${closing}`);//can also name the destructuring whatever you want (this case i added ing to all jsut be sure they match when calling)
}

//--------------------------------------------------------------------------------------------------
// SETS - collecvtuon of unique values (differnt type of data structure that also exist in different langugues)
const orderSet = new Set([ //also side not as to setting varible to new set on spot (does same work or other data structures?????)
    'pizza',
    'pasta',
    'risotto',
    'risotto',
    'pasta',
    'pasta',
])
console.log(orderSet);     //{"pizza", "pasta", "risotto"}  / length comes back as undefined

//they are iterable (can be looped over) (also mean can be used by varible name without having to loop over will provide all values)
//they are similar to Arrays but also very different    
//  --order in sets is irrelevent
//  --unnique value only meaning no repeats given (printed pulled ect.. )

console.log(new Set('watch')); //{"w", "a", "t", "c", "h"}
//strings also itterable
//  --guess string treated as above orderSet (this case just instead of full words its individual letters)

console.log(orderSet.size); //returns the number of unique values stored in the set / Not the actual length or number of values
//note use .size for sets not 'length

//OTHER SET METHODS  
console.log(orderSet.has('pizza'));    //checks wether value exist in the set (returs boolan true or false)  true in this case
orderSet.add('Garlic bread');    //adds ut to the end of the order set
console.log(orderSet);      // now is {"pizza", "pasta", "risotto", "Garlic bread"}
orderSet.delete('pasta');    //as expected delets the value from the set
console.log(orderSet);      //now {"pizza", "risotto", "Garlic bread"}
orderSet.clear();    //this will clear the whole set
// console.log(orderSet); //{} commentedto work with

//also unlike arrays values in Sets CanNot be retrived using the index feture aka (orderSet[0] == this does not work for sets)
//Example - we want to take the array and cut it down to only the individual positions
const staff = ['waiter', 'chef', 'wiater', 'manager', 'wiater', 'chef']
const staffUnique = new Set(staff);
console.log(staff); //["waiter", "chef", "wiater", "manager", "wiater", "chef"] / provides # employees in each position
console.log(staffUnique); //{"waiter", "chef", "wiater", "manager"} / provides positions types / 

//Convert Set to Array (...spread operator)
const staffUniqueArr = [...new Set(staff)];  //here important remember use the [] for array all incompassing the new Set(target)
console.log(staffUniqueArr);    //["waiter", "chef", "wiater", "manager"] same value now in array format

//Example - say all we wanted to know was the number of different postion 
console.log(staffUnique.size);   //use the size property for set  / this case its 4 fo rboth same values so same number ofcourse
console.log(staffUniqueArr.length);    //or if have array for same values length as ususual 
console.log(new Set(['waiter', 'chef', 'wiater', 'manager', 'wiater', 'chef']).size)    //or we can simply plug in the array like so as get number of unique values
//same thing for a string
console.log(new Set('draimius').size);  //no need for [] here / returns 7 unique characters

//when to use array vs sets ??
//when need specified order or precisce pulling placing use array 
//only use sets when need to find unique values / or rid of duplicates ohterwise stick to arrays

//--------------------------------------------------------------------------------------------------
// MAPS: FUNDEMENTALS - data structure to map values to keys
//  -- difirence between maps and object/ in maps keys can be any datatype unlike objects
//      -- key could even be other maps or objects aswell

const rest = new Map(); //simple way to creat is first make empty then add
rest.set('name', 'classical italiano'); //execpts two arguments (the Key, then Value)
rest.set(2, 'france, italy');
rest.set(1, 'monaco city, monaco')
console.log(rest); //{"name" => "classical italiano", 2 => "france, italy", 1 => "monaco city, monaco"} / similar to object differnce in the arrow point to to value correspoinding to key
rest.set('categories', ['italiano', 'pizzeria', 'organica'])    //jsut like in object catagories is the key an the whole array its value pair

//can also chain the sets - 
rest.set('open', 11).set('close', 23).set(true, 'we are open').set(false, 'we are closed');     //notice used boolean datatype as a key here
//chianing here where both get added to the original specified map aka 'rest in this case (can continue to chian on) ().rest().rest().rest() ect...
console.log(rest);  //check for refrence
console.log(rest.get('name'));  //like expected give value pair = classical italiano
console.log(rest.get(true));    // returns = we are open        / also note we retrive with true not 'true' pulled with boolean type cuase that how it was set originaly

//Example -
const time = 21;
// rest.get(time > rest.get('open') && rest.get(time < rest.get('close')));    my attempt seem its writen bit differnet -
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));     //seems after && for time did not need to get it again (i assume becuase we had once already)
// -- purpose is that now it will return a true or false value 'key' that correlates to value in map   / basicly aked if time (21) > 11 and < 23

// QUESTION: rest.get(time > rest.get('open') && time < rest.get('close'))  -- note not very common use something like this just highlitiing using boolena as map keys
// -- question is why this works, I get how it can get to true or false the parameter
//  -- but how or where when does it convert result to string value 
//   -- why not just return true or false why does it refer back to the map values corelated
//    --  just becuase it was first refrnced?? what if we worked with multiple at time?? what then?? how does it determine what to refrence if any at all??

//OTHER MAP METHODS - very similar if not same as the sets 
console.log(rest.has('categories'));    //checks is exist within the map
console.log(rest.delete(2)); //deletes from the map
// -- note used number type as tha how it was set not '2' but 2
console.log(rest.size); //provides the number of key within the map
rest.clear(); //clears map of all key value pairs

//Example - use array as map keys
rest.set([1, 2], 'an array');
console.log(rest);
console.log(rest.get([1, 2])); //returns undefined why??
//  -- the key is exactly the specified object(specified location in memory) aka not the same as array inputed aboput\
//   -- although appear the same they dont refere to same thing in HEAP

// -only way to make this work would be to refrnce it already set to a varible name (a key per say instead of the ram values themselves) -
let arrKey = [1, 2];    //this way refrnces same location memory and object in HEAP
rest.set(arrKey, 'an array');
console.log(rest);
console.log(rest.get(arrKey)); //and now returns coresponding value = an array
// -- this shows that object can actually be used as map keys

rest.set(document.querySelector('h1'), 'Heading');  //interesting actually tied to the h1 html element on page via map key (the actual H1 element is the key it self)
//          --this portion the key      --this the value

//--------------------------------------------------------------------------------------------------
// MAPS: ITERATION

//other way to add to map / when lots of additions needed
// instead of using set creat new Map with multiple array one all incompassing the the several nested adding the key and value pairs
const question = new Map([
    ['question', 'what is the best programming language?'],
    [1, 'C'],
    [2, 'Javascript'],
    [3, 'Lua'],
    ['answer', 2],
    [true, 'correct, great job'],
    [false, 'try again']
])
console.log(question);  //
//when creating Map from scratch this is the best way to do it / const name = new Map ([])
//  -- only when adding additinals later to map do we want to use  / mapName.set()

//NOTE: the map structure is the exact same / as when you call Object.entries on an object
console.log(Object.entries(openingHours));  //an array with a list of array each holding key value pairs

//Converting Object to Map -
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iteration - for of loop and for loop avalible for them 
console.log(question.get('question'));
for (let [key, value] of question) {    // - same thing as looping over Object.entries just in this case with map dont need to use Object.entries
    if (typeof (key) === 'number') {    //  - by checking type can pick and chose witich end value actully wnat to work with
        //  -- note when check type of return type as string / so like shown would be 'number' and not Number like first thought
        console.log(`Answer ${key}: ${value}`)  // Answer 1: C / Answer 2: Javascript / Answer 3: Lua
    }
}
// const bestInput = Number(prompt('your answer'));    //off 
// console.log(bestInput); //print input
// console.log(question.get(bestInput));   //print corresponding value to key
// //now need something to check wether = correct answer then give coresponding string
// console.log(question.get(bestInput === question.get('answer'))) //pulls question.get(false or true) dependent on input and parameters
// //  -- once eveluated either or it then pulls the corresponding value from map / this case being a string
// //   -- shows the usefulness of having boolean keys linked to value to be pulled

//Convert Map to Array - similar to set to array we use (...spread operator)
console.log([...question])  //now it one array with a list of arrays / set within [...targetMap]
//reminder of methods for array 
console.log(question.entries());    //like this gives MapIterator - not sure exactly what that is
console.log([...question.keys()]);   //no MapIterator when we spear in array
console.log(question.values());

//--------------------------------------------------------------------------------------------------
// Summary: WHICH DATA STRUCTURE TO USE - 
//Sources of Data - 
// -- from the program itself: direcetly written / source code
// -- from the UI: data input from the user or written in the DOM
// -- from external sources: data fetched from outside itself / other web API's
//  --wherever it comes from we need somewhere to store it this leads us to data structures

//things to consider - 
//  -- are we making a simple list? (array) or do we need keya nd value pairs? (object / a way to describe the values)
//  -- when we dont need a key to describe we use arrays (wether they contion lsit of value other arrays, objects or other data structures)
//  -- now when you need key to describe the value in where it woulnt make sense unless you didi we use objects (even if nesting array as value pairs ect..)
//  -- note that there are other datasructure that dont exist in javascript like / linked list, hash tables, stacks, queues, trees, ect..
//  -- 

// TYPES OF DATA STRUCTURES: 

// ARRAYS - lsit 
// -- use when: 
//  -- need an ordered list of value (where duplicates can exists)
//  -- need to manipulate the data store within (tons of methods build in)


// SETS - unique list (almost like a compliment to arrays)
// -- use when: 
//  -- need working with unique values (dont want duplicates)
//  -- when removing duplicate or high preformance priority (ex, serach and delet in set can do 10x faster then in arrrays)

// OBJECTS - (well known, traditional)
// -- use when: 
//  -- need a value to be a function (use 'this' keyword)
//  -- is easier to write and access with the .target and [bracketsTarget]
//  -- need use when working with JSON (unless take that and then conver to Map)
//  --
//  --

// MAPS - simple need key to value store (new feture for JS)
// -- use when: 
//  -- need Map keys to be different Data Type (not only stirng like in objects)
//  -- need better preformance with sinmple key value stores
//  -- need easier to iterate over and compute the size
//  -- procide better preformance

//--------------------------------------------------------------------------------------------------
// WORKING WITH STRINGS P.1 - 
const airline = 'TAP Air Portugal';
const plane = 'A320';
;
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);  //so this pulls from the string defined above 
console.log('draimius'[0]); //while this is pulling from the srting right next to iit
//can utilize the index[method] on the the varible(representing string) or on the string itself
console.log(airline.length);
console.log('draimius'.length);
//this is also true for the length method

//String Methods [SLICE] - (similar to array methods)
console.log(airline.indexOf('r'));  //will return the index/position of target character within the string
console.log(airline.lastIndexOf('r')); //will return index/position of last traget chracter
console.log(airline.indexOf('Portugal'))    //will return index/position where target word begins (this case word strats at index 8 (the 'P')) 
// NOTE: the index finding methods are Case Sensitive also (if target selected does not exist will retur -1)

//methods below generate a new string (akak they do not change the original;)
console.log(airline.slice(4));  //this will reuturn string starting from index 4 till end  / this case 'Air Portugal'
console.log(airline.slice(4, 7));   //take a slice of the string  / slice(stratIndex, endIndex)  = 'Air'
//now lets try it without hard coding numbers - 
console.log(airline.slice(0, airline.indexOf(' ')));    //start 0 cuase always start point, but stop point is the first space
// -- in this way we are able to pull the first 'word' without knowing the any  of the index/positions
console.log(airline.slice(airline.lastIndexOf(' ') + 1));   //pulls the last word in string (also added the +1 to lastIndexOf this way in print space is removed)
//you can also sue slice with negative number - 
console.log(airline.slice(-5)); //using negative number mean it pulls from right to left from the back to front but works the smae way  = 'tugal'
console.log(airline.slice(1, -5));  //same as other satrt at 1 end at -5 (starting from back moving in 5 thats where it'll end)  = 'AP Air Por'

//Practice - 
// const checkMiddleSeat = function (seat) {    //-me solution (here we simply checked if it existed within the dtring regardless of location)
//     //b and e are middle seat (in short that what we are looking for)
//     if (seat.indexOf('B') == -1 && seat.indexOf('E') == -1) {
//         console.log('NOPE, not a middle seat');
//     } else { console.log('YES, its a middle seat') }
// }

//another way to do the above - using negative index instead (here we specified looking at the last chqaracter only the checked for target character)
const checkMiddleSeat = function (seat) {
    const seatPos = seat.slice(-1);
    if (seatPos === 'E' || seatPos === 'B') {
        console.log('YES, its a middle seat');
    } else { console.log('NOPE, not a middle seat') }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
//NOTE: string are primitave values so how are we able to use methods on the
//  -- thats becuase behind the sence javascript atomaticlly converts it into string-object (called boxing) to work with when a method is called upon it
//EXample of boxing --
console.log(new String('draimius')); //take note of the data's structure (obkect like where the index is key and value each letter in order)
console.log(typeof (new String('draimius')));   //reutrn Object (once method is use the string will return back to primitive type)

//--------------------------------------------------------------------------------------------------
// WORKING WITH STRINGS P.2 - 
// More String Methods - 
console.log(airline.toLocaleLowerCase());  //changes the case to all lowercase (from 'PAT' to 'pat')
console.log(airline.toUpperCase()); //changes all print to Capital cahracterxs

//Fix capatilization in name - 
const passanger = 'jOsE'; //want 'Jose'
console.log(passanger[0].toUpperCase() + passanger.slice(1).toLowerCase()); //1st character upper then rest to lower

//comparing email - 
const email = 'hello@jose.com';
const loginEmail = 'Hello@JoSe.cOm \n';
if (loginEmail.slice(0, 14).toLowerCase() == email) {   //we used slice here to get everytthing prior to the last space (this way we only get the email and no issue with \n)
    console.log('succesful log in');    //-- in that we can then take only email lower it then compare to eachother on level field 
    console.log(loginEmail.slice(0, 14).toLowerCase());
    console.log(email);
}       // -- learned that instead of SLICE could have use the TRIM() method to remove any white space including the 'enter/new line'
//in a real life situattion jonas shows youd wantto do this in steps and not all at once(have function holding all this doing it step by step) -toLower then trim ect..
//NOTE: updates to trim() now have trimEnd and start this way you can trim fomr the selected section if needed

//Replacing portion of a string - (using replce creates a new string no change to the original)
const pricePound = '288,97£';
const priceDollar = pricePound.replace(',', '.').replace('£', '$');   //replce('target)', 'replacement' /also learned you can stack them
console.log(pricePound);
console.log(priceDollar);

const announcment = 'All passengers come to boarding door 23. Boarding door 23'
console.log(announcment.replace('door', 'gate')) //only replaces the first occurnece 
//-- new feture use replaceAll to repace all and not just the first occurence
//Regular expression (regex) can also be used to achieve this - witten between /two slashes/  / g means its global to said target
console.log(announcment.replace(/door/g, 'gate'))
//NOTE: all string methods are Case Sensitive (meaning if not exact match will not replace)

//3 simple maethods that return Booleans - 
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));   //return ture / checks is string includes selected target (seeem similar as to when checking other datastructure uf selecte target is within structure)
console.log(plane1.startsWith('B'));    //chekcing is selected string starts with target character(S) / false in this case
console.log(plane1.endsWith('eo'));    //check is thats string of character exist in the end of selected string / true ( sting has to follow that order and end with those characters)
if (plane1.startsWith('A') && plane1.endsWith('neo')) {
    console.log('part of the new NEO series');
}   // -- when basing decisions on the content of a string these method are very usefull

//Practice - 
const checkBaggage = function (item) {
    const bag = item.toLowerCase();     //you want to 
    if (bag.includes('knife') || bag.includes('gun')) {
        console.log('SECURITY!!!!')
    } else { console.log('AH you good to go') }
}
checkBaggage('i gots some foods wach and Knife');
checkBaggage('gots some snacks and floss');
checkBaggage('i got several gun and weeponds');

//--------------------------------------------------------------------------------------------------
// WORKING WITH STRINGS P.3 - 
//More Methods:
//Split(sperating character) & Join(joining character)
console.log('a+every+nice+string'.split('+'))   //["a", "every", "nice", "string"]
// the split(method) allows us to split a string into an array sepereated by the target chracter, in above case seperated every '+'
console.log('jose ramirez'.split(' '));   //["jose", "ramirez"]  /  usefull with destructuring 
const [firstName, lastName] = 'jose ramirez'.split(' ');    //now each name seperate as wanted
console.log(lastName, firstName);   //ramirez jose
console.log(`Mr. ${lastName} ${firstName}`);    //instead of temp lit can use the join(method)
console.log(['Mr.', firstName, lastName].join(' '));    //smae result as above
//NOTE: in both join() and split() methods whats placed in the (is character that will be used) - wether thas nothing, number, or space (split will use tit to seperate thing in array and join will use it to join them-)

const capitalizeName = function (name) {    //capitalize 1st letter of each name
    const newName = [];
    for (let nam of name.split(' ')) {
        newName.push(nam[0].toUpperCase() + nam.slice(1));

        // // --- another way to solve this is with the replacment method
        // newName.push(nam.replace(nam[0], nam[0].toUpperCase()));
        // // --- here we simply replace the 1st leter with 1st letter capitalized 



    }
    console.log(newName.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jose luis ramirez');

//Padding(total string legnth, pad character) / End & Start
const msg = 'Go to gate 23';
console.log(msg.padStart(22, '+'));  //(Total Desired Length Of String, Character To Pad With)
console.log('jose'.padStart(11, '*'));  //*******jose
console.log('hello'.padStart(11, '*').padEnd(2, '*'));  //notew that padEnd no padding will be added unless the number specified is greater then the string length /  aka must be bigger than any padStart or original stringlength
console.log('jose'.padEnd(8, '$'));

//Practice - 
const maskCC = function (number) {
    const toStr = number + '';     //change number to string: 2 ways change the datatype with toStringj or simply add an empty string to it + ''  /  reminder that when ever add string type to any other type will defult to strig as the result
    const last4 = toStr.slice(-4);  //last 4 digits bythemselve to work with
    // const show = last4.padStart(16, '*');   //16 becuase thats toatal cc number and only want last four to show
    const show = last4.padStart(toStr.length, '*');   //we actually dont want to hard code it instead us the lenght of string or thoer as needed

    // console.log(toStr); //convert #'s to string 
    // console.log(last4); //pulls the last 4 digits from the #'s
    console.log(show);  //take last 4 and pads the rest of characters infront
}

maskCC(162536475);
maskCC(162535);
maskCC(16253647587653425);
maskCC('8765432123456765');

//Repeat(# times you'd like string repeated) - 
const msg1 = 'Bad weather... All Departures Delayerd...';
console.log(msg1.repeat(2));    //Bad weather... All Departures DelayerdBad weather... All Departures Delayerd

const planesInLine = function (dig) {

    console.log(`there are ${dig} planes in line ${'✈️'.repeat(dig)}`);
    //future notice / when strign in ${} any method called upon it must be done within the ${}
}
planesInLine(5);
planesInLine(55);
planesInLine(1);
//NOTE: there are more string method would be grreat value to review and learn other aswell (like concat, ect..) we just went over the most commonly used

//--------------------------------------------------------------------------------------------------
//  STRING METHODS PRACTICE -
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//Expected :
// 🔴 Delayed Departure from FAO to TXL (11h25)
//  Arrival from BRU to FAO (11h45)
// 🔴 Delayed Departure from HEL to FAO (12h05)
//  Departure from FAO to LIS (12h30)

//seems each is made up of 3 parts (depart or arrive), (leaving from then to), then(times)
//  --all sectin seperated by ; ( so can split to seperate them )
//  --thinking layered loopind first split at + to get each one then split at ; to get each section 
// --the split of ; we destructure into four part have each section now 
//-- from there can target the specified info we are looking for and adjust its format/ display in print

const flightInfo = function (arr) {
    let flightSplit = arr.trim().split('+');   //get us all 4 flight info individually 
    for (let each of flightSplit) {    //loop of each individual this way we can extract each section
        //step by step get each section in to format wanted
        let [arrvial, from, to, time] = each.split(';');    //destructure to now target each section individualy to work with   (split with ; and get array)
        let newArrival = arrvial.replaceAll('_', ' ').trim();   //gives us the arrival string in format needed  (got rid of _ replaced with space then trimmed any whitespace)
        let newFrom = from.slice(0, 3).toUpperCase();   //give us the from in format needed (pulled only first 3 characters in uppercase)
        let newTo = to.slice(0, 3).toUpperCase();   //gives us to in format needed  (pulled only first 3 characters in uppercase)
        let newTime = `(${time.replace(':', 'h')})` //give us time in format needed (added () with temp literal string and replaced : with h for format )
        //gives count for repeat 🔴 this way we only need one string (and only shows when is true)
        let rCount = newArrival.split()[0].includes('Delayed') ? 1 : 0; //determines count wether target is included in the split array of arrivals - note only tageting the first word of each with [0]
        // ---- jonas still used boolean and ternery but instead of includes() used .startsWith('delayed') smart that way dont have to target specified index
        // ------------------- console.log(`${'🔴 '.repeat(rCount) + newArrival} form ${newFrom} to ${newTo} ${newTime}`)   //fonud format actually bit differnt neede to add padding to start so did so / kepping for notes
        // let newString = (`${'🔴 '.repeat(rCount) + newArrival} form ${newFrom} to ${newTo} ${newTime}` ).padStart(44, ' ')  //kepping
        // console.log(newString.padStart(44, ' '));
        //--------------------------------- previous solution above / wasnt sure could chain on padding cause it woul apply ot only one individual string / but instead added at very end after the whole string inreturn then pad the final product
        console.log((`${'🔴 '.repeat(rCount) + newArrival} form ${newFrom} to ${newTo} ${newTime}`).padStart(44, ' ')); //add padding to the formated tremp lit string
    }
}
flightInfo(flights);  //run function
//great practice -  could have maybe inrpoved in some redundencies like with to and from generating same out put just on diff string right, other than that not sure , but sure theres something
//maybe could have done all the formating inside one big temp lit string but relly thing that would have looked messy

//ok so seem formatiing bit differnt than i originally though stil pretty much the smae
//change is that we need to add padding of empty space looks like 
//so seems theres a specified string length ok so in padding take care of that 
//aspaces in front so that paddingsTart donzo 
//anything else ???? / nope that was it 

//JONAS SOLUTION --
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delay') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);
}

//similar to what i said previsuol,y about to from and all in one string 
//though there even copiying that strig was confuding to follow i get it jsut not that easies thing to read
//did very much likt the use of arrow function to creat that wuick simply use function for to anf from smart / mine jsut more begineersolution right run through step by step 
















































































































