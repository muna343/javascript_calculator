const calculationHistory = [];

function addToHistory(operands, operator, result) {
    calculationHistory.push({
        operands: operands,
        operator: operator,
        result: result
    });
}

function add(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;

    addToHistory([firstNumber, secondNumber], "+", result);

    return result;
}

function subtract(firstNumber, secondNumber) {
    const result = firstNumber - secondNumber;

    addToHistory([firstNumber, secondNumber], "-", result);

    return result;
}

function multiply(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber;

    addToHistory([firstNumber, secondNumber], "*", result);

    return result;
}

function divide(firstNumber, secondNumber) {
    const result = firstNumber / secondNumber;

    addToHistory([firstNumber, secondNumber], "/", result);

    return result;
}

function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("No stored calculations.");
        return;
    }

    console.log(calculationHistory);
}

/*console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));*/

//displayHistory();
