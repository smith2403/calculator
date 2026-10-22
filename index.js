const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value === "Error") {
    display.value = "";
  }
  if (["+", "-", "*", "/"].includes(input)) {
    if (display.value === "" || /[+\-*/]$/.test(display.value)) {
      return;
    }
  }

  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const expression = display.value;
  const match = expression.match(/^(-?\d+\.?\d*)([+\-*/])(-?\d+\.?\d*)$/);

  if (!match) {
    display.value = "Error";
    return;
  }

  const num1 = Number(match[1]);
  const operator = match[2];
  const num2 = Number(match[3]);

  switch (operator) {
    case "+":
      display.value = num1 + num2;
      break;
    case "-":
      display.value = num1 - num2;
      break;
    case "*":
      display.value = num1 * num2;
      break;
    case "/":
      display.value = num2 === 0 ? "Error" : num1 / num2;
      break;
  }
}