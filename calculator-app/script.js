const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
    }

    else if (value === "=") {

      try {

        currentInput = currentInput
          .replace("×", "*")
          .replace("÷", "/");

        display.value = eval(currentInput);

      } catch {

        display.value = "Error";
      }
    }

    else {

      currentInput += value;

      display.value = currentInput;
    }

  });

});