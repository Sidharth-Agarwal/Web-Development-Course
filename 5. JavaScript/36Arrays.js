// This was for the example of primitives

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