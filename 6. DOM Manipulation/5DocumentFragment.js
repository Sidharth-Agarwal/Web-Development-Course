const t1 = performance.now();

let fragment = document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment);

const t2 = performance.now();
console.log("This much of code took " + (t2-t1) + "ms");