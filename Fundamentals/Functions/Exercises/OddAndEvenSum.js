function oddAndEvenSum(num){
    let numberString = String(num);
    let oddSum = 0;
    let evenSum = 0;
    for (let index = 0; index < numberString.length; index++){
        if (Number(numberString[index]) % 2 == 0){
            evenSum += Number(numberString[index]);
        }else{
            oddSum += Number(numberString[index]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}