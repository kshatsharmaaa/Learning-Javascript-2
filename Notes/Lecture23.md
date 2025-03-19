# Async / Await

# What is Async?

Async is a keyword in Javascript that is used to define asynchronous functions. It allows a function to run in the background while the rest of the code continues to execute. This is useful for tasks that take a long time to complete, such as making API calls or reading files.

Async function always returns a promise.
You can either return a promise like (return new promise...) or for example a string "namaste" -> so this async function will wrap the promise around this string and return it.

# What is Await?

Async and await combo is used to handle promises. But before that how do we handle promises and why do we need async/await? - Inside a normal function handle it using .then() and call the function.
To handle it using async await ->
First create an async function using async keyword.
Then inside it use the word "await" in front of the promise.
and then call the function.
Note: await is a keyword that can be used only inside the async function. 



# How async await is different from normal promises?

In normal way of handling promises, it register the promise with settimeout separately and keep it till it is resolved and it will continue executing thats why  data recieved is printed first. It will not wait for this promise ot resolve.
The problem with this was confusing to developers as they thik that js will wait at promise and then execute. They used to think this console log will happen after the timer expires. --- Commented Part

Now async await :
It doesnt work like above part. It will print both the promise resolved data and console statement after the time expires. So, int his case JS Engine was waiting for promise to be resolved. We only go to line no 67 once this res in line 66 got the await's value. This is a very major difference. The program actually waits at that line. If we do this 2 times. -> after 2 seconds all the promises are resolved we dont have to wait for another 2 seconds to get the value of promise.

# How async await works behind the scenes?

1. Call stack - empty() - as soon as this handlePromises2 function is called it sees that there are promises to be resolved, and these promises are taking their own time for resolution.
2. handlePromises2() will come inside the call stack and it will start executing one by one. First iill will execute line 64. then it goes to the first await line.
3. js does nt wait for anything and this hanlepromise function execition will get suspended and it will move out of the call stack and do not block the main thread. so that if other events are happening that can be executed.
4. It will wait till the q is resolved and then it will move ahead.
5. after 2 sec time handlePromises2 will again come into the call stack and start executing from the next line. and then it comes to q2 and then the same process repeats.

JS Engine isnt wait. It is the function that'll we get suspended for the time.

# Examples of using async/await

Fetch function: How Fetch works? -- this fetch gives u a promise, how do handle promise in async await, you write the keyword await in front of a promise. Return type of fetch is a response.
fetch() function is a promise, when this promise is resolved, it gives u a response object and this has a readable stream and to convert it to json we write response.json(); and this .json() is again a promise and when this promise is resolved it gives u the result(jsonvalue).
fetch() => Response.json() => jsonValue.

# Error Handling

In normal promises we use .catch() method but in async await we'll use try catch block to handle the errors.

# Interviews

summary of above

# Async/await vs Promise.then/ .catch

Async await is the syntactic sugar over the promise .then/.catch, behind the scenes js is using its own promise.then/catch