//variables
let varOne;
let varTwo;
let operator;

//event listeners
let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('this works')
})

//operations and equations.
function add (a, b) {
    return a + b
};

function subtract (a, b) {
    return a - b
};
function multiply (a, b) {
    return a * b
};
function divide (a, b) {
    return a / b
};

function operate (varOne, operator, varTwo) {
    if (operator === '+') {
        return add(varOne, varTwo)
    } else if ( operator === '-') {
        return subtract(varOne, varTwo)
    } else if ( operator === '*') {
        return multiply(varOne, varTwo)
    } else if ( operator === '/') {
        return divide(varOne, varTwo)
    }
}

console.log(operate(5, '/', 5))