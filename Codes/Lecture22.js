const cart = ["shirt", "pant", "shoe"];

createOrder(cart) // return orderId  --  this is an async operation -- returns us a promise
.then((orderId) => { // callback function (arrow function) -- attached to the promise
    console.log("Order Created with ID: " + orderId);
    return orderId; // return orderId to the next then block
})
.then(() => { // callback function (arrow function) -- attached to the promise
    return proceedToPayment(orderId); // return paymentId 
}) // this is a promise chaining
.then((paymentId) => { // callback function (arrow function) -- attached to the promise
    console.log("Payment Successful with ID: " + paymentId);
})
.catch((err) => {   // this is also a callback function (arrow function) -- attached to the promise
    console.log("Error: ", err.message); // to handle errors in promises: .catch() method
});

// try to write our own create order function
// this is the producer end of the code (hypothetical)

function createOrder(cart) { // we know by design that this will return a promise
    const pr = new Promise(function(resolve, reject){
        // validate cart
        // orderId
        // promise should return the success or failure of the operation
        if(!validatedCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic to create an order
        const orderId = "1234";
        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
            
        }
    }); // create a promise -> new Keyword + Promise() constructor

    return pr; // return the promise
}

function validatedCart(cart) {
    return true;
}

// handle the payment
function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject){
        resolve("payment successful");
    })
}
