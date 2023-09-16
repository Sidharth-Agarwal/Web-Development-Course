let numbers = [1,2,-1,-2];

// let filtered = numbers.filter(value => value>=0);

// This is the example of chaining
let items = numbers.filter(value => value>=0).map(function(num){
    let obj = {value : num};
    return obj;
});

console.log(items);