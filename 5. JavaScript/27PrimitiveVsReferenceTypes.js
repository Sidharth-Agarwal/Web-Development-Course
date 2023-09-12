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

// Primitive Types
let e = 10;

function inc(e)
{
    e++;
}

inc(e);
console.log(e);

// Reference Types
let f = {value:10};

function inc2(f)
{
    f.value++;
}

inc2(f);
console.log(f.value);