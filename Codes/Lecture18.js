function x() { // x is a callback function
    console.log("Namaste");
}

function y(x) { // y is a higher order function
    x();
}

// array of radius of 4 circles
const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const perimeter = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }   
    return output;
}


console.log(calculate(radius, area));
console.log(calculate(radius, perimeter));
console.log(calculate(radius, diameter));

console.log(radius.map(area)); // same output