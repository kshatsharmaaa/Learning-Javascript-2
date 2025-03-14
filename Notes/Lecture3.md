# Hoisting

function declaration k pehle usko call krenge toh chal jayega
but no so in case of variables

this is beacuse in memory phase of execution context whole function code is defined
console.log(x) now says undefined

if we remove the variable line x=7
it will say not defined because we dont have any memory reserved for x

Hoisting is the phenomenon in js by which we can access these variables and functions even before we initialized them.

Now suppose we have getName2 as the arrow function
now if we call getName2 even before initialization, it will throw arror as getName2 is not a function coz getName as a arrow function acts as a variable
so it will allocate undefined to getName2() just like var x

Only in case of proper function declaration it'll store whole function in memory component