document.getElementById('calc-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const operator = document.getElementById('operator').value;

    let result;
    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').textContent = result;
});
