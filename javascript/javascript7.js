// You can select elements in the DOM using various methods:

// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

// getElementById
const mainDiv = document.getElementById('main');
console.log(mainDiv); // <div id="main" class="container">...</div>

// getElementsByClassName
const textParagraphs = document.getElementsByClassName('text');
console.log(textParagraphs); // HTMLCollection of <p class="text">...</p>

// getElementsByTagName
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // HTMLCollection of <p>...</p>

// querySelector
const firstParagraph = document.querySelector('.text');
console.log(firstParagraph); // <p class="text">Hello, World!</p>

// querySelectorAll
const allParagraphs = document.querySelectorAll('.text');
console.log(allParagraphs); // NodeList of <p class="text">...</p>



