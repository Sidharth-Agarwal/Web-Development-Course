// First Method
// assigning = []
let numbers = [1,2,3,4,5,6];
let numbers2 = numbers
numbers = [];
// There is an issue in this method
console.log(numbers);
console.log(numbers2);

// Second Method
// Using .length = 0;
let numbers3 = [1,2,3,4,5,6];
let numbers4 = numbers3;
numbers3.length = 0;
console.log(numbers3);
console.log(numbers4);
// This is the best practice

// Third Method
// Using splice method
let numbers5 = [1,2,3,4,5,6];
let numbers6 = numbers5;
numbers5.splice(0,numbers5.length);
console.log(numbers5);
console.log(numbers6);