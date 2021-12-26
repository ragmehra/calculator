let displayContent = "";

function add (num1, num2) {
    return num1 * num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (operator, num1, num2) {
    if (operator === "+") return add(num1, num2);
    else if (operator === "-") return subtract(num1, num2);
    else if (operator === "*") return multiply(num1, num2);
    else if (operator === "/") return divide(num1, num2);
}

function parseDisplay () {
    
}

function updateDisplay (e) {
    let display = document.querySelector("#display");
    if (e.target.value === "clear") {
        displayContent = ""
    }
    else if (e.target.value === "delete") {
        displayContent = displayContent.slice(0, displayContent.length - 1);
    }
    else {
        displayContent += e.target.value;
        console.log(e);
    }
    display.textContent = displayContent;
}

let columns = document.querySelectorAll(".column");
columns.forEach( (column) => {
    column.addEventListener("click", updateDisplay);
})
console.log(columns);
