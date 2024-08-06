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
        case '/': if(num2 === 0) return null
            else return divide(num1, num2);
            break;

        default:
            console.log('Choose the correct operation');
    }
}


const numbersBtn = document.querySelectorAll('.num-button');
const operationsBtn = document.querySelectorAll('.ops.button');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');

let lastValue = document.getElementById('last-value');
let CurrentValue = document.getElementById('current-value');

equalsBtn.addEventListener ('click', evaluate);
clearBtn.addEventListener ('click', clear);
deleteBtn.addEventListener ('click', deleteInput);

numbersBtn.forEach((button) => 
    button.addEventListener('click', () => CurrentValue.innerText += button.value));

operationsBtn.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.value)));


function evaluate() {

}

function clear() {

}

function deleteInput() {

}

function setOperation(operator) {

}