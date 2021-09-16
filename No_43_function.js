// console.log("This is the Function That we Study in JS");

// To Declre Function in JS we use the function keyword
// Synatx:- 
// function function_name(function argruments or parameters)
// {

// Write Your cdoe

// }

function greet(name, greettext = "Welcom to this Java-script Function") {
    // Making the Function
    // Here we add bydefalut argument and that is the greettext
    // In function call if system not found any other argument it execut greettext automatically
    // that we show when we call name2 and name3 in function

    console.log(name + " " + "Good Morning");
    console.log(name + " " + greettext);

    // This function is return nothing
}

let name = "Ujjwal";
let name1 = "Rahul";
let name2 = "Hermin";
let name3 = "Ayushman";
greettext = "Let's learn more about function"

greet(name, greettext);
//Call The function

greet(name1, greettext);
//Call The function

greet(name2);
//Call The function

greet(name3);
//Call The function


function sum(a, b, c) {

    return a + b + c;
    // When compiler found return in function after that we can't any thing insert in the functions

}

let sum1 = sum(3,4,5);
console.log(sum1);
