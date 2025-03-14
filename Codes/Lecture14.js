// What is a Callback function in Javascript?
function x(y) {
    console.log("x"); 
    y();
}
x(function y() {
    // this function y over here is the callback function
    console.log("y");
})

// how it is used in asynchronous task ->setTimeout(takes a callback function)
setTimeout(function () {
    console.log("timer");
}, 5000);
// Javascript is a synchronous and single-threaded language
// Blocking the main thread
// Power of Callbacks?
// Deep about Event Listeners
// attch a click handler to the button
document.getElementById("clickMe").addEventListener("click", function xyz(){// this function is a callback function -> jab click operation hoga toh ye function callstack me ajaega
    console.log("Button Clicked");
})
// Closures demo with Event Listeners
// whenever we click the button it should increase the count
let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz(){// this function is a callback function -> jab click operation hoga toh ye function callstack me ajaega
    console.log("Button Clicked", ++count);
})
// but using a global variable is not a good solution
// solution -> use closure means wrap this inside a function
function attach() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){// this function is a callback function -> jab click operation hoga toh ye function callstack me ajaega
        console.log("Button Clicked", ++count);
    })// now this callback function is forming a closure with its  outer scope
}
attach();
// Scope Demo with Event Listeners
// Garbage Collection & removeEventlisteners





