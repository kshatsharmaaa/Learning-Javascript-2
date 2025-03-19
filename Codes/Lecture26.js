// "use strict";

// this is a global space

console.log(this); // window


// this inside a function

function myFunction() {
    console.log(this); // window - non strict, undefined - strict
}
myFunction(); 

// this in strict mode - (this substitution)



// this value depends on how this is called (window)
myFunction(); // undefined
// window.myFunction(); // window

// this inside a object's method
const obj = {
    a: 10,
    x: function() {
        console.log(this); // the value of this becomes object 
    }
}

obj.x(); // obj - a:10, x: function 

// call, apply, bind methods (sharing methods)

// if we want to share methods between objects

const student = {
    name: "John",
    age: 20,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
student.greet();

// share this method greet with student2
const student2 = {
    name: "Jane",
    age: 21,
}
student.greet.call(student2); // Hello, my name is Jane // inside that method, this is student2 object and student2.name is Jane (overriding the value of this inside greet method)

// this inside arrow function - they don't have their own this, they use the this value of the enclosing lexical  context
const obj2 = {
    a: 10,
    x: () => {
        console.log(this); // window // this is not obj2 but its lexical context (window)
    }
}
obj2.x(); // window


// this inside nested arrow function

const obj3 = {
    a: 10,
    x: function() {
        const y = () => {
            console.log(this); // obj3 - this is obj3 object (lexical context)
        }
        y();
    }
}
obj3.x(); // obj3

// this inside DOM --index.html



