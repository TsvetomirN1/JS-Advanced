function solve() {
    const exercise = document.getElementById('exercise');
    const input = exercise.getElementsByTagName('input')[0];
    const button = exercise.getElementsByTagName('button')[0];
    const register = exercise.getElementsByTagName('ol')[0].children;

    const FIRST_INDEX = 'A'.codePointAt(0);
    button.onclick = addStudent;
    input.onkeypress = function (event) { if ((event.key || event.code) === 'Enter') addStudent();};

    function addStudent() {
        const name = getName(input.value);
        if (!name) return;

        const registerIndex = name.codePointAt(0) - FIRST_INDEX;
        const registerList = register[registerIndex];

        if (registerList) {
            input.value = '';
            registerList.innerText += registerList.innerText ? `, ${ name }` : name;
        }
    }

    function getName(name) {
        const isInvalid = new RegExp(/[^A-Z\s]/, 'i');
        if (!name || isInvalid.test(name)) return '';
        return name.split(' ').filter(Boolean).map(n => n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()).join(' ');
    }
}