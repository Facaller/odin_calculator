//variables & booleans
let varOne;
let varTwo;
let operator;

let maxChars = 6;
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
        limitBigDisplay(maxChars);
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
    if (varOne !== undefined && operator !== undefined && varTwo !== undefined) {
        bigDisplay.textContent = operate (varOne, operator, varTwo, maxChars);
        limitBigDisplay (maxChars)
        clearVars ();
        //start looking here
    }
});

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    bigDisplay.textContent = '';
    clearVars ();
});

// variables and operators in display

function limitBigDisplay (maxChars) {
    let currentChars = bigDisplay.textContent;
    let limitedChars = limitCharsDisplay(currentChars, maxChars);
    bigDisplay.textContent = limitedChars;
};

function limitCharsDisplay(maxValue) {
    if (maxValue.length > maxChars) {
        return maxValue.substring(0, maxChars);
    }
    return maxValue;
};

function clearDisplay (text) {
    bigDisplay.textContent = '';
    bigDisplay.textContent += text;
};

function updateVarOne(varOneText, maxChars) {
    if (varOne === undefined) {
        clearDisplay(varOneText);
        varOne = parseFloat(bigDisplay.textContent);
    } else if (varOne !== undefined) {
        bigDisplay.textContent += varOneText;
        varOne = parseFloat(bigDisplay.textContent);
    }
    // Convert varOne to string, limit the characters, and then convert back to float
    varOne = parseFloat(limitCharsDisplay(varOne.toString(), maxChars));
    console.log(`varOne: ${varOne}`);
};
function updateVarTwo(varTwoText, maxChars) {
    if (varTwo === undefined) {
        clearDisplay(varTwoText);
        varTwo = parseFloat(bigDisplay.textContent);
    } else if (varTwo !== undefined) {
        bigDisplay.textContent += varTwoText;
        varTwo = parseFloat(bigDisplay.textContent);
    }
    varTwo = parseFloat(limitCharsDisplay(varTwo.toString(), maxChars));
    console.log(`varTwo: ${varTwo}`);
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
        bigDisplay.textContent = operate (varOne, operator, varTwo, maxChars);
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
function operate (valueOne, operator, valueTwo, maxChars) {
    let result;
    if (operator === '+') {
        result = parseFloat(add(valueOne, valueTwo).toFixed(7));
    } else if (operator === '-') {
        result = parseFloat(subtract(valueOne, valueTwo).toFixed(7));
    } else if (operator === '*') {
        result = parseFloat(multiply(valueOne, valueTwo).toFixed(7));
    } else if (operator === '/') {
        result = parseFloat(divide(valueOne, valueTwo).toFixed(7));
    }
    // Limit the display value
    return limitCharsDisplay(result.toString(), maxChars);
}

// function operate (valueOne, operator, valueTwo,) {
//     if (operator === '+') {
//         return parseFloat(add(valueOne, valueTwo).toFixed(7));
//     } else if (operator === '-') {
//         return parseFloat(subtract(valueOne, valueTwo).toFixed(7));
//     } else if (operator === '*') {
//         return parseFloat(multiply(valueOne, valueTwo).toFixed(7));
//     } else if (operator === '/') {
//         return parseFloat(divide(valueOne, valueTwo).toFixed(7));
//     }
// };

console.log(operate(5, '/', 5))