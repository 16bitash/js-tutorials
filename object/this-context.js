const obj1 = {
    firstName: "John",

    printName: function() {
        console.log(this.firstName);
    }
}

const obj2 = {
    firstName: "Alice",
}

obj2.__proto__ = obj1;

obj1.printName();

obj2.printName();
