function solve(someArray){
    let arr = [...someArray];
    let result = [];
    for(let index in arr){
        if(index % 2 != 0){
            result.unshift(arr[index] * 2);
        }
    }
    return result.join(" ")
}