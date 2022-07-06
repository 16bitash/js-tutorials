// For each

// Example 1
const b = [];

function elementLogger(element) {
    b.push(element);
}

const a = [1, 2, 3, 4, 5];

a.forEach(elementLogger);

console.log(b);

// Example 2

const c = [1, 2, 3, 4, 5];

c.forEach( (el) => console.log(el) );
