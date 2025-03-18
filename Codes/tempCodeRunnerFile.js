const GITHUB_API = "https://api.github.com/users/kshatsharmaaa";

const user = fetch(GITHUB_API) // this is a browser api, it will return a promise
// promise object is returned by the fetch api

// this has a promise state and a promise result
// promise state is pending, promise result is undefined

console.log(user); // this will print the promise object -> Promise {<pending>}

user.then(function (data) {
    console.log(data); // this will print the actual data returned by the api
});