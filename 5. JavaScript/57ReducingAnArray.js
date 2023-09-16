let arr = [1,2,3,4,5];

let total = 0;

for(let value of arr){
    total = total+value;
}

console.log(total);

let totalSum = arr.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
console.log(totalSum);