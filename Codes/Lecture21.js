// without promises -------------------------------------------------------------------------------------
const cart = ["shoes", "pants", "shirt"];

createOder(cart); // this api takes cart and return us orderId, create an order in the backend

proceedToPayment(orderId); // this api takes orderId and return us paymentId, proceed to payment

// these two api's are asynchronous
// wrap this api inside callback
function c() {
    proceedToPayment(orderId);
}
// and pass this func to create order api
createOder(cart, function () {
    proceedToPayment(orderId);
}); // now this is callback hell and we can't use the result of create order api in proceed to payment api
// another issue - inversion of control, we are passing the control to the api, we are not in control


// with promises -------------------------------------------------------------------------------------
const promise = createOrder(cart); // it will return us a promise
// whenever js engine will execute this line, this createorder api will return some promise 
// promise is nothing but a placeholder for the future value, empty object
// {data: undefined}
// and the program will just go on executing
// and after that this promise object will be filled with the value automatically
// that will be returned by the createorder api
// {data: orderId}

// what will happenonce we have the value in the promise object
// we can attach a callback to this promise object
// this function is  -> .then
promise.then(function (orderId) {
    proceedToPayment(orderId);
});
// this is a promise chain, we can attach multiple .then to a promise object
// .then will always return a promise object

// once we have that data inside this promise object {data: orderId} this callback will be executed automatically .then(callback)

// what we did previously is we give the createorder api a callback function (passing the control to the api)
// and that callback function will be executed once the createorder api is done

// but in promises, we attach a callback to the promise object
// and that callback will be executed once the promise object is resolved
// we are not passing the control to the api, we are in control
// now the callback function is our control when to call it, but previously it was the api's control


//---------------------------------------------------------------------------------------------

const GITHUB_API = "https://api.github.com/users/kshatsharmaaa";

const user = fetch(GITHUB_API) // this is a browser api, it will return a promise
// promise object is returned by the fetch api

// this has a promise state and a promise result
// promise state is pending, promise result is undefined

// this is how we attachc a callback to a promise object
console.log(user); // this will print the promise object -> Promise {<pending>}

user.then(function (data) {
    console.log(data); // this will print the actual data returned by the api
}); 


// Promise Chaining --------------------------------------------------------------------------

// when we are dealing with multiple promises, we can chain them together and return the result of the previous promise to the next promise
createOder(cart)
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentId) {
    return showOrderSummary(paymentId);
})
.then(function () {
    console.log("Order placed successfully");
})