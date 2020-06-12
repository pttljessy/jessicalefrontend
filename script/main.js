// // #13 - Else If statement 

// var youLikeMeat = true;
// var myNum = 8;

// if (youLikeMeat) {

//     document.write("you like meat")

// } else {
//     document.write("you hate meat")
// }


// var myAge = 24;

// if (myAge > 30){
//     document.write("you are over 30");
// } else if (myAge > 20) {
//     document.write("you are over 20");
// } else if (myAge > 10) {
//     document.write("you are over 10");
// }


// // #14 - Comparison Operators 
// if (condition) {
//     // code here 
// // >
// // <
// // =>
// // =<
// // ==
// // ===
// // !=
// // !===
// }


// // #15 - Logical operators
// var myAge = 25; 

// if (myAge < 18 || myAge > 30 || myAge == 25) {

//     document.write("You aint coming!");

// } else {
//     document.write("You can come, you cool dude");
// }

// // #16 - While Loops
// var age = 5
// while (age < 10) {
//     console.log("Your age is less than 10");
//     // add 1 to the age every time while loop runs
//     age++; 
// } 
// document.write("You are now over 10");


// // #17 - For Loops
// // example1
// for (age = 5; age < 10; age++) {
//     console.log("Your age is less than 10");

// } 
// document.write("You are now over 10");

// // example2
// var links = document.getElementsByTagName("a");

// for (i = 1; i <= links.length; i++) {
//     console.log("This is link number" + i);
// }
// document.write("All links now looped");

// // note: i < links.length => This is link number6 not appear in the console 
// // note: i <= links.length => This is link number5 will appear in the console


// // #18 Break & Continue
// for (i = 0l i < 10, i++) {
//     console.log (i);
// }


// // #19 Practice examples using Loops to cycle through elements on a page (here is link) and do things with them (change them in HTML).
// //set a variable named link which is an array holds all of the anchor tags on the page
// var links = document.getElementsByTagName("a");

// //for loop
// for (i = 0; i < links.length; i++) {
//     links[i].className = "link-" + i;
// }

// Why we have to assign class to the link?

// //#20 - Functions
// // objective: group our code together in logical sections so we can know where to find and re-use
// //create a function named getAverage with 2 values a & b. 
// function getAverage (a,b) {

//     var average = (a + b) / 2; //local variable with local scope (that can be used only in function getAverage)
//     console.log(average);
//     return average;

// }
// // for this code to run, we need to call it 
// // getAverage(7,8)

// //or we can create a variable for the result
// var myResult = getAverage(7,11) // global variable that can be anywhere, used outside the function

// function logResult() {
//     console.log("The average is " + myResult + " inside the function");
// }
// logResult();

// //#22 - Numbers
// var a = "7";
// var b = 5;

// console.log(a + b);
// console.log(typeof (a + b));

// console.log(Math.round(7.3));
// console.log(Math.floor(7.3));
// console.log(Math.ceil(7.3));
// console.log(Math.max(7, 4, 9, 8));
// console.log(Math.PI)

// var a = "hello";
// var b = 5;

// //double negative of 'if a is a number'
// if (!isNaN(a)) {

//     console.log("that aint event a number, thickie")
// } else {
//     console.log("meaning of life is " + (a * b))
// }

// // #25 - String 
// var myString = 'I\'m a "fun" string';

// console.log(myString);
// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());


// var string1 = "abc";
// var string2 = "ABC";
// console.log(string1.toLowerCase === string2.toLowerCase);

// var str = "hello, world";

// console.log(str)

// var str2 = str.slice(2,9);

// console.log(str2)

// var str3 = str.slice(2);

// console.log(str3)

// // #26Arrays
// // var tags = "meat, ham, salami, pork, beef, chicken"


// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] = "hello";

// var myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver = "Jess";
// myCar.drive = function (){console.log("now driving");};

// myCar.drive();

// var myCar2 = {maxSpeed: 70, driver: "Net Ninja", drive: function (){console.log("now driving again");}};

// console.log(myCar2.maxSpeed);
// myCar2.drive();


// //THIS keyword

// // console.log(this);

// var myCar2 = {

//     maxSpeed: 70,
//     driver: "Net Ninja",
//     drive: function(speed, time) {
//         console.log(speed * time);
//     },
//     test: function() {
//         console.log(this);
//     }
// };


// var myCar3 = {

//     maxSpeed: 70,
//     driver: "Net Ninja",
//     drive: function(speed, time) {
//         console.log(speed * time);
//     },
//     test: function() {
//         console.log(this);
//     }
// };


// myCar2.test();
// console.log(myCar2.maxSpeed);
// myCar2.drive(50, 3);

// // #30 - Constructor Functions
// var myCar = {

//     maxSpeed: 70,
//     driver: "Net Ninja",
//     drive: function(speed, time) {
//         console.log(speed * time);
//     },
//     test: function() {
//         console.log(this);
//     }
// };

// var Car = function(maxSpeed, driver) {

//     this.maxSpeed = maxSpeed; 
// }

// var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
// var myFutureDate = new Date(2545, 0,31, 10, 30, 15);

// console.log(myPastDate);
// console.log(myFutureDate);


// // Date  Object

// Several ways to create a Date object
// let today = new Date()
// let birthday = new Date('December 17, 1995 03:24:00')
// let birthday = new Date('1995-12-17T03:24:00')
// let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
// let birthday = new Date(1995, 11, 17, 3, 24, 0)

// console.log(today);
// console.log(birthday);

// // Two digit years map to 1900 – 1999
// let date = new Date(98, 1)  // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// // Deprecated method; 98 maps to 1998 here as well
// date.setYear(98)            // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// date.setFullYear(98)        // Sat Feb 01 0098 00:00:00 GMT+0000 (BST) 

// console.log(date);


// // Calculating elapsed time
// // Using Date objects
// let startTime = Date.now()

// // The event to time goes here:
// doSomethingForALongTime()
// let endTime = Date.now()
// let elapsed = endTime - startTime // elapsed time in milliseconds

// // #33 - traverse the DOM

// //Go in and grab nodes, pass the parameter class name = content inside (" ") 
// //way 1: get elements by class name
// document.getElementsByClassName("content");

// // Store content in variable
// var myContentDivs = document.getElementsByClassName("content");

// // call variable
// myContentDivs

// // now can call properties/methods in this variable myContentDivs

// // way 2: get elements by tag name
// var myH2 = myContentDivs[1].getElementsByTagName("h2");

// myH2

// myH2[0].innerHTML = "yo ninjas";


// // JS Events 

// // #40 - The onclick event

//     var content = document.getElementById("content");
//     var button = document.getElementById("show-more");

//     button.onclick = function () {
//         //give the content the className == open; because classname #content.open in CSS gives max height (expanding the box)
//         if (content.className == "open") {
//             //shrink the box
//             //give the empty string ""
//             content.className = "";
//             button.innerHTML = "Show More";

//         } else {
//             //expand the box by giving the classname #content.open 
//             content.className = "open";
//             button.innerHTML = "Show Less";
//         }
//     };

// // Example 1: Display `showMessage` after 3 seconds, using setTimeout only appear ONCE.
// var myMessage = document.getElementById("message");

// function showMessage(){
//     myMessage.className = "show";

// }
// setTimeout(showMessage, 3000);



// // Example 2: Change color of the box after 3 seconds using setInterval repeat forever
// var colourChanger = document.getElementById("colour-changer");
// var colours = ["red","blue","green","pink"];
// var counter = 0;

// function changeColour(){
    
//     if(counter >= colours.length){
//         counter = 0;
//     }

//     colourChanger.style.background = colours[counter];
//     counter++;
// }

// setInterval(changeColour, 3000);


// #43 - Access Form Elements

//put myForm in a variable
var myForm = document.forms.myForm;

//the message variable updates the user a failed error message if user hasn't entered the name, but click submit.
var message = document.getElementById("message");

//onsubmit event : event occurs when u click submit => comunicate with server 
myForm.onsubmit = function(){
    if (myForm.name.value == ""){
        message.innerHTML = "please enter a name";
        return false;
    } else{
        message.innerHTML = "";
        return true;
    }
};
   