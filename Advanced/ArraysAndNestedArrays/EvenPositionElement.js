function solve(someArray){
    let arr = [...someArray];
    let result = [];
    for(index in arr){
        if(index % 2 == 0){
            result.push(arr[index]);
        }
    }
    return result.join(" ")
}