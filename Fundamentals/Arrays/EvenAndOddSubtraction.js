function solve(arr){
    function evenSum(arr){
        let result = 0;
        for (let i of arr){
            if (i % 2 == 0){
                result += i;
            }
        }
        return result;
    }

    function oddSum(arr){
        let result = 0;
        for (let i of arr){
            if (i % 2 != 0){
                result += i;
            }
        }
        return result;
    }


    let sumEven = evenSum(arr);
    let sumOdd = oddSum(arr);
    console.log(sumEven - sumOdd);
}
solve([1,2,3,4,5,6])