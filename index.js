const textnumber = document.getElementById('textbox');
const fahrenheit = document.getElementById('fahrenheit');
const celsius = document.getElementById('celsius');
const result = document.getElementById('result');

function convert() {
  let temp = Number(textnumber.value);

  if (fahrenheit.checked) {
    temp = (temp * 9/5) + 32;
    result.innerHTML = temp.toFixed(2) + ' °F';
  } else if (celsius.checked) {
    temp = (temp - 32) * 5/9;
    result.innerHTML = temp.toFixed(2) + ' °C';
  } else {
    result.innerHTML = 'Select a unit';
  }
}
