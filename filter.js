// Example 1
const a = [1, 2, 3, 4, 5];

const b = a.filter( (element) => element > 2 );

console.log(b);

// Example 2

const c = [10, 15, 20, 25, 30];

function isOdd(el) {
    return el % 2 !== 0;
}

const d = c.filter(isOdd);

console.log(d);
