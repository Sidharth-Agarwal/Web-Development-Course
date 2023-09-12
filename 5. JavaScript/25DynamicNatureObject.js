function CreateRectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log('Drawing rectangle...!');
    }
}

let rectangleObject = new CreateRectangle();
rectangleObject.color = 'yellow';
delete rectangleObject.color;