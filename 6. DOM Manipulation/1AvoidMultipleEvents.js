// Less optimized
// let myDiv = document.createElement('div');

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para '+i;

//     newElement.addEventListener('click',function(event){
//         console.log('I have clicked on the para');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// Here the issue is that we lost the individuality each para graph
// Because the event listener is appilied on the whole div
let myDiv = document.createElement('div');

function paraStatus(event){
    console.log('I have clicked on the para');
}

myDiv.addEventListener('click',paraStatus);

for(let i=1;i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para '+i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

// The issue of individuality can be solved with the help of .target function
