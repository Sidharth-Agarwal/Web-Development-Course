// Constructor Function
// While making an object using constructor function - Pascal Notation is followed
// Pascal Notation -> First letter of every word is capital
// Constructor function is type of function which initialize/define properties/methods
// Here there is no need to return
function CreateRectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log('Drawing rectangle...!');
    }
}

let rectangleObject = new CreateRectangle();

// function CreateRectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log('Drawing rectangle...!');
//     }
// }

// let rectangleObject = new Rectangle(4,5);