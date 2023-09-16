// Functions are the block of code which fulfills specific tasks

run();

// Function declaration
function run(){
    console.log("Runing")
}

run();

// Doesn't matter the position of function is will run
// This concept is called HOISTING -
// Automatically moving functions declaration to the top of file

// stand();

// Named Function assignment
let stand = function walk(){
    console.log("Walking");
}

stand();
// HOISTING works only with function declaration not with function assignment

let jump = stand;
jump();

// Annonymous function assignment
let stand2 = function (){
    console.log("Walking2");
}

stand2();