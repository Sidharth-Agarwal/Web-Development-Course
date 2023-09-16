let arr = [1,2,3,4,5,6,7];

// Using for of loop
for(let value of arr){
    console.log(value);
}

// Using for each loop
arr.forEach(function(number){
    console.log(number);
});

// Arrow Function
arr.forEach(number => console.log(number));