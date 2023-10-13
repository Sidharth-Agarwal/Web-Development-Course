let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event){
    if(event.target.nodeName == 'SPAN'){
        console.log('You have clikced on span ' + event.target.textContent);
    }
});