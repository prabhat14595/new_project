//Functions
function greet() {
    console.log("Hello, World!");
}

console.log(greet());

//Variable 

let intNum = 42;
let floatNum = 3.14;


let single = 'Single quotes';
let double = "Double quotes";
let backtick = `Backticks allow ${single}`;


let isTrue = true;
let isFalse = false;

let emptyValue = null;

let notAssigned;
console.log(notAssigned); // undefined


// Variable Scope
var globalVar = "I'm a global variable";
let blockVar = "I'm a block-scoped variable";
const constantVar = "I cannot be reassigned";



// Coercion
let result = '5' + 3; // '53' (string)
let anotherResult = '5' - 3; // 2 (number)

// Conversion
let strToNum = Number('123'); // 123
let numToStr = String(123); // '123'
let boolToNum = Number(true); // 1
let numToBool = Boolean(0); // false



let age = 25;
const name = "Alice";
var isStudent;
isStudent = true;