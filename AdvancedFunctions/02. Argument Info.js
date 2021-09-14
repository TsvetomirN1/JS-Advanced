function solve() {
    const argTypes = {};

    for (let arg of arguments) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (argTypes[type] === undefined) {
            argTypes[type] = 0
        }
        argTypes[type]++;
    }

    Object.entries(argTypes).sort((a, b) => b[1] - a[1]).forEach(e => 
        console.log(`${e[0]} = ${e[1]}`));
}



