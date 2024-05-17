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
        bigDisplay.textContent = op.textContent;
    });
});

let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    
    bigDisplay.textContent = operate (varOne, operator, varTwo);
    clearVars ();
});

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    bigDisplay.textContent = '';
});

// variables and operators in display
function clearDisplay (text) {
    bigDisplay.textContent = '';
    bigDisplay.textContent += text;
};

function updateVarOne (varOneText) {
    if (varOne === undefined) {
        clearDisplay(varOneText);
        varOne = bigDisplay.textContent;        
    } else if (varOne !== undefined) {
        bigDisplay.textContent += varOneText
        varOne = parseFloat(bigDisplay.textContent);
        console.log(`varOne: ${varOne}`)
    }
};

function updateVarTwo (varTwoText) {
    if (varTwo === undefined) {
        clearDisplay(varTwoText);
        varTwo = bigDisplay.textContent;        
    } else if (varTwo !== undefined) {
        bigDisplay.textContent += varTwoText
        varTwo = parseFloat(bigDisplay.textContent);
        console.log(`varTwo: ${varTwo}`)
    }
};

function useOperator (mathOp) {
    if (operator === undefined) {
        operatorFlag = true;
        operator = mathOp
        console.log(`Mathop: ${operator}`)
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
function operate (varOne, operator, varTwo) {
    if (operator === '+') {
        return add(varOne, varTwo);
    } else if (operator === '-') {
        return subtract(varOne, varTwo);
    } else if (operator === '*') {
        return multiply(varOne, varTwo);
    } else if (operator === '/') {
        return divide(varOne, varTwo);
    }
};

console.log(operate(5, '/', 5))