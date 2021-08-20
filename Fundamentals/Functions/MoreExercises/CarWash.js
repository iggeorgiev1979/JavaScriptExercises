function carWash(commands){

    let soap = value => value += 10;
    let water = value => value * 1.2;
    let vacuumCleaner = value => value * 1.25;
    let mud = value => value -= value * 0.1;

    let result = 0;

    for(let command of commands){
        if(command == "soap"){
            result = soap(result);
        }else if(command == "water"){
            result = water(result);
        }else if (command == "vacuum cleaner"){
            result = vacuumCleaner(result);
        }else{
            result = mud(result);
        }
    }
    return `The car is ${result.toFixed(2)}% clean.`;
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))