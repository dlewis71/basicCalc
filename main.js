let firstNumber = "";
let operation = "";
let secondNumber = "";

const operatorArray = document.querySelectorAll(".operator")
const numberArray = document.querySelectorAll(".number")
const clearButton = document.querySelector(".clear")
const equal = document.querySelector(".equal")

operatorArray.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!operation && firstNumber) {
      operation = event.target.innerText;
      updateScreen();
    }
  })
})
// When a number is pressed
numberArray.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!operation) {//if we haven't clicked an operator
      firstNumber += event.target.innerText
      updateScreen()
    } else {
      secondNumber += event.target.innerText
      updateScreen()
    }
  })
})

clearButton.addEventListener("click", () => {
  clearScreen();
})
// When equal is pressed
equal.addEventListener("click", (event) => {
  calcResult()
})


// Calculate the result of the current expression, if valid, and display it on the screen
// valid when there is a first, second and operator
// eval will calculate all the math
function calcResult() {
  if (firstNumber && secondNumber && operation) {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    let result;
    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "*") {
      result = num1 * num2;
    } else if (operation === "/") {
      if (num2 === 0) {
        alert("Cannot divide by zero!");
        return;
      }
      result = num1 / num2;
    }

    firstNumber = result.toString();
    operation = "";
    secondNumber = "";
    updateScreen();

  }
}

// Handle operations when operation buttons (+, -, /, *) are pressed
function operationPressed(op) {

  // TODO
}

// Handle numeric input
function numberPressed(number) {
  // TODO
}

// Clear the calculator screen
function clearScreen() {
  firstNumber = "";
  operation = "";
  secondNumber = "";
  updateScreen();
}

// Update the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  document.querySelector("#screen").innerText = `${firstNumber} ${operation} ${secondNumber}`
}


// TODO: Implement query selectors and add event listeners to the calculator buttons