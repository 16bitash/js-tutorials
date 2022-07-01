// Example 1
const a = [1, 2, 3, 4, 5];

const b = a.map( (element) => element * 10 );

console.log(b);

// Example 2

const c = [ { name: 'Jhon', age: 48 }, { name: 'Alex', age: 30 } ];

const d = c.map( el => el.name );
const e = c.map( el => el.age )

console.log(d);
console.log(e);
