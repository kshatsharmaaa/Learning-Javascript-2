//Example to demonstrate closure
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
outer()(); //10

// parameter
function outer(b) {
    var a = 10;
    function inner() {
        console.log(a,b);
    }
    return inner;
}
var close = outer("hello");
close();

// nested++
function outest(){
    var c = 20;
    function outer(b) {
        var a = 10; // if we do not have this a, the inner func will refer to the global variable's a
        function inner() {
            console.log(a,b,c);
        }
        return inner;
    }
    return outer;
}
let a = 100; //conflicting name -> doesnt matter the inner function still refers to the outer env var a, and this is different variable
var close = outest()("helloworld");
close();

// data hiding & encapsulation

function counter(){
    var count =0;
    return function increamentCounter() {
        count++;
        console.log(count);
    }
}
// console.log(count); //error cannot access
var counter1 = counter();
counter1();
counter1();

// Scale the code for decrement also
// using constructor function

function Counter() {
    var count = 0;
    this.increamentCounter = function (){
        count++;
        console.log(count);
    }
    this.decreamentCounter = function (){
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.increamentCounter(); //1
counter1.increamentCounter(); //2
counter1.decreamentCounter(); //1