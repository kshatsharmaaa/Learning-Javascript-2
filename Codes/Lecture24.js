// Promise.all()

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 success...'), 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('Promise 2 success...'), 1000);
    setTimeout(() => reject('Promise 2 failed...'), 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 success...'), 2000);
})

Promise.all([p1, p2, p3]).then((res) => console.log(res))
.catch((err) => console.error(err));


// Promise.allSettled()

Promise.allSettled([p1, p2, p3]).then((res) => console.log(res))
.catch((err) => console.error(err)); 

// Promise.race()

Promise.race([p1, p2, p3]).then((res) => console.log(res))
.catch((err) => console.error(err));

// Promise.any()

Promise.any([p1, p2, p3]).then((res) => console.log(res))
.catch((err) => console.error(err));