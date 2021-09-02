function solve(someArray){
    let arr = [...someArray];
    let items = [];
    let money = 0;
    console.log('Bought furniture:');
    for(let element of arr){
        // if(element == 'Purchase'){
        //     break;
        // }
        let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/;

        let match = pattern.exec(element);
        if(match){
            console.log(match.groups['furniture']);
            money += Number(match.groups['price']) * Number(match.groups['quantity']);
        }
        
    }
    return `Total money spend: ${money.toFixed(2)}`
}
console.log(solve([">>Sofa<<312.23!3",">>TV<<300!5",">Invalid<<!5","Purchase"]));