let rectangle = {
    length:2,
    breadth:4
};

for(let key of Object.keys(rectangle)){
    console.log(key);
}

for(let key of Object.entries(rectangle)){
    console.log(key);
}