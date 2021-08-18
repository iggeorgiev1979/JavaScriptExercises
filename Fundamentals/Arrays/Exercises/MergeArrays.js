function solve(firstArray, secondArray){
    for (let i = 0; i < firstArray.length; i++){
        if (i % 2 == 0){
            let sum = Number(firstArray[i]);
            sum += Number(secondArray[i]);
            firstArray[i] = String(sum);
        }else{
            firstArray[i] += secondArray[i];
        }
    }
    console.log(firstArray.join(" - "))
}
solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])