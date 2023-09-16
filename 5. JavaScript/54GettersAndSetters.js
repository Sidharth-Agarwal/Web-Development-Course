let person = {
    fName : 'Sidharth',
    lName : 'Agarwal',
    
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }

console.log(person.fullName);

// Getter and Setter
// getter -> access properties
// setter -> change or mutate properties