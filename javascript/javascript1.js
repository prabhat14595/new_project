// conditions 

let number = 10;

if (number > 10) {
    console.log("Number is greater than 10");
} else if (number === 10) {
    console.log("Number is exactly 10");
} else {
    console.log("Number is less than 10");
}



let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple is selected");
        break;
    case "banana":
        console.log("Banana is selected");
        break;
    default:
        console.log("Unknown fruit");
}

// Looops!

for (let i = 0; i < 5; i++) {
    console.log("Number: " + i);
}


let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}


let coun_t = 0;

do {
    console.log("Count: " + coun_t);
    coun_t++;
} while (coun_t < 5);



const person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}


const array = [1, 2, 3, 4, 5];

for (let value of array) {
    console.log(value);
}