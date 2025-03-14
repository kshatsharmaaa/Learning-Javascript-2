{
    // Compount statement
    var a = 10;
    console.log(a);
}

// if(true) // syntaxError

if(true) true;

// use of block
if(true) {
    // Compount statement
    var a = 10;
    console.log(a);
}

// Blocked Scope hoisting
{
    var b = 1;
    let c = 2;
    const d = 3;
    console.log(b); // print 1
    console.log(c); // print 2
    console.log(d); // print 3
}

console.log(b); // print 1
console.log(c); // error bcoz of blocked scope
console.log(d); // same as above

// Shadowing
var e = 5;
{
    var e = 6;
    console.log(e); // prints 6
}
console.log(e); // prints 6

// in case of let
let f=100;
{
    let f = 700;
    console.log(f); // prints 700
}
console.log(f); // prints 100

// in case of functions
const g = 1000;
function x() {
    const g = 30;
    console.log(g);
}
x(); // 30
console.log(g); // 1000

// Illegal Shadowing
/* error
 let h = 35465;
{
    var h = 25;
}
*/

// vice versa
var h = 35465;
{
    let h = 25;
}

// lexical block scope
const i = 20;
{
    const i = 100;
    {
        const i = 200;
        console.log(i); // 200
    }
}