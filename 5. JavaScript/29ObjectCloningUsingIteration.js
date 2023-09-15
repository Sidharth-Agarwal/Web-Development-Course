let scr = {
    a : 10,
    b : 20,
    c : 30
};

let dest = {};

for(let key in src){
    dest[key] = src[key];
}