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