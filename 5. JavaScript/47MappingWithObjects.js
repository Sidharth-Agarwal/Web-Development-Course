let numbers = [1,2,-1,-2];

let filtered = numbers.filter(value => value>=0);

let items = filtered.map(function(num){
    let obj = {value : num};
    return obj;
});

console.log(items);

// let items2 = filtered.map(num => {value:num});
// console.log(items2);