// For each
const b = [];

function elementLogger(element) {
    b.push(element);
}

const a = [1, 2, 3, 4, 5];

a.forEach(elementLogger);

console.log(b);
