# What is a block in JS?
- a block is defined by these curly braces
{
} 
this is a perfectly valid javascript code
Block is also known as compound statement
A block is used to combine multiple javascript statement into one group
We do this to use multiple statements where javascript expects only one satement
eg usage of if statement
if in itself doesnt have curly braces in its syntax

# What is a Blocked Scope?
- what all variables and functions we can access inside this block

# How hoisting works inside the block?
In source console of browser, int the block scope we get c and d(let and const) undefined and b is hoisted in the global scope (var)

# let & const are Blocked Scoped
This is why let and const are blocked scope
theyre stored in a separted memory space which is reserved for this block

# What is Shadowing in Javascript?
If you have a same name variable outside the block the variable(var) in the block shadows the outside variable.
even if we print it outside the block it shadows the outer declaration coz it modified  the value because they both are pointing to the same memory location.
But this is not the case in let, modification only works inside the block
one f is in the block scope and one f is in the script not even in the global
same for const
And in case of function the shadowing behaves in a similiar way

# Illegal Shadowing
shadow a let inside a block using var -> cannot redeclare blocked scope variable h -> error
but vice versa is true;

Block scope also follows lexical scope