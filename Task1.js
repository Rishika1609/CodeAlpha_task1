const result = document.getElementById('result');

function press(val) {
  result.value += val;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}

function clearScreen() {
 result.value = "";
}

document.addEventListener('keydown', (e) => {
  if ('0123456789+-*/.'.includes(e.key)) press(e.key);
  if (e.key === 'Enter') calculate();
  if (e.key === 'Backspace') result.value = result.value.slice(0, -1);
  if (e.key.toLowerCase() === 'c') clearScreen();
});