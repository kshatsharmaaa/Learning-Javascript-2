// Exam-ple
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");
// Output : Start -> End -> Callback

// eg two
console.log("start");

document.getElementById("btn").addEventListener("click", function db() {
    console.log("Callbackk");
});

console.log("end");

// how fetch works
console.log("start");

setTimeout(function cbT() {
    console.log("CB Settimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
    console.log("CB Netflix");
});

console.log("End");