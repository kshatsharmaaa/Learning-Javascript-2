# CRAZY JS INTERVIEW

# What is Closure?
A function along with its lexical environment bundled altogether forms a closure. Its like each and every function in javascript has access to its outer lexical environment that means access to the variables and functions present in the environment of its parents. Even when this function is executed in some other scope, its still remembers its outer lexical environment where it was originally present in the code.

# Example to demonstrate Closure
Inner function has access to this 'a' variable, so this inner function along with its lexical outer environment is known as a closure. The major part of closure is if i try to return this inner function from this function and try to access it somewherelse in the outer scope also, it still remembers what the value of a was.
outer()() - two parenthesis is for calling the inner function
outer() - this will return the inner function
Alternate way: 
var close = outer();
close();

# What if we declare var just below the inner function instead of above?
it will still form a closure, it will work in the same way

# What if we use let instead of var?
Considering let is a block scoped, it cannot be accessed outside, but this inner function will work the same way, it still forms a closure.

# What if we have a parameter in the outer function?
It will work the same way and print the a and b value, coz b is also a part of the outer environment. inner forms a closure with b also.

# What if the outer function is also nested inside the inner function?
It will again form the closure and has access to its var and funcs, and will work the same way.

# Advantages of Closure
same as usage of closure from last lecture
+ data hiding and encapsulation

# Disadvantages of Closure
There could be overconsumption of memory
Those closed over variables are not garbage collected, accumulating a lot of memory.
If not handled properly, it can also lead to memory leaks.
It can also freeze the browser, if not handled properly.