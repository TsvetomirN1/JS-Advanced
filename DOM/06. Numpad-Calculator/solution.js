function solve() {
    const keys  = document.getElementsByClassName('keys')[0];
    const output = document.getElementById('expressionOutput');
    const clear = document.getElementsByClassName('clear')[0];
    const result = document.getElementById('resultOutput');

    const operators = {
        '+': (a, b) => Number(a) + Number(b),
        '-': (a, b) => Number(a) - Number(b),
        '/': (a, b) => Number(a) / Number(b),
        '*': (a, b) => Number(a) * Number(b)
    };
    
    clear.addEventListener('click', function () {
        output.innerText = '';
        result.innerText = ''
    });

    keys.addEventListener('click', function ({target: {value}}) {
        if (!value) {
            return
        }

        if (value === '=') {
            const params = output.innerText.split(' ').filter(x => x !== '');

            if (params.length === 3 && operators[params[1]]) {
                result.innerText = operators[params[1]](params[0], params[2]);
                return;
            }

            result.innerText = 'NaN';
            return;
        }

        if (operators.hasOwnProperty(value)) {
            output.innerHTML += ` ${value} `;
        } else {
            output.innerHTML += value
        }
    })
}