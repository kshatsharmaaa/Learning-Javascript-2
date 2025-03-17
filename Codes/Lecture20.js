console.log("Namaste");

setTimeout(() => {
    console.log("5 seconds are up");
}, 5000);

console.log("Javascript");

// example

const cart = ["shirt", "pants", "shoes"];
// do things in the order :
//1. create order
//2. payment
//3. show order summary
//4. update wallet

api.createOrder(cart, function () {
    api.proceedToPayment(function() {
        api.showOrderSummary(function() {
            api.updateWallet(function() {
                console.log("Order placed successfully");
            }); // this is inside a callback function
        }); // this is inside a callback function
    }); // this is inside a callback function
});

// Callback hell -> problem with this code!


// Inversion of control ->

api.createOrder(cart, function () {
    api.proceedToPayment(function() {
    }); // this is inside a callback function
});

