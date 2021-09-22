function solve(arr){
    let result = {};
    for(let element of arr){
        let [town, product, price] = element.split(" | ");
        price = Number(price);
        if(!result[product]){
            result[product] = {}
        }
        result[product][town] = price;

    }
    for(let el in result){
        let product = result[el];
        let tmp = Object.keys(product)
        .sort((a, b) => product[a] - product[b]);
        let town = tmp[0];
        console.log(`${el} -> ${product[town]} (${town})`);
    }
}
solve(["Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "New York City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Mexico City | Audi | 100000",
    "Washington City | Mercedes | 1000"
]);