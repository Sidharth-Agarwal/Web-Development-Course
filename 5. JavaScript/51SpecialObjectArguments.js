function sum(a,b){
    console.log(arguments);
    return a+b;
}

let ans = sum(1,2,3,4,5);
console.log(ans);
// This creates an object of all the arguments
// Dynamic Functions
function sum2(a,b){
    let total = 0;

    for(let value of arguments){
        total += value;
    }

    return total;
}

console.log(sum2(1,2,3,4,5,6));