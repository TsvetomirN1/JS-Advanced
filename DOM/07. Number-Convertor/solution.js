function solve() {

    const container = document.getElementById('container');
    const selectMenu = document.getElementById('selectMenuTo');
    const convertButton = container.getElementsByTagName('button')[0];

    const input = document.getElementById('input');
    const output = document.getElementById('result');

    // selectMenu.innerHTML = `<option selected value="binary">Binary</option><option value="hexadecimal">Hexadecimal</option>`;

    let option = document.createElement('option');
    option.text = 'Binary';
    option.value = 'binary';
    option.selected = 'selected';
    selectMenu.add(option);
    option = document.createElement('option');
    option.text = 'Hexadecimal';
    option.value = 'hexadecimal';
    selectMenu.add(option);

    convertButton.addEventListener('click', function () {

        if (input.value.length > 0 && selectMenu.value !== '') {
            if (selectMenu.value === 'binary') {
                output.value = new Decimal(input.value).toBinary();
            } else {
                output.value = new Decimal(input.value).toHexadecimal();
            }
        }
    });

    function Decimal(n) {
        this.number = Number(n) || 0;
        this.toBinary = () => (this.number >>> 0).toString(2);
        this.toOctal = () => (this.number >>> 0).toString(8);
        this.toHexadecimal  = () => (this.number >>> 0).toString(16).toLocaleUpperCase();
    }
}