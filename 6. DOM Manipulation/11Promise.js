let wadaa1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('settimeout1 started');
    },2000);
    resolve(true);
})

wadaa1.then(() => {
    let wadaa2 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('settimeout2 started');
        },3000);
        resolve("wadaa 2 resolved");
    })
    return wadaa2;
}).then((value) => console.log(value));