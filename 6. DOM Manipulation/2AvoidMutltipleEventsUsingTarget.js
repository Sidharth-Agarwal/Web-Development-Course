let myDiv = document.createElement('div');

function paraStatus(event){
    console.log('Para' + event.target.textContent);
}

myDiv.addEventListener('click',paraStatus);

for(let i=1;i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para '+i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);