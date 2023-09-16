// Mapping Each Element of Array to Something Else
let numbers = [1,2,3,4,5];

let items = numbers.map(function(value){
    return 'student_no' + value;
});

console.log(items);

let items2 = numbers.map(value => 'student_no' + value);

console.log(items2);