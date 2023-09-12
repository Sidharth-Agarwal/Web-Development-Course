let rectangle = {
    length:2,
    breadth:4
}

// For-in loop
for(let key in rectangle){
    // Keys are reflected through key variable
    // Values are reflected through rectangle[key] variable
    console.log(key,rectangle[key]);
}