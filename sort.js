const a = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function compare(num1, num2) {
    if (num1 < num2) {
        return -1;
    }

    if (num2 < num1) {
        return 1;
    }

    return 0;
}

a.sort(compare);

console.log(a);