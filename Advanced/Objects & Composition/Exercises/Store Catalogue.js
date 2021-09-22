function solve(arr = []){
    let store = {};
    for(let el of arr){
        let [item, price] = el.split(" : ");
        let firstLetter = item[0];
        if(!store[firstLetter]){
            store[firstLetter] = {};
        };
        store[firstLetter][item] = price;
    };
    let groups = Object.keys(store)
    .sort((a, b) => a.localeCompare(b));
    for (let el of groups){
        let group = store[el];
        console.log(el);
        let sortedItems = Object.keys(group)
        .sort((a, b) => a.localeCompare(b));
        for(let item of sortedItems){
            console.log(`  ${item}: ${group[item]}`);
        }
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
