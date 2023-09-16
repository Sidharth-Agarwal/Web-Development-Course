let first = [1,2,3];
let second = [4,5,6];
let combined = [...first,'a',...second,'b'];
console.log(combined);

// Copying
let another = [...combined];
console.log(another);