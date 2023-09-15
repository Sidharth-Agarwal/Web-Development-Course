// This for the example of reference types
let courses = [{no:1,naam:'Sidharth'},{no:2,naam:'Agarwal'}];
console.log(courses);

// -> console.log(courses.indexOf({no:1,naam:'Sidharth'}));
// -> console.log(courses.includes({no:1,naam:'Sidharth'}));
// The output for this will show us that the object doesn't exist in the array
// But that is false, this is due the reason that the objects are different at each place
// To implement this we use callback functions

let course = courses.find(function(course){
    return course.naam=='Sidharth';
})

console.log(course);