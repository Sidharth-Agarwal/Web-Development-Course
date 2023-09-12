// Primitive Types
let a = 10;
let b = a;

a++;

console.log(a);
console.log(b);

// Reference Types
let c = {value:10};
let d = c;

c.value++;

console.log(c.value);
console.log(d.value);

let e = 10;

function inc(e)
{
    e++;
}

inc(e);
console.log(e);