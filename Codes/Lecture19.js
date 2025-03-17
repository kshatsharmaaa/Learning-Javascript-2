// MAP ---------------------------------------------------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5];

//double
// syntax:

function double(x) {
    return x * 2;
}

const output = arr.map(double);
console.log(output);

function binary(x) {
    return x.toString(2);
}

const output2 = arr.map(binary);
console.log(output2);

// alternative way
// syntax: put the function directly inside the map function
// this is called anonymous function

const output3 = arr.map(function (x) {
    return x.toString(2);
});
console.log(output3);

// Filter ------------------------------------------------------------------------------------------------------------
// syntax: filter(function)
// filter is used to filter out the elements of an array based on a condition
// the condition is given in the function
// if the condition is true, the element is included in the new array, otherwise it is not

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const output4 = arr2.filter(function (x) { // only even numbers
    return x % 2 === 0;
}
);
console.log(output4);

// Reduce ------------------------------------------------------------------------------------------------------------
// syntax: reduce(function)
// reduce is used to reduce the elements of an array to a single value
// the function takes two arguments: the accumulator and the current element    
// the accumulator is the value that is returned by the function    
// the current element is the current element of the array
// the function is called for each element of the array

const aee = [5,1,2,3,6];
// sum , max
const sum = aee.reduce(function(acc, x) { // curr(x) represents the current element(values)
    // acc is the one which stores the result of the previous operation
    return acc + x;
}, 0); // 0 is the initial value of the accumulator
console.log(sum);


const max = aee.reduce(function(acc, x) { // two params, function and  initial value of acc
    if(x > acc) {
        return x;
    } else {
        return acc;
    }
}, 0);
console.log(max);

// examples --------------------------------------------------------------------

const users = [
    { firstName: "john", lastName: 'doe', age: 25 },
    { firstName: "jane", lastName: 'doe', age: 30 },
    { firstName: "jim", lastName: 'doe', age: 35 },
    { firstName: "jill", lastName: 'doe', age: 40 }
];  

// q -> find the list with the full name of the users

const fullNames = users.map(x => x.firstName + ' ' + x.lastName);
console.log(fullNames);

// q -> how many users have a particular age
const ageCount = users.reduce(function(acc, x) {
    if(acc[x.age]) {
        acc[x.age]++;
    } else {
        acc[x.age] = 1;
    }
    return acc;
}, {});
console.log(ageCount);

//q -> find the first name of people -> (age < 35)
const youngPeople = users.filter(x => x.age < 35).map(x => x.firstName);
console.log(youngPeople);

// using reduce
const youngPeople2 = users.reduce(function(acc,x){
    if(x.age < 35) {
        acc.push(x.firstName);
    }
    return acc;
},[]);
console.log(youngPeople2);