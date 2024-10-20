**JAVASCRIPT CALCULATORS**
This is a simple calculator built using Javascript that allows users to perform basic arithmetic operations.

**Features:**
- Addition: Adds two numbers.
- Subtraction: Subtracts two numbers.
- Division: Divides two numbers.
- Multiplication: Multiplies two numbers.

**How To Use:**
- Input: Enter two numbers into the input fields labeled "Number 1" and "Number 2".

- Select Operation: Click on the button corresponding to the desired arithmetic operation (Add, Subtract, Divide, Multiply).

- View Result: The result of the calculation will be displayed in the "Calculation Result" section.

**How The Code Works**

*Arithmetic Functions:*

- **add(num1, num2):** Adds two numbers and returns the sum.

- **subtract(num1, num2):** Subtracts two numbers and returns the difference.

- **divide(num1, num2):** Divides two numbers and returns the quotient.

- **multiply(num1, num2):** Multiplies two numbers and returns the product.

*Calculation Functions:*

**calcAdd(), calcSub(), calcDiv(), calcMultiply():**

These functions retrieve the values from the input fields using **document.getElementById()**.

They convert the input values to numbers using **parseFloat()**.

They call the corresponding arithmetic function to perform the calculation.

They display the result in the "Calculation Result" section using **document.getElementById("calculation-result").textContent**.

**Event Listeners:**
Event listeners are added to each button using **addEventListener()**.
When a button is clicked, the corresponding calculation function is called.

**Note:**
The **parseFloat()** function is used to handle cases where the input values might be empty or contain non-numeric characters. It converts the input to a floating-point number or returns 0 if the conversion fails.