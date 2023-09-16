// This creates an array of all the agruments
function sum(a, value, ...args){
    console.log(args);
}
// We can't right anything after ...args
sum(1,2,3,4,5,6);