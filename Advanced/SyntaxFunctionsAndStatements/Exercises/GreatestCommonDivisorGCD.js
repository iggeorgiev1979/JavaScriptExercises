function solve(firstNum, secondNum){
    let smallerNumber = Math.min(firstNum, secondNum);
    let biggerNumber = Math.max(firstNum, secondNum);
    if(biggerNumber % smallerNumber == 0){
        return smallerNumber
    }

    let numbers = [];
    for(let el = 10; el > 1; el--){
        while(true){
            if(smallerNumber % el == 0 && biggerNumber % el == 0){
                numbers.push(el);
                smallerNumber /= el;
                biggerNumber /= el;
            }else{
                break;
            }
        }
    }
    return numbers.reduce(function(a, b){return a * b},1);
}
console.log(solve(2154, 458));