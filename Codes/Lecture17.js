// example

console.log("start");

setTimeout(function cb() {
    console.log("callback 1");
}, 5000);

console.log("end");

// to block the main thread
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
    
}

console.log("while end");