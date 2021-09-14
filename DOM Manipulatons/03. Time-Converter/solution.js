function attachEventsListeners() {
    const from = {
        days: (d) => d * 86400,
        hours: (h) => h * 3600,
        minutes: (m) => m * 60,
        seconds: (s) => s
    };
    const to = {
        days: (s) => s / 86400,
        hours: (s) => s / 3600,
        minutes: (s) => s / 60,
        seconds: (s) => s
    };
    Array.from(document.body.getElementsByTagName('div')).forEach(div => {
        div.lastElementChild.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const seconds = from[input.id](Number(input.value));
            for (const key of Object.keys(from)) {
                document.getElementById(key).value = to[key](seconds);
            }
        })
    });
}

function attachEventsListeners() {

    class Time {
        constructor(number, units) {
            this._seconds = {
                days: (d) => d * 86400,
                hours: (h) => h * 3600,
                minutes: (m) => m * 60,
                seconds: (s) => s
            }[units](number);
        }
        get days() { return this._seconds / 86400 }
        get hours() { return this._seconds / 3600 }
        get minutes() { return this._seconds / 60 }
        get seconds() { return this._seconds }
    }

    const buttons = Array.from(document.querySelectorAll('main > div > input[type="button"]'));
    const outputs = Array.from(document.querySelectorAll('main > div > input[type="text"]'));

    buttons.forEach(button => {
        button.style.cursor = 'pointer';
        button.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const time = new Time(Number(input.value), input.id);
            outputs.forEach(element =>  element.value = time[element.id])
        })
    });
}