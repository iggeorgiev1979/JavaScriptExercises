function processOddNumbers(arr){
    let result = [];
    for (let index = arr.length - 1; index > -1; index--){
        if(index % 2 != 0){
            result.push(arr[index] * 2);
        }
    }
    return result.join(" ");
}
console.log(processOddNumbers([10, 15, 20, 25]))