'use strict';
//become platform dev by july earn company and freelance work
//i want to lear a lucrative high demand skill that can levarage in work lnasdscape


//developer problem solving
  // 1.understand problenm clearly (high level)
    //asking the right quwations
  
  // 2.break it up into parts
  // 3.dont be afriad to reaserch for solution
  // 4.write in pseudo code aka huuman understanding before translationg in to code

//reaosurces : 
//google
//mdn



//code challange
const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
const Otemps = [-2, -6, -1, 'error', 9]
// const tempsCombined = Otemps.concat(temps);
// //building ocmpany thermostats wants us to calulate the temperature amplitude, and have tit ingonere any sensor errors
 
// const temps1 = [];
// for (let i = 0; i < tempsCombined.length; i++) {
//   if (typeof tempsCombined[i] === 'string') continue;
//   temps1.push(tempsCombined[i]);
// }

// const amplitude = function (maxNum, minNum) { //calculates the amplitude and returns positive value 
//     let result = maxNum - minNum;
//     if (result >= 0) {
//       return `amplitude = ${result}`;
//     } else {
//       return `amplitude = ${-result}`;
//     }
// }

// const minNum = Math.min(...temps1);
// const maxNum = Math.max(...temps1);
// console.log(maxNum, minNum);
// console.log(amplitude(maxNum, minNum)) //----------------------


//here issue is that if we wanted to run 2 completly different arrays it would not work as its working on predetermined array concatination so lets fix this 
    //here also dont know why the loop portion is not within the funcitno it self right 
      //also thinking can pass in 2 parameter (2 arrays) and can simply concat them within funtino then work of that simple
          //operferably combnined array would only be value withiin the funtion believe thats best (we see)
//basiclly seem s i have all the right components just need to all be within one fuiuntion perhaps

const calcAmplitude = function (arr1, arr2) {
  let nArr = arr1.concat(arr2);
  let minNum = nArr[0];
  let maxNum = nArr[0];
  for (let i = 0; i < nArr.length; i++) {
    if (typeof nArr[i] === 'string') continue;
    minNum = minNum < nArr[i] ? minNum : nArr[i]; 
    maxNum = maxNum > nArr[i] ? maxNum : nArr[i]; 
  }

  let amplitude = maxNum - minNum;
  return `amplitude = ${amplitude}`
}
//NOTE: i like it very effective and efficien is seems im very happy with this revised solution <3
console.log(calcAmplitude(temps, Otemps))  //can take any 2 arrays


//DEBUGGING - find and fix errors
//console for the simple stuff
    //go into the source 
      //then we click on line wanted and select add break point this is basicly the pausing point selected for code 
        //in this way can test and see results of portion of code before all executed together 
        //on right sode can see all variables as they are now before running rest of code
      //on right top aswell there arrows where you can step throught each line of code back and forward `noice`
//degugger tool for more complex issues
//testing software



const measureKelvin =    function() {
  const measurement = {   //note that object only exist within the function itself in 
    type: 'temp', 
    unit: 'celsius',
    value: 60//Number(prompt('degrees celsius:'))   //parseInt(prompt('degrees celsius:'))
  }

  console.table(measurement); //logs in table style provides index/key and corresopnding values

  const toKelvin = measurement.value + 273;
  return toKelvin;
}


console.log(measureKelvin())
// console.warn(measureKelvin())
// console.error(measureKelvin())
//NOTE parseInt changes data type for that instance only whoel number chages the whole string to a number type all together

//CHALLANGE
const forecastTestData = [17, 21, 23];
const forecastTestData1 = [12, 5, -5, 0, 4]; //for the day use index + 1  and then value in array jsut the index [i]
// const printedForecast = [];
const printForecast = function (arr) {
  let printedForecast = [];
  for (let i = 0; i < arr.length; i++) {
    printedForecast.push(`... ${arr[i]}^C in ${i + 1} days `)
  }
 console.log( `"` + printedForecast.join('') + '..."') //joins all values within the array to one continues string and in () input what will seperate them if anything
 printedForecast = [];
  // console.log(printedForecast);
}

printForecast(forecastTestData);
printForecast(forecastTestData1);


//JONAS SOLUTION bleow \/
// ..diference is that he didnt use another array and instead did string += the temp literal 
            //dif that instead i used join and other array (good to fiund dif ways to do things noice)
    //then when console log just added  ... then / also didint bethoer adding the "" lol 
    // let str = '';
    // str += `${arr[i]}^C in ${i + 1} days ... `;
    // console.log('...' + str)
