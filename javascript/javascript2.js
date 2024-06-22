//Functions 1

function greet(name) {
    return `Hello, ${name}!`;
}

let message_1 = greet("Alice");
console.log(message_1); // Output: Hello, Alice!


//Functions 2

const gree_t = function(name) {
    return `Hello, ${name}!`;
};

let message1 = gree_t("Bob");
console.log(message1); // Output: Hello, Bob!


//Arrow functions
const greet_2 = (name) => `Hello, ${name}!`;

let message_2 = greet_2("Charlie");
console.log(message_2); // Output: Hello, Charlie!



//output functions
let globalVar = "I'm a global variable";

function showGlobalVar() {
    console.log(globalVar);
}

showGlobalVar(); // Output: I'm a global variable


//local variable 
function showLocalVar() {
    let localVar = "I'm a local variable";
    console.log(localVar);
}

showLocalVar(); // Output: I'm a local variable
console.log(localVar); // Error: localVar is not defined



if (true) {
    let blockVar = "I'm a block-scoped variable";
    console.log(blockVar); // Output: I'm a block-scoped variable
}

console.log(blockVar); // Error: blockVar is not defined



function outerFunction() {
    let outerVar = "I'm an outer variable";

    function innerFunction() {
        console.log(outerVar); // Accesses the outer function's variable
    }

    return innerFunction;
}

let closure = outerFunction();
closure(); // Output: I'm an outer variable

