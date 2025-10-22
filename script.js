let display = document.getElementById("display");
let currentInput = "";
let currentOperation = "";

function appendNumber(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function appendOperation(operation) {
    if (currentInput === "" && operation !== ".") return;
    currentInput += operation;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (!Number.isInteger(result)) {
            result = result.toFixed(2);
        }
        currentInput = result;
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = "Erro";
        currentInput = "";
    }


}


function clearDisplay() {
    currentInput = "";
    display.textContent = currentInput;
}  