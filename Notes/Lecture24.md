# Promise API's

1. Promise.all();
2. Promise.allSettled();
3. Promise.race();
4. Promise.any();

# Promise.all()

Suppose if we have to make parallel api calls and get the results. It takes an array of promises as an input. In official documentation the array is described as iterable.
Promise.all([p1,p2,p3]) -> it will make three parallel api calls and get the results.
Suppose p1 takes 3 secs to get resolved, p2 takes 1s, p3 takes 2s.
CASE 1: Suppose all of them are success.
Output of Promise.all will be array of result of all these promise.
[val1, val2, val3].
How much time will it take?
The final promise.all api will take 3secs.
It will wait for all of them to finish.
CASE 2: One of the promises will get rejected.
Suppose p2 gets rejected.
The ouput will be an error. The same error which is returned by p2.
As soon as error happened it will give error. P2 takes 1s. So output overall time is 1s.
Its kind of all or none case.

# Promise.allSettled()

Promise.allSettled([p1, p2, p3]).
If all of them get succesfull we'll get the same result after 3s -> [val1, val2, val3].
If one of them gets rejected, suppose p2 gets rejected. So this will still wait for all promises to get settled(success or failure).
After 3 secs -> [val1,err2,val3].
The output will always be an array of same number of promises that you passed.

# Promise.race()

Promise.race([p1,p2,p3]).
Its a race. p2 takes 1s, p1 takes 3s, p3 takes 2s.
As soon as first promise is resolved i.e. after 1 sec it will give the result of val2.
It'll give you the value of the first settled promise.
What if this promise is rejected. Error will be thrown.
Doesnt matter success or reject. first settled will be the output.

# Promise.any()

Promise.any([p1,p2,p3]).
Whenever the first promise got resolved(it will wait for first promise to get successful).
This will wait for the first success.
Its a success seeking race.
What if everything fails.
The return result will be an aggregated error [err1,err2,err3].