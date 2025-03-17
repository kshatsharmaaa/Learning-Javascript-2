# Trust Issues with SetTimeout()

A settimeout with a delay of 6 secs doesnt always wait for exactly 5 secs.

gec created whrn u run code.
log start.
when we see the settiemout it actually registers this callback method into the web api's environment.
moves to the next line.
log end.
suppose after this end we have millions line of code which takes a lot of time to run.
suppose 10s to run.
gec will wait for 10s and executes these lines of code.
while this was happening the timer of 5sec was expired and the callbakc method was pushed into the callbakc queue.
now eventloop is constantly checking whether this call stack is empty or not.
gec doesnt move out before 10sec in this current scenario.
so after 10secs this callback func cb gets the chance to get executed.
log callback (after 10s).
but we expected it to be logged after 5s.