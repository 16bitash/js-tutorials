// Object
const obj = {
    firstName: 'John',
};

console.log(obj.toString());

console.log(Object.prototype)
console.log(obj.__proto__ === Object.prototype);

// Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ === null);

// Function
function fun1() {}
function fun2() {}

// Making own prototype function
Function.prototype.something = () => console.log('something');
fun1.something();
fun2.something();

console.log(fun.__proto__ === Function.prototype);
console.log(fun.__proto__.__proto__ === Object.prototype);
console.log(fun.__proto__.__proto__.__proto__ === null);
