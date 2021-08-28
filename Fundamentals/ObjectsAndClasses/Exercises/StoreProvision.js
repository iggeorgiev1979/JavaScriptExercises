function store(firstArr, secondArr){
    let storedProducts = {}
    for(let index = 0; index < firstArr.length; index += 2){
        storedProducts[firstArr[index]] = Number(firstArr[index + 1]);
    }
    for(let index = 0; index < secondArr.length; index += 2){
        if(!storedProducts[secondArr[index]]){
            storedProducts[secondArr[index]] = 0;
        }
        storedProducts[secondArr[index]] += Number(secondArr[index + 1]);
    }
    let keys = Object.keys(storedProducts);
    keys.forEach(a => console.log(`${a} -> ${storedProducts[a]}`))
}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])