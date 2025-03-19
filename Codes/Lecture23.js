// async

async function abc() { // async function always returns a promise
    return "namaste"; // wrap this value inside a  promise and return it
}

// call this function
const dataPromise = abc();
console.log(dataPromise); // Promise { 'namaste' }

// get the value of promise
dataPromise.then((res) => console.log(res)); // namaste


// create a promise
const p = new Promise((resolve, reject) => {
    resolve("Promise resolved");
});

// we can also return a promise from a function
async function def() {
    return p;
}

// call this promise
const dataPromise2 = def();

// get the value of promise
dataPromise2.then((res) => console.log(res)); // Promise resolved


//handle promises before async await
function xyz() { // normal function
    // handle promise p here
    p.then((res) => console.log(res));
}

xyz(); // Promise resolved

//handle promises after async await
async function handlePromise() { // async function
    // handle promise p here
    const res = await p;
    console.log(res);
}

handlePromise(); // Promise resolved

// deep diving in async await -- how async await is different from normal promises
const q = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved Value!");
    }, 2000);
});

const q2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved Value 2!");
    }, 5000);
});

async function handlePromise2() {

    console.log("Hello");

    const res = await q;
    console.log("Data received!");
    console.log(res);
    // after 2 seconds all the promises are resolved we dont have to wait for another 2 seconds to get the value of promise
    const res2 = await q; 
    console.log("Data received 2 !");  
    console.log(res2); 
    // so the 2 sec ones will be printed after 2 seconds and 5 sec ones will be printed after 5(prev 2 + 3 more) seconds == total seconds = 5 seconds
    const res3 = await q2;
    console.log("Data received 3 !");
    console.log(res3);
    // so the below one is 2 sec one but above this is 5 sec one so the below one will be printed with the above one after 5 seconds.
    const res4 = await q;
    console.log("Data received 4 -- 2 sec wala!");
    console.log(res4);
}

handlePromise2(); // Data received! Promise resolved Value! after 2 seconds (both printed together)

// function getData() { // what will get printed first?
//     q.then((res) => console.log(res));
//     console.log("Data received!");
// }
// getData(); // Data received! Promise resolved Value!

// example of async await with fetch
const API_URL = "https://api.github.com/users/kshatsharmaaa";
async function fetchUserData() {
    const data = await fetch(API_URL); // fetch returns a promise -> so we can use await -> so data is a response object
    const jsonValue = await data.json(); // data.json() returns a promise -> so we can use await -> so jsonValue is a json object
    console.log(data);
}
fetchUserData();

// error handling in async await
async function handlePromise3() {
    try {
        const res = await q;
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}