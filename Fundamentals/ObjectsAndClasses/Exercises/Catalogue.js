function catalogue(arr){

    function register(str){
        let [item, price] = str.split(" : ");
        let letter = item[0];
        if(!itemsLog[letter]){
            itemsLog[letter] = {};
        }
        itemsLog[letter][item] = price;
    }

    function print(){
        for(el of Object.keys(itemsLog).sort((a, b) => a.localeCompare(b))){
            console.log(el);
            for(i of Object.keys(itemsLog[el]).sort((a, b) => a.localeCompare(b))){
                console.log(`  ${i}: ${itemsLog[el][i]}`);
            }
        }
    }

    let itemsLog = {}

    for(let el of arr){
        register(el);
    }

    print();
}
catalogue(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"])
