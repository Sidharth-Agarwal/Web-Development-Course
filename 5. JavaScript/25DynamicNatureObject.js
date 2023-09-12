function CreateRectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('Drawing rectangle...!');
    }
}

let rectangleObject = new Rectangle(4,5);
rectangleObject.color = 'yellow';
delete rectangleObject.color;