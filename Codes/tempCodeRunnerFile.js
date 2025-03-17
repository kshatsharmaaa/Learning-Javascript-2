const users = [
    { firstName: "john", lastName: 'doe', age: 25 },
    { firstName: "jane", lastName: 'doe', age: 30 },
    { firstName: "jim", lastName: 'doe', age: 35 },
    { firstName: "jill", lastName: 'doe', age: 40 }
];  

// q -> find the list with the full name of the users

const fullNames = users.map(x => x.firstName + ' ' + x.lastName);
console.log(fullNames);