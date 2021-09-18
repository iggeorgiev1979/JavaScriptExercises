function solve(someArray){
    let arr = [...someArray];
    arr.sort(function(a, b){return a - b});
    let result = []
    while(arr.length > 0){
        result.push(arr.shift());
        if(arr.length == 0){
            break
        }
        result.push(arr.pop());
    }
    return result
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));