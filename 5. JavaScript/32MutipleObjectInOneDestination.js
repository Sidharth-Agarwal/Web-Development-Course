let src = {
    a : 10,
    b : 20,
    c : 30
};

let src2 = {value:25};

let dest = Object.assign({}, src, src2);

console.log(dest);