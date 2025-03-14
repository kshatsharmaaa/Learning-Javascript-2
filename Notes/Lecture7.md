# The Scope Chain

Scope in javscript is directly related to lexical environment.

Can we access this b inside a? - Yes
vice versa is not true;
if b is defined under a function and cosole.log(b) is outside that function it'll return not defined.

Scope - where you can access a specific variable in your code
two aspects:
-where can i access this variable b
-is b inside the scope of a function

Whenever an execution context is created, a lexical environment is also created, it is the local memory along with the lexical environment of its parent

lexical means in heirarchy
console.log is lexically inside a function
a is lexically inside the global scope

lexical env of GEC's parent is NULL

b was first searched in the local memory then its parent lexical env and then paarent of that lexical env, so this way of finding is known as Scope Chain

Scope chain is nothing but this chain of lexical environments and these parent references


