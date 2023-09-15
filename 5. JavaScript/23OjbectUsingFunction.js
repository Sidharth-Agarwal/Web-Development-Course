// Factory Function
function createRectangle() {
    let rectangle = {
        length: 1,
        breadth: 2,
    
        draw:function() {
            console.log('drawing a rectangle');
        }
    };

    return rectangle
}

let a = createRectangle();

console.log(a.breadth);
a.draw();

// function createRectangle() {
//     return rectangle = {
//         length: 1,
//         breadth: 2,
    
//         draw() {
//             console.log('drawing a rectangle');
//         }
//     };
// }

// function createRectangle(length,breadth) {
//     let rectangle = {
//         length: length,
//         breadth: breadth,
    
//         draw:function() {
//             console.log('drawing a rectangle');
//         }
//     };

//     return rectangle
// }

// let a = createRectangle(5,4);

// console.log(a.breadth);
// a.draw();

// function createRectangle(length,breadth) {
//     let rectangle = {
//         length,
//         breadth,
    
//         draw:function() {
//             console.log('drawing a rectangle');
//         }
//     };

//     return rectangle
// }

// let a = createRectangle(2,3);

// console.log(a.breadth);
// a.draw();