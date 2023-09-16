// Combining Arrays
let first = [1,2,3];
let second = [3,4,5];

let combined = first.concat(second);
console.log(combined);

// Slicing Arrays
let sliced = combined.slice(2,3);
console.log(sliced);
// In slicing 
// .slicing(x,y);
// x -> start index
// y -> end index
// x in included in the range while y is excludede from the range

let marks = [10,20,30,40,50,60,70,80];
let sliced2 = marks.slice(2);
console.log(sliced2);

// Full Slicing
let numbers = [1,2,3,4,5,6,7];
let fullSlicing = numbers.slice();
console.log(fullSlicing);