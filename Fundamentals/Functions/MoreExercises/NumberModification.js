function numberModification(number){

    function calculateAverageValue(number){
        let numberString = number.toString();
        let sum = 0;
        for(el of numberString){
            sum += Number(el);
        }
        return sum / numberString.length;
    }

    function addNine(number){
        let numberString = String(number);
        numberString += "9";
        return Number(numberString);
    }

    let averageValue = calculateAverageValue(number);
    while(averageValue <= 5){
        number = addNine(number);
        averageValue = calculateAverageValue(number);
    }
    return number;
}
console.log(numberModification(101));