# Good Parts & Bad Parts of Callback 

if we want to create an order and then proceed to payment, there's a dependency between these two, so we can achieve this using callbacks.

# Callback Hell
one callback function calls another callback function, which can lead to a situation known as callback hell.
unreadable & unmaintainable code

# Inversion of Control
Inversion of Control (IoC) is when you loose the flow of your code, when you are using callbacks. You are not in control of your code anymore.

we gave payment func to createorderapi, we're expecting that at some point of time, this api will create an order and call our function back.. this is risky..  we gave the control of our payment to this api

# Benefits of Callbacks:
asynchronous programming
avoiding blocking calls

# Drawbacks of Callbacks:
callback hell
inversion of control

# Alternatives to Callbacks:
Promises
async/await
