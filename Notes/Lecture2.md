# What happens when you run a javascript program ?
- An execution context is created.

# How this code works?

When you run this whole code, a global exectuion context is creadted

In the first phase js will allocate memory to all the variable and functions

Memory                      |       Code
--------------------------------------------------------------------------
n: undefined
square : {...}
square2 : undefined
square4 : undefined

The second phase is the code execution phase
now js will runs through the whole code again line by line and actual value of the variables will be put
now it skips the func
goes to line 6 of code where the function is invoked -> funcName();
so when you invoke a function a brand new execution context is created.
it again has 2 components memory and code

Memory                      |       Code
-----------------------------------------------------------------------------
n: 2                                Memory                      |       Code
                                    -----------------------------------------
                                    num :undefined --> 2
                                    ans : undefined --> 4

square : {...}
square2 : undefined -> 4
square4 : undefined -> 16

after return of ans byfunction the control goes back to the main component
and the function's executuion context is then removed
similiarly line 7 is executed
and then after completion of code the whole execution context is deleted.

# How javascript manages this execution context creation and deletion?
- call stack

Global execution context is created
|       |
|       |
|       |
|       |
---------
| GEC   |
---------
Execution context for function square(n) is created
|                |
|                |
|                |
------------------
|  square(n)     |
------------------
| GEC            |
------------------
Execution context for function square(n) is deleted after execution
|       |
|       |
|       |
|       |
---------
| GEC   |
---------
Execution context for function square(4) is created
|                |
|                |
|                |
------------------
|  square(4)     |
------------------
| GEC            |
------------------
Execution context for function square(n) is deleted
|       |
|       |
|       |
|       |
---------
| GEC   |
---------
Global execution context is deleted
|       |
|       |
|       |
|       |
---------

Call stack maintains the order of execution of execution contexts.