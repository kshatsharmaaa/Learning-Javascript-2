# This keyword

It works differently in different scenarios.

# this is a global space

this is window object in browser. this keyword in gloabal space will always have the value of global object. javascript not just runs on the browser, can run on smartwatch, mobile. wherever js runs there's a js runtime env. that can be diff. inside browser global obj is diff, inside nodejs globalobject is diff... and whatever that global object is this will represent that. In case of browsers this global object is window. If we go inside the nodejs this global object is global.

# this inside a function

 value of this keyword inside a function is undefined but becasue of this substitution so the value becomes = global object only in non strict mode.

# this in strict mode - (this substitution)

this keyword works differently in strict mode and non strict mode. "use strict". 
If the value of this is undefined or null, this keyword will be replaced with global object.(only in non strict mode)          

# this value depends on how this is called (window)

# this inside a object's method
if u make a function as part of object, it is known as method.

# call apply bind methods (sharing methods)

# this inside arrow function

# this inside nested arrow function

# this inside DOM