async function utility(){
    let delhiMausam = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Delhi me bhot garmi hai!!!");
        },1000);
    });
    
    let hydrabadMausam = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Hydrabad me bhot thand hai!!!");
        },5000);
    });

    let dM = delhiMausam;
    let hM = hydrabadMausam;
    
    return [dM,hM];
}