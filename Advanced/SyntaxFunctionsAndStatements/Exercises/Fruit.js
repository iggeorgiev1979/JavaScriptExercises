function solve(fruit, kg, price){
    let quantity = Number(kg / 1000);
    let money = quantity * price;
    console.log(`I need \$${money.toFixed(2)} to buy ${quantity.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80)