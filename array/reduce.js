const a = [1, 2, 3, 4, 5];

// Old way
function calculateSum(a) {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }

    return sum;
}

// New js way
function reducer(sum, el) {
    const currentResult = sum + el;

    return currentResult;
}

const result = a.reduce(reducer, 0);

console.log(result);
