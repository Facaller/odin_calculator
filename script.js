//open variables
let varOne;
let varTwo;
let operator;

//event listeners & variables
let nums = document.querySelectorAll('.num');
nums.forEach(num => {
    num.addEventListener('click', () => {
        bigDisplay.textContent += num.textContent
    });
});

let ops = document.querySelectorAll('.op');
ops.forEach(op => {
    op.addEventListener('click', () => {
        console.log('operator');
    });
});

let bigDisplay = document.querySelector('.big-display');

//operations and equations
//basic equations
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
//calculation operation
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
// storing value in display

console.log(operate(5, '/', 5))