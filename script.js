let displayContent = "";
let contentVariable = "";
let num1 = null; 
let num2 = null;
let operator = null;
let index;

function add (num1, num2) {
    return +num1 + +num2;
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

function reset () {
        displayContent = "";
        contentVariable = "";
        operator = null;
        num1 = null;
        num2 = null;
}

function compute () {
    let pass = false;
    num2 = contentVariable;

    console.log("Num1: ", num1);
    console.log("Operator: ", operator);
    console.log("Num2: ", num2);

    if (operator && num1 && num2) {
        displayContent = String(operate(operator, num1, num2));
        console.log("went through");
        let display = document.querySelector("#display p");
        display.textContent = displayContent;
        contentVariable = "";
        operator = null;
        pass = true;
    }
    
    

    console.log("Num1: ", num1);
    console.log("Operator: ", operator);
    console.log("Num2: ", num2);

    return pass;
}

function updateDisplay (e) {
    let display = document.querySelector("#display p");
    if (e.target.value === "clear") {
        reset();
    }
    else if (e.target.value === "delete") {
        console.log("DisplayContent.length - 1: ", displayContent.length-1);
        if ((displayContent.length-1) === index)
        {
            operator = null;
        }
        console.log("Display Content: ", displayContent);
        displayContent = displayContent.slice(0, displayContent.length - 1);
        contentVariable = contentVariable.slice(0, contentVariable.length - 1);
    }
    else if (e && e.target.value !== "=" && 
                !e.target.classList.contains("operator")) {
        displayContent += e.target.value;
        contentVariable += e.target.value;
    }
    else if (e && e.target.value !== "=" && 
    e.target.classList.contains("operator")) {
        
        if (operator) {
            let pass = compute();
            if (pass) {
                num1 = displayContent;
                operator = e.target.value;
                displayContent += e.target.value;
                contentVariable = "";
            }
        }
        else { 
            num1 = displayContent;
            operator = e.target.value;
            displayContent += e.target.value;
            contentVariable = "";
        }
        index = displayContent.length -1;
    }
    
    console.log("Index: ", index);
    console.log("Display Content: ", displayContent);
    console.log("Content Variable: ", contentVariable);
    display.textContent = displayContent;
}

let columns = document.querySelectorAll(".column");
columns.forEach( (column) => {
    column.addEventListener("click", updateDisplay);
})

let equal = document.querySelector("#equal");
equal.addEventListener("click", compute);

