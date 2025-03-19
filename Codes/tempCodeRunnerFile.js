const student = {
    name: "John",
    age: 20,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
student.greet();