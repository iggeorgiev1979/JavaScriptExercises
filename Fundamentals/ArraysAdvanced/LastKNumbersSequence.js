function lastNumbers(expectedLength, lastElements){

    function calculateNestElement(num, arr){
        let result = 0;
        if (arr.length < num){
            num = arr.length;
        }
    
        for(let index = arr.length - 1; index > arr.length - num - 1; index--){
            result += arr[index];
        }
        return result;
    }


    let resultArray = [1];

    for(let i = 1; i < expectedLength; i++){
        resultArray.push(calculateNestElement(lastElements, resultArray));
    }

    return resultArray.join(" ");
}
console.log(lastNumbers(6, 3))