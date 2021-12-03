'strict';
console.log('javascript theory')
//javasdcript is a highlevel object orientated multi paradigm programming language and lot more
    //now what does that mean?
//PROGRAMMING LEVEL - any prgramming language needs reasources 
    //high klevel langueages manage the resources for you auto maticly
    //unlike low level languages like C where  you have ot manage resourses yoursefl 
    // HIGHLEVEL - dont have to manage resources  but wont be as effecient as posible
    // LOWLEVEL - have to manage yourself but can programm to be as effeccient as possible
//MULTI PARADIGM LANGUAGE - how code is structured (startegy or technique)
    //3 popular are
        //procedural programming -  orginizing code in linear way
        //object orientated programming - 
        //functional programming
            //the can also be clasified as Impperative and Declarative  
                //many languages are either one or the other but javscript does it all leaves it up to the programmer to structure as they please or need
//FIRST CLASS FUNCTIONS - how funcitons are traeated 
    //meaning functions are treated as regular variables meaining can pass functions into other funtinos and even return them in other funtions
        //allow for funtional pragramming and powerful programming 
            //not all langueages have first clss fucntions
//DYNAMIC LANGUAGE - defining data types
    //in javascript we dont have to define the data type javascript dosent its automaticly unlike other languages like C
        //in javascript datatypes are determined automaticly unless  specified
    //stong types lanugage mean you define the data types languages like C ruby or java
            //helps to prevent satatypes related bug 
        //if want to use javascript in stong use TYPESCRIPT (thats what it is)

//SINGLE THREADED - 
    //cucurency model - how javascript handles multiple events
        //single thread javascript can only handle only action aka line of code at a time (only one thing at a time)
            //so what about a long running task?  dont want that to be inturupted. so how does that work
//NON-BLOCKING EVENT LOOP - 
    // this solves issue of long runnig task by passing them of to the event loop taking them out of the sinlges thread and only back in once task is complete(runs it in the background)
        //simplified version
//---------------------------------------------------------------------------------------
//jAVASCRIPT ENGINE AND RUNTIME
    //every browers have its own javascript engine - most popular is googles V8 that also runs node JS
    //components and how it work 
        //call stack - is where the code is actully executed
        //HEAP - is an unstructured memeory pool of all the object application needs
    //how is it compiledto machine code - more later
        //SIDE NOTE COMP SCIENCE
            //difference between COMPILATION and INTERPRETATION
        //all programs turned to machine code 2 ways to do this 
        // COMPILATION -  1st built machine code file then executed
        // INTERPRETATION - uses interpreter and executs code line by line (turning to machine code happends just before executing and not ahead of time)
            //interprated languges are much slower (javascript used to be this now modernized uses a mix of both)
        //now javascript is whats called  JIT (Just-In-Time) compilation
            //compiles cod eto machine code then executes it right away (still 2 step built and execute but there is no portable machine code file and executinon happends immidiately)
    // 1st happend the parseing - reads the code and creat AST (abstract syntex tree)values takes not of key word and structures appropriatly
    // 2nd is compilation turn the javascript to machine code 
    // 3rd executs code it right away - htis hapends in the call stack
        //javascript optimizez as it runs (goes from compilation to executuion to optimization back to compilation and continues to llop tell fully optimized)
            // javascript to improve speed start executin is a sense with a rough draft gets it working right away 
                //and as it get the application going it continues to optimize this way become more efficient as it runs
                    //as optimized code comes in the previuos code is replaced wtih the more optimized version of same code (without even stoippping the execution)
        //now different engines do this in slightly different ways 
    //Runtime - like a big box or container holding all things needed to run our applications
        //without engin there is no runtime and no javascript (enign e is not enough on its own also ned web api's)
        //web apis being things like the DOM timers fatche api ect.. (functionalities provided to the engine/not apart of it simply acces to them)
            //also containain a CALL BACK QUE holding event like click ect..
                //go from call back que to the call stack to them be ezecuted (this is the event loop)
                    //from call back que to the call stack/ clear call stack then again pull from que to execute thats the event loop(non blocking)
            //important to note that javascript can also exist outside of the brower like NODE JS (difference being wont have acces to the browers provided functionalities)
//HOW JAVASCRIPT IS EXECUTED - 
    // 1st global execution context is exected (top-level code aka code that is not inside of any function) also akak funcitno dont run unless caleed turning it in to top level code
    //  what is global execution context - insesnse enviroment where a peice of javascript is executed continer stores all data neede to run siad code
      // in any javscript application there is always only one glabla execution context
      //now that there is enviromanet to execute it does so
        //for each funciton ran a new execution context is created containing all data neede to run said funciton an methods(this makes up the call stack)
    //Whats Inside of a Execution Context?
        // variable enviroment holds all varibles and funciton declarations as well as argument objects values passed in (wether inside or outside the funtion itself)
            //also contianes the scope chain as well as keeping track of objects use using the this keyword
        //note that arrow funcitons dont have argum,ent object nor do they contain the this keyword fucntiality
    //for functions value is the literal code that makes it up not the values it produces sense those are unknow until the function is called
    //how does its know what order to execute and how will it keep track?
        //awnser is the call stack / like a ticket or take a number lline. executes removes from stack then get working on the next one and so forth
    //say this call stack [glabal, fucniton, nested function, and so forth] call stack will pull all values needed to then execute the global 
        //like var set to a function/ well to run global we need to first run funtion to the get value that then is used in other funtion to get other valkue and so on till we have everything we need to  now run the global
            // previuos fucntion in call stack go on puase till values needed are pulled then works its way back down i call stack till global and donzo
                //it does this becuase of the single thread - work logically 
            //global is not pooped off till the whole application is done /closed like brower anor applicaiton being closed shut down only then does the global pop off the call stack
//---------------------------------------------------------------------------------------
//SCOPE AND THE SCOPE CHAIN - controls haw are variables are orginized and accesed
    //where do they "live" and how are they accessed
        //lexical scoping is based on the placements of funcitons and code blocks
            //scope dependent as to where the varibles we decleared
        //differcnce between scpoe and scop enviroment?
            //scope varies from global to fucntion to block scope each different 
                //we have region scope meaning - where a varicble can be accesed and accesed from
            //global - this is top level code variables decleared outside of any functions or block meaning they can be accesed and called by all other functions or block anyone can accese varibales values 
            //function - (also called local scope) meaning variables declared withing the function can only be accesed within that function aka that variable only exist wihtin the funciton / can not bae acceseed elsewhere
            //block  -  (anything within the {curly braces} and only for varible decvlared with LET and CONST) similar to funciton varible only exist and can be accesed withih the block itself
                //(let and const are block scoped dose not apply to var, var only funbction scope) NOTE that blcoks scope also applies to functions fucntions declaared within boock only acceseble within that block
                    //can ahve a blcok scope within a function and vice varsa function in block scope
            //inner can always accese outside but not the other way around / looks outsidescope for variable if not within the current scope called - (varible look up) can only look up
            //let and const are block scoped {} / var is only funciton scoped
        //Difference between the call stack and scope chain
            //scope chain has nothing too do with the execution context aka order of execution, the order of execution has nothing to do with what varibles are accesible
                //functuion may call other but this dose not allow the functin called to have accese to varibles declared within the first function
//---------------------------------------------------------------------------------------

























