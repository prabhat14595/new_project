// Objects
// Objects are collections of key-value pairs. 
// Each key is a string (also called a property name), and each value can be any type, including other objects.

// Using object literal
const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

// Using the Object constructor
const anotherPerson = new Object();
anotherPerson.name = "Bob";
anotherPerson.age = 30;
anotherPerson.city = "San Francisco";

console.log(anotherPerson);

// Dot notation
console.log(person.name); // Output: Alice

// Bracket notation
console.log(person["age"]); // Output: 25


// Adding and Modifying Properties

// Adding a new property
person.country = "USA";

// Modifying an existing property
person.age = 26;

console.log(person);


//delete person.name
delete person.city;

console.log(person);


//Arrays 

// Using array literal
const fruits = ["apple", "banana", "cherry"];

// Using the Array constructor
const moreFruits = new Array("orange", "grape", "melon");

console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: cherry


// Adding elements
fruits.push("date");

// Modifying an element
fruits[1] = "blueberry";

console.log(fruits);
// Removing the last element
fruits.pop();

// Removing the first element
fruits.shift();

// Removing an element at a specific index
fruits.splice(1, 1); // Removes 1 element at index 1

console.log(fruits);


// push: Adds one or more elements to the end of the array.
// pop: Removes the last element from the array.
// shift: Removes the first element from the array.
// unshift: Adds one or more elements to the beginning of the array.
// splice: Adds/removes elements from the array.
// slice: Returns a shallow copy of a portion of an array.
// forEach: Executes a function for each array element.
// map: Creates a new array with the results of calling a function on every element.
// filter: Creates a new array with all elements that pass the test implemented by the provided function.
// reduce: Executes a reducer function on each element of the array, resulting in a single output value.

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log(`${this.brand} ${this.model} is starting.`);
    }
};

car.start(); // Output: Toyota Camry is starting.


const numbers = [1, 2, 3, 4, 5];

// forEach example
numbers.forEach(num => {
    console.log(num * 2);
});

// map example
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter example
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce example
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15


const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "123456",
    changePassword: function(newPassword) {
        this.password = newPassword;
    }
};

user.changePassword("newpassword123");
console.log(user.password); // Output: newpassword123


const numbers1 = [10, 20, 30, 40, 50];

const average = arr => {
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
};

console.log(average(numbers1)); // Output: 30

