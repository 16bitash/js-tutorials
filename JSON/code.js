const friends = [
    {
        name: "John",
        age: 30,
        favoriteFood: "Pizza",
        favoriteColor: "Blue",
        favoriteMovie: "Star Wars"
    },
    {
        name: "Jane",
        age: 25,
        favoriteFood: "Pizza",
        favoriteColor: "Red",
        favoriteMovie: "Star Wars"
    },
    {
        name: "Bob",
        age: 20,
        favoriteFood: "Pizza",
        favoriteColor: "Green",
        favoriteMovie: "Star Wars"
    }
];

const jsonData = JSON.stringify(friends);
console.log(jsonData);

const parsedData = JSON.parse(jsonData);
console.log(parsedData);
