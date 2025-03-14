# Undefined VS not defined

Undefined is a special keyword in javascript and it is not there in other languages.

Javascript code is executed in different way, a global execution context is created, so thats when undefined comes into the picture.

It reserves memory for variables even before their execution and assigns them as undefined.
it acts a placeholder, so undefined is taking memory,thats very different than not defined.
no memory allocation to not defined.

var a;
a === undefined

Javascript is a loosely typed language, this means it does not attaches its variables to any specific data type
var s = 10;
s = true;
Also known as weakly typed language

Although, its not a good practice to assign undefined to any variable
a=undefined