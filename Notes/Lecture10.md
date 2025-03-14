# Closures ?
see example js tries to find a in func a and then to its lexial parent x and prints the value -> this is what closure is.
Closure means a function bundled together along with its lexical environment/scope

In javascript, we can assign variables to a function, we can pass one function into another function call and we can also return a function to the function, this is where closure comes into the picture.
/// return y

Once the function y is returned outside x, it no longer resides inside x.
functions even when theyre returned they still maintains their lexical scope, z still remembers the refernce to a.

Some cool developers dont write return y, instead they write return in beginning of the function

# Uses of Closures:
- Module Design Pattern
- Currying
- Functions like once // it only runs once
- memoize
- maintaining state in async world
- setTimeouts
- Iterators
- and many more...