export default class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}


// function Person(id, name) {
//     this.id = id;
//     this.name = name;
// }

// Person.prototype.getName = function() {
//     return this.name;
// }
