function solve(input) {

    let obj = {};

    for (let i = 0; i < params.lenght; i += 2) {
       obj[input[i]] = +input[i+1]
    }
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);