// This was for the example of primitives

// Inserting Elements
let numbers = [1,4,5,7];
console.log(numbers);

// Inserting at the end
numbers.push(10);
console.log(numbers);

// Inserting in the beginning
numbers.unshift(-1);
console.log(numbers);

// Inserting in the middle
numbers.splice(2, 0, 'a','b','c','d');
console.log(numbers);

// Searching in the array
console.log(numbers.indexOf(4));
// This is not a good practice

// This is a good practice
console.log(numbers.includes(5));

// This is advanced search
console.log(numbers.indexOf(4,8));

// Remove Elements
let numbers2 = [1,2,3,4,5,6];

// Removing from end
numbers2.pop();
console.log(numbers2);

// Removing from start
numbers2.shift();
console.log(numbers2);

// Removing from the beginning
numbers2.splice(2,1);
console.log(numbers2);