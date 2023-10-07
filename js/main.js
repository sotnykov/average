let num1;

do {
  num1 = prompt('Write the first number:');

  if (isNaN(num1)) {
    alert(`${num1} is not a number!`);
  }
} while (isNaN(num1));

let num2;

do {
  num2 = prompt('Write the second number:');

  if (isNaN(num2)) {
    alert(`${num2} is not a number!`);
  }
} while (isNaN(num2));

let num3;

do {
  num3 = prompt('Write the third number:');

  if (isNaN(num3)) {
    alert(`${num3} is not a number`);
  }
} while (isNaN(num3));

const average = (+num1 + +num2 + +num3) / 3;

alert(`Average number is ${Math.round(average)}!`);