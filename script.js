//open variables
let varOne = 0;
let varTwo = 0;
let operator;

//event listeners & variables
// storing values in display
let bigDisplay = document.querySelector('.big-display');

let nums = document.querySelectorAll('.num');
nums.forEach(num => {
    num.addEventListener('click', () => {
        let numValue = parseFloat(num.textContent)
        bigDisplay.textContent += num.textContent;
        if (varOne === 0) {
            varOne += numValue
        }
        console.log(varOne)
    });
});

let ops = document.querySelectorAll('.op');
ops.forEach(op => {
    op.addEventListener('click', () => {
        bigDisplay.textContent += op.textContent;
    });
});

let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {

});

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    bigDisplay.textContent = '';
})

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