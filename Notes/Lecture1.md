# How javascript works ?

# Is javascript synchronous or asynchronous ?

# Is javascript single threaded or multi-threaded?

Everything in javascript happens inside the `Execution Context`.

-------------------------------------------------------
-     Memory        -        Code                     -
-------------------------------------------------------
-                   -                                 -  
-                   -                                 -
-                   -                                 -
-                   -                                 -
-                   -                                 -
-                   -
-                   -
-                   -   
-                   -
-                   -
-                   -
--------------------------------------------------------

In memory component all the variables and functions are stored as a key value pair.
var a : 10;
func : {...} // whole code
This memory component is also known as variable environment.

Second component is code component
So this is the place where code is executed one line at a time.
It is also known as thread of execution.

# Important

Javascript is a synchronous single threaded language.
this mean it can only go to the next line once the current line has been executed.

