<script>
  document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.buttons button'));
    const clearButton = document.querySelector('.clear');
    let currentInput = '';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;

            if (isNumber(value) || value === '.') {
                handleNumber(value);
            } else if (isOperator(value)) {
                handleOperator(value);
            } else if (value === '=') {
                handleEquals();
            }

            updateDisplay();
        });
    });
