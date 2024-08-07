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

equalsBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteInput);

numbersBtn.forEach((button) =>
    button.addEventListener('click', () => {
        if (currentValue.innerText === '0') currentValue.innerText ='';
        currentValue.innerText += button.value
    }));

operationsBtn.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.value)));

function setOperation(operator) {
    if (currentOperation !== '') evaluate()
    else {
        operand1 = currentValue.textContent;
        currentOperation = operator;
        lastValue.textContent = `${operand1} ${currentOperation}`;
    }
}

function evaluate() {
    if (currentValue.innerText === '0' && currentOperation === '/') {
        alert('No division by 0 allowed, please try something else');
    }
    else {
        operand2 = currentValue.textContent;
        currentValue.textContent = operate(currentOperation, operand1, operand2);
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

}

