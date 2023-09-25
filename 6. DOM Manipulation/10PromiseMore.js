let promise = new Promise(function(resolve,refuse){
    setTimeout(function(){
        console.log('I am inside promise');
    },5000)
    // return 2;
    // resolve(2233);
    reject(new Error('An error occured'));
});

// promise.then((value) => {console.log(value)});

// promise.catch((error) => {console.log("Received an error")});

promise.then((value) => {console.log(value)}, (error) => {console.log("Received an error")});

// let promise2 = new Promise(function(resolve,refuse){
//     setTimeout(function(){
//         console.log('I am inside promise');
//     },5000)
//     reject(new Error('Error occured!!!'))
// });

console.log('Pehla');