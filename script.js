function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': return add(num1, num2);
            break;
        case '-': return subtract(num1, num2);
            break;
        case '*': return multiply(num1, num2);
            break;
        case '/': if (num2 === 0) return null
        else return divide(num1, num2);
            break;

        default:
            console.log('Choose the correct operation');
    }
}

console.log(operate('*', 2, 5));


const numbersBtn = document.querySelectorAll('.num-button');
const operationsBtn = document.querySelectorAll('.ops-button');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');

let lastValue = document.getElementById('last-value');
let currentValue = document.getElementById('current-value');
let currentOperation = '';
let operand1 = '';
let operand2 = '';
let resetOperator = false;

equalsBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteInput);

numbersBtn.forEach((button) =>
    button.addEventListener('click', () => {
        if (currentValue.textContent === '0') currentValue.textContent = '';
        currentValue.textContent += button.value
    }));

operationsBtn.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.value)));

function setOperation(operator) {
    if (currentOperation !== '') evaluate()
    operand1 = currentValue.textContent;
    currentOperation = operator;
    lastValue.textContent = `${operand1} ${currentOperation}`;
    currentValue.textContent = '';
}

function evaluate() {
    if (currentValue.textContent === '0' && currentOperation === '/') {
        alert('No division by 0 allowed, please try something else');
        return
    }
    else {
        operand2 = currentValue.textContent;
        currentValue.textContent = operate(currentOperation, Number(operand1), Number(operand2));
        lastValue.textContent = `${operand1} ${currentOperation} ${operand2} =`;
        currentOperation = '';
    }
}

function clear() {
    currentValue.textContent = '0';
    lastValue.textContent = '';
    operand1 = '';
    operand2 = '';
    currentOperation = '';
}

function deleteInput() {
    currentValue.textContent = String(currentValue.textContent).slice(0, -1);
}

