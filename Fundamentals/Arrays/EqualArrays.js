function solve(firstArray, secondArray){
    function sumArray(arr){
        let result = 0;
        for (let i of arr){
            result += Number(i);
        }
        return result;
    }


    
    let identical = true;
    for (let i = 0; i < firstArray.length; i++){
        if (firstArray[i] != secondArray[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            identical = false;
            break
        }
    }
    if (identical){
        console.log(`Arrays are identical. Sum: ${sumArray(firstArray)}`);
    }
    
}
solve(['1','2','3','4','5'], ['1','2','4','4','5'])