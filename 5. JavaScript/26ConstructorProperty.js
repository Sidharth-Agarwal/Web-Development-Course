function CreateRectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('Drawing rectangle...!');
    }
}

// This is how the constructor function is made in JS
let rectangleObject = new CreateRectangle(4,5);

let rectangleNew = new Function(
    'len','bre',
    `this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('Drawing rectangle...!');
    }`
);

let rectangleObjectNew = new rectangleNew(10,11);
console.log(rectangleObjectNew);