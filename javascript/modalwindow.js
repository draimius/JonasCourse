'use strict';
// alrity so here really about selecting buttons
//then creat funtion that adds a class opon clikc of button the correspinding windoe
//we'll do that with event listerns for each buttion
//thn the exiting from wondow aka now removing the previulsy applyed class
//want to do this several way (click off. click x button, and esc key push)
//PLAN
//satart with selecting all elemst will be using asing to valirables appraopriatly 
// next work on the event listneres getting everything in the we will need 
//next clean it up divide out to tool funtino s nested then events themselves aim for dry code no repetition
//IDEA use buttonm index to know which button clicked then which window to display all in  one fuctin vs 3 similar ones fo reach button
// const xoutButton = document.getElementsByClassName('xout');//grabs all elements with the class this way set for jsut the one thing and not each individual (samefunctin anyways)
//ISSUE AS IT SELECTS AL OF THEM CANT DO EVENT LISTENER MAYBE IF RUN THOUGHT WITH LOOP IF NOT INDIVIDUALLY TARGET

// const xout1 = document.querySelectorAll('button')[0];
// const xout2 = document.querySelectorAll('button')[1];
// const xout3 = document.querySelectorAll('button')[2];

// const button1 = document.querySelectorAll('button')[3];
// const button2 = document.querySelectorAll('button')[4];
// const button3 = document.querySelectorAll('button')[5]; //want to find way can have one funciton for all and not 3 seperate events

// const window1 = document.querySelector('#window1');
// const window2 = document.querySelector('#window2');
// const window3 = document.querySelector('#window3');//corresponfing windows that pop up apon clicks

// const overlay = document.querySelector('section');
// remember if grabing more than the one specified element must use querySelectorAll dont forget that all portion important

// NOTE for esc key and click off still with belive window welement jsut no button specified for trigger like x button
// xoutButton.addEventListener('click', removeClass())

// tools
// const removeOverlay = function () {
//     overlay.style.display = 'none'
// }
// const addOverlay = function () {
//     overlay.style.display = 'block'
// }

// const removeClass1 = function () {
//     overlay.style.display = 'none'
//     window1.style.display = 'none'
// }
// const removeClass2 = function () {
//     overlay.style.display = 'none'
//     window2.style.display = 'none'
// }
// const removeClass3 = function () {
//     overlay.style.display = 'none'
//     window3.style.display = 'none'
// }


// const addClass1 = function () {
//     overlay.style.display = 'block'
//     window1.style.display = 'block'
// }
// const addClass2 = function () {
//     overlay.style.display = 'block'
//     window2.style.display = 'block'
// }
// const addClass3 = function () {
//     overlay.style.display = 'block'
//     window3.style.display = 'block'
// }


//ADDING 
// button1.addEventListener('click', function () {
//     addClass1();
// })
// button2.addEventListener('click', function () {
//     addClass2();
// })
// button3.addEventListener('click', function () {
//     addClass3();
// })

//REMOVING
// overlay.addEventListener('click', function () {
//     removeClass1();
//     removeClass2();
//     removeClass3();
// })

// xout1.addEventListener('click', function () {
//     removeClass1();
// })
// xout2.addEventListener('click', function () {
//     removeClass2();
// })
// xout3.addEventListener('click', function () {
//     removeClass3();
// })


// window.addEventListener('keydown', function (e) {//remove with escape key
//     if (e.key == 'Escape') {
//         removeClass1();
//         removeClass2();
//         removeClass3();
//     }
// })//e in prarameters place will be the key u pushed can console log to see key"" and use it to check what keys pushed
//  ------ VERISION 2.0
// this is good --------------------------------
//NOTE - got it working but definatly could use soem cleaning up jsut lot repetition there (this is also that i didnt use classes i simply changed the display values)
//const
const modalButton = document.querySelectorAll('.modalButton');//open windows buttons
const xoutButton = document.querySelectorAll('.xout');//clsoe window buttons
const overlay = document.querySelector('section');//overlay background
const modalWindow = document.querySelectorAll('.modal');//all pop up windows 

//let

//tools function
const clickRemoval = function (choiceElement) {
    for (let i = 0; i < xoutButton.length; i++) {
        choiceElement.addEventListener('click', function () {
            overlay.classList.remove('reveal');
            modalWindow[i].classList.remove('reveal');
        })
    }
}
//----------
const clickRemoval1 = function (choiceElement) {//this one loops throught array of elements vs.above that only one element
    for (let i = 0; i < xoutButton.length; i++) {
        choiceElement[i].addEventListener('click', function () {//differnce this line have index [i]
            overlay.classList.remove('reveal');
            modalWindow[i].classList.remove('reveal');
        })
    }
}
//-------------------------------
for (let i = 0; i < modalButton.length; i++) {
    modalButton[i].addEventListener('click', function () {
        overlay.classList.add('reveal');
        modalWindow[i].classList.add('reveal');
    })
}
// for (let i = 0; i < xoutButton.length; i++) {
//     xoutButton[i].addEventListener('click', function () {
//         overlay.classList.remove('reveal');
//         modalWindow[i].classList.remove('reveal');
//     })
// }
clickRemoval1(xoutButton)
// this is good -----------------------------------------------
for (let i = 0; i < modalWindow.length; i++) {
    window.addEventListener('keydown', function (e) {//can use the window or document to sleect the whoel page to listen on
        // console.log(e);
        if (e.key === 'Escape') {
            overlay.classList.remove('reveal');
            modalWindow[i].classList.remove('reveal');
        }
    })
}


// for (let i = 0; i < xoutButton.length; i++) {
//     overlay.addEventListener('click', function () {
//         overlay.classList.remove('reveal');
//         modalWindow[i].classList.remove('reveal');
//     })
// }
clickRemoval(overlay);


// overlay.addEventListener('click', function () {
//     overlay.classList.remove('reveal');
//     modalWindow.classList.remove('reveal');
// })
// window.addEventListener('keydown', function (e) {
//     overlay.classList.remove('reveal');
//     modalWindow[1].classList.remove('reveal');
//     modalWindow[2].classList.remove('reveal');
//     modalWindow[3].classList.remove('reveal');
// })
//why does it allow us to loop through the ones above but not the windows same thing array of elements[ok dont know what did different maybe just missing something previsuoly but working now so gravy]
// window.addEventListener('keydown', function (e) {
//     if (e.key == 'Escape') {
//         windowRemoveLoop();
//     })

// const windowRemoveLoop = function () {
//     for (let i = 0; i < modalWindow.length, i++) {
//         overlay.classList.remove('reveal');
//         modalWindow.classList.remove('reveal');
//     }
// }
//nested funtions

// const popUp = function () {
//     overlay.classList.add('reveal');
//     modalWindow[i].classList.add('reveal');
// }
//think have way to pull coresponding but is there way can store and loop all windows as well
//could be pulling same index button 1 pull window 1 can do something like that
// events

//JONAS SOLUTION
//genuis previusoly how i selected all button but could pull individualy thought about looping it jsut didnt get around to it but he solves very nicely
//ads the eventlistener to the looping array effectivly appliying the eventlistener to each element in the array genius (with this gonna clean my code here quickly)
// for (let i = 0; i < buttonsArr.length; i++) {
//     buttonsArr[i].addEventListener('click', function () {

//     })
// }
// for (let i = 0; i < xoutButton.length; i++) {
//     xoutButton[i].addEventListener('click', function () {
//         overlay.classList.remove('reveal');
//         modalWindow.classList.remove('reveal');
//     })
// }//hes able to work with whole array of buttons without using tohe i in loop for index and im not dosent allow it 
// i wonder if thats beccuase hes removing simply removing and reapplying a class while im adding whole new one and removing it right after figure be same thig practicly 
// but maybe does have something to do with it will look further into it/ or maybe 
//KEYBORAD EVENTS - are global meaning we listen for them on the whoe ldocument window and not a specified element
//HOW TO CHECK THE EXISTING CLASSES - and creat parameters with it
// if (!modal.classList.contains('hidden')) {//this will generate a boolena to work off of when true/ so when it doesnot contain the hidden class only then will we apply when proper catalys specified key  clikc ect...
//     modal.classList.remove('hidden')
// }        //mine would be the same but oppisite aka no ! were looing that it is applyed then remove flipped compared to jonas solution
if (e.key === 'Escape' && !modalButton.classList.contains('hidden')) {
    modal.classList.remove('hidden');
}   //same thing as above just written bit more affectivly
