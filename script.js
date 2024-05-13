//open variables
let varOne;
let varTwo;
let operator;

//event listeners & variables
let bigDisplay = document.querySelector('.big-display');

let nums = document.querySelectorAll('.num');
nums.forEach(num => {
    num.addEventListener('click', () => {
        let numValue = parseFloat(num.textContent)
        updateDisplay(numValue)
        
    });
});

let ops = document.querySelectorAll('.op');
ops.forEach(op => {
    op.addEventListener('click', () => {
        bigDisplay.textContent = op.textContent;
    });
});

let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {

});

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    bigDisplay.textContent = '';
});

// storing values in display
function clearDisplay (text) {
    bigDisplay.textContent = '';
    bigDisplay.textContent += text;
};

function updateDisplay (text) {
    if (varOne === undefined) {
        clearDisplay(text);
        varOne = bigDisplay.textContent;
    } else {
        bigDisplay.textContent += text
        varOne = parseFloat(bigDisplay.textContent);
        console.log(varOne)
    }
};

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

console.log(operate(5, '/', 5))