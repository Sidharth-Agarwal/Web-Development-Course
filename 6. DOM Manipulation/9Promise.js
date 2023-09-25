// let promise = new Promise(function(resolve,refuse){
//     console.log('I am inside promise');
//     resolve(1998);
// })

let promise = new Promise(function(resolve,refuse){
    setTimeout(function(){
        console.log('I am inside promise');
    },5000)
    resolve(2233);
});

let promise2 = new Promise(function(resolve,refuse){
    setTimeout(function(){
        console.log('I am inside promise');
    },5000)
    reject(new Error('Error occured!!!'))
});

console.log('Pehla');