const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

function updateDisplay(value) {
  display.value = value;
}

function handleInput(value) {
  if (value === "C") {
    currentInput = "";
  } 
  else if (value === "⌫") {
    currentInput = currentInput.slice(0, -1);
  } 
  else if (value === "=") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } 
  else {
    currentInput += value;
  }
  updateDisplay(currentInput);
}

// Button click events
buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleInput(button.dataset.value);
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ) {
    currentInput += key;
  } 
  else if (key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } 
  else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } 
  else if (key === "Escape") {
    currentInput = "";
  }

  updateDisplay(currentInput);
});
