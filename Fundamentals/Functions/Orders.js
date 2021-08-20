function solve(item, count){
    let prices = {"coffee":1.5, "water":1, "coke":1.4, "snacks":2};
    console.log((prices[item] * count).toFixed(2));
}
solve("water", 5)