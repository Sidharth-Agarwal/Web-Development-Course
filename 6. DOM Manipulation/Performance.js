// Addoing 100 paras
const t1 = performance.now();

for(let i=1;i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    document.body.appendChild(newElement);
}

const t2 = performance.now();
console.log("This much of code took " + (t2-t1) + "ms");


const t3 = performance.now();
// Optimized code
let myDiv = document.createElement('div');

for(let i=1;i<=100;i++){
    let element = document.createElement('p');
    element.textContent = 'This is para ' + i;

    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);

const t4 = performance.now();
console.log("This much of code took " + (t4-t3) + "ms");