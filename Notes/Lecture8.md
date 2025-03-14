# Are let & const declarations hoisted?

Yes, let and const declarations are hoisted in JS, but they're hoisted very differently than the var declarations
These are in the temporal dead zone for the time being.

cant access let deined before intialization

in case of var a is alloted memory before execution in global space but in case of let it is assigned memory in some script(different memory space than global)
This is what is hoisting in let

# What is a Temporal Dead Zone?

Temporal dead zone is the time between since when this let variable was hoisted and till it is initialized some value.

# SyntaxError vs ReferenceError vs TypeError? 

Thats why before initialization we try to acces let variable we get reference error : cannot access before initialization because it is in temporal dead zone rn

They can only be accesed once some value is initialised to them.

If we try to log x and x is no where in our code it will give reference error: x is not defined coz js engine is not able to find any refernce of this x in the current scope. x was not there, so there was no reference

window.b -> give value of b -> b is attached to the window object
but in case of a, it wont be attached to window object, it is allocaed to the saperate storage
window.a -> undefined
same for this 

we also cant do redeclaration of let 
let a = 10;
let a = 100;
it will give us the syntaxError, it wont even execute a single line of code

const is even more strict than let
cannot do initialize first declare later in case of const

but if we try to change the value of const var late on it gives us the typeError