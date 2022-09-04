alert ('Vinculado');

const displayPreviousValue = document.getElementById ('previousValue');
const displayCurrentValue = document.getElementById ('currentValue');
const buttonNumbers = document.querySelectorAll ('.number');
const buttonOperator = document.querySelectorAll ('.operator');

const display = new CalculatorDisplay (displayPreviousValue, displayCurrentValue);

buttonNumbers.forEach (button => {
    button.addEventListener('click', () => {
        display.addNumber(button.innerHTML);
    });
});

buttonOperator.forEach (button => {
    button.addEventListener('click', () => {
        display.compute(button.value); 
    });
});











