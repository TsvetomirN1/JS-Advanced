function solve(fruit,weightinGrams,price){
const weightInKilos = weightinGrams/1000;

const total = weightInKilos*price;

console.log(`I need $${total.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`)

}


solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);