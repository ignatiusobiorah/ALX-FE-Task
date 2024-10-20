//Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

//Functions to perform calculations

//Addition
const calcAdd = (num1, num2) => {
    num1 = parseFloat(document.getElementById("number1").value) || 0;
    num2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = add(num1, num2);
    document.getElementById("calculation-result").textContent = result;
}

//Subtraction 
const calcSub = (num1, num2) => {
    num1 = parseFloat(document.getElementById("number1").value) || 0;
    num2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = subtract(num1, num2);
    document.getElementById("calculation-result").textContent = result;
}

//Division 
const calcDiv = () => {
    num1 = parseFloat(document.getElementById("number1").value) || 0;
    num2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = divide(num1, num2);
    document.getElementById("calculation-result").textContent = result;
    
}

//Multiplication
const calcMultiply = () => {
    num1 = parseFloat(document.getElementById("number1").value) || 0;
    num2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = multiply(num1, num2);
    document.getElementById("calculation-result").textContent = result;
}

//Add event listener that calls the corresponding arithemetic function when clicked
document.getElementById("add").addEventListener("click", calcAdd);

document.getElementById("subtract").addEventListener("click", calcSub);

document.getElementById("divide").addEventListener("click", calcDiv);

document.getElementById("multiply").addEventListener("click", calcMultiply);
