//variables & booleans
let varOne;
let varTwo;
let operator;

let varOneFlag = false;
let varTwoFlag = false;
let operatorFlag = false;

//event listeners & html elements
let bigDisplay = document.querySelector('.big-display');
let smallDisplay = document.querySelector('.small-display');

let nums = document.querySelectorAll('.num');
nums.forEach(num => {
    num.addEventListener('click', () => {
        let numValue = parseFloat(num.textContent);
        if (operatorFlag === false) {
            updateVarOne(numValue)
        } else if (operatorFlag === true) {
            updateVarTwo(numValue)
        }
    });
});

let ops = document.querySelectorAll('.op');
ops.forEach(op => {
    op.addEventListener('click', () => {
        let opValue = op.dataset.operator
        useOperator (opValue);
    });
});

let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    bigDisplay.textContent = operate (varOne, operator, varTwo);
});

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    bigDisplay.textContent = '';
    clearVars ();
});

// variables and operators in display
function clearDisplay (text) {
    bigDisplay.textContent = '';
    bigDisplay.textContent += text;
};

function updateVarOne (varOneText) {
    if (varOne === undefined) {
        clearDisplay(varOneText);
        varOne = parseFloat(bigDisplay.textContent);
        console.log(`varOne: ${varOne}`)
    } else if (varOne !== undefined) {
        bigDisplay.textContent += varOneText
        varOne = parseFloat(bigDisplay.textContent);
        console.log(`varOne: ${varOne}`)
    }
};

function updateVarTwo (varTwoText) {
    if (varTwo === undefined) {
        clearDisplay(varTwoText);
        varTwo = parseFloat(bigDisplay.textContent);
        console.log(`varTwo: ${varTwo}`)
    } else if (varTwo !== undefined) {
        bigDisplay.textContent += varTwoText
        varTwo = parseFloat(bigDisplay.textContent);
        console.log(`varTwo: ${varTwo}`)
    }
};
//need a second condition at else just to be safe (for multiple clicks on operators)
function useOperator (mathOp) {
    if (operator === undefined) {
        operatorFlag = true;
        operator = mathOp
        console.log(`Mathop: ${operator}`)
    } else if (operator !== undefined) {
        continueCalc ()
        operator = undefined
        operator = mathOp;
        console.log(`Mathop: ${operator}`)
    }
};

function continueCalc () {
    if (operator !== undefined && varOne !== undefined && varTwo !== undefined) {
        bigDisplay.textContent = operate (varOne, operator, varTwo);
        varOne = parseFloat(bigDisplay.textContent);
        varTwo = undefined;
    }    
};

function clearVars () {
    varOne = undefined;
    varTwo = undefined;
    operator = undefined;
    operatorFlag = false;
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
function operate (valueOne, operator, valueTwo) {
    if (operator === '+') {
        return add(valueOne, valueTwo);
    } else if (operator === '-') {
        return subtract(valueOne, valueTwo);
    } else if (operator === '*') {
        return multiply(valueOne, valueTwo);
    } else if (operator === '/') {
        return divide(valueOne, valueTwo);
    }
};

console.log(operate(5, '/', 5))