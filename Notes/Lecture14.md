# What is a Callback function in Javascript?
Function are first class in js : you can take a function and pass it into a function and when we do so, this function which we pass into another function is known as Callback Function.
Why this y function is called callback function. its like you call this function sometime else in your code, if we pass this y into x now it is upto x when to call this y. thats like this function y is called back later in the code.

# Javascript is a synchronous and single-threaded language
this callback function gives us access to asynchronous world 
Due to callback, we can do async things inside javascript
with the use of settimeout, we js dont wait for anyone, thus provides us with asynchronous.
its like we gave this callback to the settimeout and it gets executed sometime else.

# Blocking the main thread
Javascript has only one call stack and we can call it the main thread, whatever is executed on the page, is executed through the call stack only.
if any operation blocks the call stack that is blocking the main thread, if x function has some operation which takes 20sec to operated for that time call stack is blocked, i.e. for these cases we use async operations like settimeout

# Power of Callbacks?
without passing of functions into another function there will be no callbacks -> no settimeout -> no async

# Deep about Event Listeners
# Closures demo with Event Listeners
# Scope Demo with Event Listeners
# Garbage Collection & removeEventlisteners
Why do we need to remove eventlisteners, eventlisteners are heavy, i.e. it takes memory, whenever u attach a eventlistener it forms a closure, thats why we need to remove
when we remove this EL, all these variables in closure will be garbage collected