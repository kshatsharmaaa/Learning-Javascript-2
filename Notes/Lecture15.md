# Event Loops
All the code of the javascript is executed in the call stack
Whenever any js program is run a global execution context is created 
call stack is in the js engine and js engine is in the browser.
the browser has some powers like url, local storage, bluetooth, location, timer, and much more and js engine need some kind of tool to acess this.
web API is the answer
webAPIs : {setTimeout, DOM APIs, fetch(), localSotrage, console, location}
setTimeout is not a part of javascript.
if we wan acess to timer facility do : window.setiImeout
window is global objects around which browser wraps all of these superpowers and give acess of the window to the call stack/js engine

// See the exam-ple
start will print, timer will take 5secs and before that ends end will be printed on console so the GEC will be removed from the call stack and then if we want to execute the function cb there's no gec in call stack. Here's when event loop and callback queue comes into the picture.

since the callback function is regestered now to execute wants to go to callback but it cant go directly there's no execution context so it will go through callback queue

so no when the timer expires this callback function moves inside the callback queue

and the job of the event loop is to check functions of this callback queue and put it into the callstack, acts like a gatekeeper

//eg two
gec is created
putted inside the call stack
console.log(start) ->print start
addEventlistner is another superpower given by the browser which calls DOM API part of WEB API 
this eventlistener registers a callback on an event 'click'
inside this web api environment a callback will be registerd 'db()' and click event is attached to it : this is known as registering a callback
javascriot waits for none
moves to the next line -> prints end
nothing more to execute so gec will be popped out of the stack
but that eventlistener is still in the web api env untill nd unless we explicitly remove that or we close the browser

when the user click ont the btn the callback method is then pushed inside the clbck queue and waits there for its turn to get executed
now eventloop job is to continously monitor the queue and call stack, takes the func in q and push it inside the call stack and then the clbck method is then quickly executed

why need callbackqueue whycant event loop pick method from web api env coz if the user clicks the btn multiple times there will be multiple entries of db in the queuue waiting to be executed

# How fetch() works?
doesnt work the same way as eventlistener or settimeout!

Fetch basically goes and requests an api call so this fetch function returns a promise and we have to pass a callback func which wiill be executed once this promise is resolved
// in eg when we get the data from url we'll execute the callback ffunc
gec created
pushed in the callstack
log start
settimeout registers cbT in webAPi
timer of 5000
fetch func is also a webapi, so it also registers cbF in the webapi env
cbT is waiting for the timer to expire to go to callbck q and then to the callstack to get executed
cbF is waiting for data to be recoverd from the netflix server once the data recieved it will be ready to get executed 
cbF now will also go to the clbck q : that is all we expect but no that wont happen
now comes the most confusing part : i.e. another queue namely microtask queue smiliar to cllbck q but has higher priority
cbF will go to the microtask q
eventloop check whether the call stack is empty or not
when it is empty then it gives the chance to all these funcs in queueus to get executed
lets suppose netflix data is of millions lines
jab tak timer expires
cbT into the clbck q
million line code is finished executing
log -> end
call stack empty
cbF in call stack
log -> CB Netflix
call stack empty
microtask q empty
cbT in callstack
log-> cb settimeout
call stack empty
clbck q empty

# What can come inside this microtask queue?
all the callback function which comes through promises , mutation observer
rest goes inside the clbck q aka task q

suppose the microtask creates a new microtask in itself and goes on , then the task in clbk q will not get a chance for a long time so this is known as starvation of clbk q