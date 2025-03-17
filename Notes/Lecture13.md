# Diving Deep into Functions

# WHat is an Anonymous Function?
Function without a name is an anonymous function.
Doesnt have their own identity
This will result out to be a syntax error
It looks like a function statement but it has no name
but a function statement should have a name so this is a invalid syntax
Use : these are used in a place where functions are used as a value/parameters
you can see in function expression after var b = there is a anonymous function

# Function Statement VS Function Expression VS Function Declaration?
# Function Statement:
function keyword with a name(){
    this way of creatng a function is known as function statement
}

# Function Expression:
We can assign functions to a variable also, function acts like a value. In many programming languages youcant do this

Major difference betwwen these two is hoisting
If we call them before even creating them b will throw an error. Thatis the diff btw a func statement and a func expression, during the memory creation phase a is treated like a function and whole function code is stored and b is treated like a variable only, it is assigned undefined initially, till its reaches its original code line. so if we call b before creating them value b is undefined so it cant call b and throw an error.

# Function Declaration: 
aka FUnction Statement

# Named Function Expression: 
use of named fucntion instead of anonymous function. WEIRD!!!
but if we call that named function solely we'll get an error beacuse that xyz is not created in the outer scope but it is created as a local variable

# Parameter VS Arguments
parameter local variable in the function scope, you cannot access this in the global scope
arguments are passed in function call
Labels/Identifiers which gets those argument values are paramters

# What are first class functions in javascript?
We can also pass functions as values to a fucntion 
We can also return anonumous function from a function
The ability to use functions as values and can be passed to functions as arguments and returned from the function is known as first class functions
works the same way in case of let and const also

# Arrow Functions
Came up as a part of ES6