//add equal sign backspace and let symbol click only once
//add input add what happens on Nan
// do something with sass
// sass --watch scss:css
sum = (a, b) => {
  return a + b;
};
sub = (a, b) => {
  return a - b;
};
mul = (a, b) => {
  return a * b;
};
dev = (a, b) => {
  return a / b;
};

function whichTask(symbol) {
  if (symbol === "+") {
    return sum;
  } else if (symbol === "-") {
    return sub;
  } else if (symbol === "*") {
    return mul;
  } else if (symbol === "/") {
    return dev;
  } else if (symbol === "=") {
  }
}
const label = document.querySelector("label");
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
//console.log(buttons)
const arrayofButtons = [];
console.log(input);
buttons.forEach((button, i) => {
  arrayofButtons.push(button);
});
console.log(arrayofButtons);
console.log(Array.isArray(arrayofButtons));
console.log(arrayofButtons[0]);
let inputValue = [];

document.addEventListener("keypress", checkKeypress);

arrayofButtons.forEach(button => {
  button.addEventListener("click", takeNumber);
});
/* /[-*+/]/ */
let regexsymbols = `+-*/`;
let numbers = [];

function checkKeypress(e){
    console.log(e.key)
}

function takeNumber() {
  if (regexsymbols.includes(this.value)) {
    numbers.push(input.value);
    numbers.push(this.value);
    console.log(numbers);
    input.value = "";
    inputValue = [];
    if (numbers.length > 3) {
      let removed = numbers.splice(0, 3);
      console.log(numbers);
      console.log(
        whichTask(removed[1])(Number(removed[0]), Number(removed[2]))
      );
      numbers.unshift(
        whichTask(removed[1])(Number(removed[0]), Number(removed[2]))
      );
      console.log("new numbers", numbers);
      label.innerHTML = `<h2>Input:${numbers[0]}</h2>`;
    }
  } else {
    inputValue.push(this.value);
    input.value = inputValue.join("");
  }
}
