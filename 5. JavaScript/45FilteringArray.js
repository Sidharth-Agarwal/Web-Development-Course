let numbers = [1,2,3,4,5,-1,-2];

let filterd = numbers.filter(function(value){
    return value>=0;
});
console.log(filterd);