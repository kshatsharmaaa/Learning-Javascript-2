# Important Interview questions related to Closures:

setTimeout takes a callback function

Like time, javascript also waits for none!!!

the function in settimeout forms a closure -> it remembers the refernce to i, so wherever this function goes it takes the refernce to i with it.

setTimeout takes that callback function and stores it into a some place and attaches a tmer to it. JS dorent wait for it. Once the timer is finished it takes the function back and put it into the callstack. Thats how setTimeout works.

// to print 1 2 3 4 5 after each and every second -> 1 after 1 sec, 2 after 2...
traditional way -> it is printing 6 6 6 6 6 becAUSE OF CLOSURE, set timeout func  remembers the reference to i, javascript doesnt wait for anything it runs the loop again again, becoz of this now the timer expires and loop ends to the value of i is  6

To fix this we use let insted of var because let has a blocke scope, so whenever a loop runs every time, this i is a new variable alltogether. So every time settimeout is refering to different copy of i.

You cant use let you have to use var -> we have to give a new copy of i everytime -> we can form a closure
wrap the settimeout with a function and call that function everytime with a